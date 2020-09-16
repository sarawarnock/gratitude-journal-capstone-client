import React from 'react'
import { Link } from 'react-router-dom'

export default function AllEntries(props) {
    console.log(props.allEntries)
    if ((props.allEntries.length) && (props.allEntries.length == 0)) {
        console.log(props.allEntries.length)
        return (
            <p>Sorry, no entries to display!</p>
        )
    } 
    // else if (props.allEntries.length == 1) {
    //     console.log(props.allEntries.length)
    //     return (
    //         <div key={props.allEntries.id}>
    //             <h2>{props.allEntries.title}</h2>
    //             <p> {props.allEntries.bullet_1} </p>
    //             <p> {props.allEntries.bullet_2} </p>
    //             <p> {props.allEntries.bullet_3} </p>
    //             <p> {props.allEntries.mood} </p>
    //         </div>
    //     )
    // }
    return (
        <div className="App">
            <div className="my-journal">
                <h1>My Journal</h1>
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
                    {/* <Link to='/newentry'>
                        <button className="button" id="button-3">New Entry</button>
                    </Link> */}
                    <div className="button" id="button-3">
                        <div id="circle"></div>
                        <a><Link to='/newentry' className="new-entry-button">New Entry</Link></a>
                    </div>

                    {/* <div className="button" id="button-3">
                        <div id="circle"></div>
                        <a>
                            <Link to='/newentry'>
                                <button className="button" id="button-3">New Entry</button>
                            </Link>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}