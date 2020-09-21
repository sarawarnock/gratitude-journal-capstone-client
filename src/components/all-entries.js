import React from 'react'
import { Link } from 'react-router-dom'

export default function AllEntries(props) {
    if ((props.allEntries.length) && (props.allEntries.length == 0)) {
        return (
            <p>Sorry, no entries to display!</p>
        )
    }
    return (
        <div className="App">
            <div className="my-journal">
                <h1 className="journal-title">My Journal</h1>
                    <div className="my-journal-entries">
                        {props.allEntries.map(entry => {
                            return (
                                <div className="entry__container">
                                    <div className="entry" key={entry.id}>
                                        <h2>{entry.title}</h2>
                                        <p> 1. {entry.bullet_1} </p>
                                        <p> 2. {entry.bullet_2} </p>
                                        <p> 3. {entry.bullet_3} </p>
                                        <p> Overall Mood: {entry.mood} </p>
                                    </div>
                                </div>
                        )})}
                    <div className="button" id="button-3">
                        <div id="circle"></div>
                        <a><Link to='/newentry' className="new-entry-button">New Entry</Link></a>
                    </div>
                </div>
            </div>
        </div>
    )
}