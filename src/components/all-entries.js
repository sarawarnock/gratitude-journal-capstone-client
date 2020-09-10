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
            <main className="main">
                <h1>My Journal</h1>
                    {props.allEntries.map(entry => {
                        return (
                            <div key={entry.id}>
                                <h2>{entry.title}</h2>
                                <p> {entry.bullet_1} </p>
                                <p> {entry.bullet_2} </p>
                                <p> {entry.bullet_3} </p>
                                <p> {entry.mood} </p>
                            </div>
                    )})}
                <Link to='/newentry'>
                    <button>New Entry</button>
                </Link>
            </main>
        </div>
    )
}