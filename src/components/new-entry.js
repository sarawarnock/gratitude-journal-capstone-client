import React, { Component } from "react";
import config from './config'
import TokenService from './services/token-service.js';

export default class NewEntry extends Component {
    state ={
        user_name: '',
    }

    render() {
        return (
            <div className="App">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="gratitude-values">
                            <h2> What are you grateful for today? </h2>
                            <ul>
                                <li>
                                    <input type="text" name="gratitudeValue" placeholder="#1" />
                                </li>
                                <li>
                                    <input type="text" name="gratitudeValue" placeholder="#2" />
                                </li>
                                <li>
                                <input type="text" name="gratitudeValue" placeholder="#3" />
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
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}