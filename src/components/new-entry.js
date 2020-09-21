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
        errors: {
            entryError: 'Entry cannot be blank',
            moodError: 'Mood cannot be blank',
            titleError: 'Title cannot be blank'
        }
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
        if (entry == undefined) {
            return (
                'Field cannot be left blank'
            )
        } return ' '
    }

    validateMood(mood) {
        if (mood == undefined) {
            return (
                'Mood cannot be blank'
            )
        } return ' '
    }

    validateTitle(title) {
        if (title == undefined) {
            return (
                'Title cannot be blank'
            )
        } return ' '
    }

    //onSubmit = post to database
    handleSubmit = (e) => {
        e.preventDefault();

        const data = {}
        //get all the from data from the form component
        const formData = new FormData(e.target)

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }

        let { gratitudeValue1, gratitudeValue2, gratitudeValue3, mood, title } = data

        let payload = {
            title: this.checkString(data.title),
            user_id: sessionStorage.user_id,
            bullet_1: this.checkString(data.gratitudeValue1),
            bullet_2: this.checkString(data.gratitudeValue2),
            bullet_3: this.checkString(data.gratitudeValue3),
            mood: this.checkString(data.overallMood),
            is_public: 0
        }

        if (this.validateEntry(gratitudeValue1) === '') {
            this.setState({
                error: 'Entry cannot be blank'
            })
        }

        if (this.validateEntry(gratitudeValue2) === '') {
            this.setState({
                error: 'Entry cannot be blank'
            })
        }

        if (this.validateEntry(gratitudeValue3) === '') {
            this.setState({
                error: 'Entry cannot be blank'
            })
        }

        if (this.validateMoode(mood) === '') {
            this.setState({
                error: 'Mood cannot be blank'
            })
        }

        if (this.validateTitle(title) === '') {
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
        let validationError = ''
        if (this.state.error != '') {
            validationError = this.state.error
        }
        const entryError = this.validateEntry();
        const titleError = this.validateTitle();

        return (
            <div className="App">
                <div className="main">
                    <form className="new-entry" onSubmit={this.handleSubmit}>
                        <div className="gratitude-values">
                            <h2 className="values-title"> What are you grateful for today? </h2>
                            <ul>
                                <li>
                                    <label htmlFor="inp" class="inp">
                                        {validationError}
                                        <input type="text" id="inp" name="gratitudeValue1" placeholder="#1" onChange={this.handleGratitudeValue1Change} />
                                        {this.state.bullet_1.touched && <ValidationError message={entryError} />}
                                        <span class="focus-bg"></span>
                                        <span class="error" aria-live="polite"></span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="inp" class="inp">
                                        <input type="text" id="inp" name="gratitudeValue2" placeholder="#2" onChange={this.handleGratitudeValue2Change} />
                                        {this.state.bullet_2.touched && <ValidationError message={entryError} />}
                                        <span class="focus-bg"></span>
                                        <span class="error" aria-live="polite"></span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="inp" class="inp">
                                        <input type="text" id="inp" name="gratitudeValue3" placeholder="#3" onChange={this.handleGratitudeValue3Change} />
                                        {this.state.bullet_3.touched && <ValidationError message={entryError} />}
                                        <span class="focus-bg"></span>
                                        <span class="error" aria-live="polite"></span>
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
                            {this.state.mood.touched && <ValidationError message={titleError} />}
                        </div>
                        <div className="entry-name">
                            <input type="text" name="title" placeholder="Title" onChange={this.handleTitleChange} />
                            {this.state.title.touched && <ValidationError message={titleError} />}
                        </div>
                        <br />
                        <button className="button submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}