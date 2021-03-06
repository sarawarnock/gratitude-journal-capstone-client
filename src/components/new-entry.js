import React, { Component } from "react";
import config from '../config'
import ValidationError from './validation-error'

export default class NewEntry extends Component {
    state ={
        username: '',
        sessionUser: '',
        isSubmitted: false,
        bullet_1: '',
        bullet_2: '',
        bullet_3: '',
        mood: '',
        title: '',
        error: null,
        entryError: null,
        titleError: null,
        moodError: null
    }

    updateSessionUser(userId) {
        this.setState({
          sessionUser: userId
        })
    }

    componentDidMount() {
        this.updateSessionUser(sessionStorage.user_id)
    }

    handleGratitudeValue1Change = (e) => {
        this.setState({
            bullet_1: e.target.value
        })
    }

    handleGratitudeValue2Change = (e) => {
        this.setState({
            bullet_2: e.target.value
        })
    }

    handleGratitudeValue3Change = (e) => {
        this.setState({
            bullet_3: e.target.value
        })
    }

    handleMoodChange = (e) => {
        this.setState({
            mood: e.target.value
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    checkString(inputString) {
        let outputText = inputString;
        if (inputString === undefined) {
            outputText = "";
        }
        if (inputString == null) {
            outputText = "";
        }
        return outputText;
    }

    validateEntry(entry) {
        if (entry == '') {
            this.setState({
                entryError: 'Entry cannot be left blank'
            })
        }
    }

    validateMood(mood) {
        if (mood == '') {
            this.setState({
                moodError: 'Mood cannot be left blank'
            })
        }
    }

    validateTitle(title) {
        if (title == '') {
            this.setState({
                titleError: 'Title cannot be left blank'
            })
        } return
    }
    
    //onSubmit = post to database
    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();

        const data = {}
        //get all the from data from the form component
        const formData = new FormData(e.target)

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }

        // let { gratitudeValue1, gratitudeValue2, gratitudeValue3, overallMood, title, user_id } = data

        let payload = {
            title: this.checkString(data.title),
            user_id: sessionStorage.user_id,
            bullet_1: this.checkString(data.gratitudeValue1),
            bullet_2: this.checkString(data.gratitudeValue2),
            bullet_3: this.checkString(data.gratitudeValue3),
            mood: this.checkString(data.overallMood),
            is_public: 0
        }

        if (this.validateEntry(data.gratitudeValue1) === '') {
            this.setState({
                error: 'Entry cannot be blank'
            })
        }

        if (this.validateEntry(data.gratitudeValue2) === '') {
            this.setState({
                error: 'Entry cannot be blank'
            })
        }

        if (this.validateEntry(data.gratitudeValue3) === '') {
            this.setState({
                error: 'Entry cannot be blank'
            })
        }

        if (this.validateMood(data.overallMood) === '') {
            this.setState({
                error: 'Mood cannot be blank'
            })
        }

        if (this.validateTitle(data.title) === '') {
            this.setState({
                error: 'Title cannot be blank'
            })
        }

        fetch(`${config.API_ENDPOINT}/entries`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
            // if the api returns data ...
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later.')
                }
                 // ... convert it to json
                 return res.json()
            })
                // use the json api output
            .then(data => {
              // check if there are no results
              if (data.totalItems === 0) {
                throw new Error('No data found')
              }
              //this.props.allEntries(data);
              window.location = `/home`
          })
            .catch(err => {
              this.setState({
                error: err.message
            })
          })

        this.setState({
            bullet_1: data.gratitudeValue1,
            bullet_2: data.gratitudeValue2,
            bullet_3: data.gratitudeValue3,
            mood: data.overallMood,
            title: data.title
        })
    }

    render() {
        let entryError = ''
        let moodError = ''
        let titleError = ''
        if (this.state.entryError != '') {
            entryError = this.state.entryError
        }
        else if (this.state.moodError != '') {
            moodError = this.state.moodError
        } 
        else if (this.state.titleError != '') {
            titleError = this.state.titleError
        }

        return (
            <div className="App">
                <div className="main">
                    <form className="new-entry" onSubmit={this.handleSubmit}>
                        <div className="gratitude-values">
                            <h2 className="values-title"> What are you grateful for today? </h2>
                            <ul>
                                <li>
                                    <label htmlFor="inp" className="inp">
                                        
                                        <input type="text" id="inp" name="gratitudeValue1" placeholder="#1" required onChange={this.handleGratitudeValue1Change} />
                                        {/* {this.state.bullet_1.touched && <ValidationError message={entryError} />} */}
                                        <div>{entryError}</div>
                                        <span className="focus-bg"></span>
                                        <span className="error" aria-live="polite"></span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="inp" className="inp">
                                        <input type="text" id="inp" name="gratitudeValue2" placeholder="#2" required onChange={this.handleGratitudeValue2Change} />
                                        {/* {this.state.bullet_2.touched && <ValidationError message={entryError} />} */}
                                        <div>{entryError}</div>
                                        <span className="focus-bg"></span>
                                        <span className="error" aria-live="polite"></span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="inp" className="inp">
                                        <input type="text" id="inp" name="gratitudeValue3" placeholder="#3" required onChange={this.handleGratitudeValue3Change} />
                                        {/* {this.state.bullet_3.touched && <ValidationError message={entryError} />} */}
                                        <div>{entryError}</div>
                                        <span className="focus-bg"></span>
                                        <span className="error" aria-live="polite"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="overall-mood">
                            <h2>What is your overall mood?</h2>
                            <input type="radio" id="happy" name="overallMood" value="Happy" onClick={this.handleMoodChange} />
                            <label htmlFor="happy">Happy</label>

                            <input type="radio" id="ok" name="overallMood" value="OK" onClick={this.handleMoodChange} />
                            <label htmlFor="ok">OK</label>

                            <input type="radio" id="sad" name="overallMood" value="Sad" onClick={this.handleMoodChange} />
                            <label htmlFor="sad">Sad</label>
                            <div>{moodError}</div>
                        </div>
                        <div className="entry-name">
                            <input type="text" name="title" placeholder="Title" required onChange={this.handleTitleChange} />
                            {/* {this.state.title.touched && <ValidationError message={titleError} />} */}
                            <div>{titleError}</div>
                        </div>
                        <br />
                        <button className="button submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}