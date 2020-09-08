import React from 'react'
import { Link } from 'react-router-dom'

export default function AllEntries(props) {
    console.log(props.allEntries)
    if (props.allEntries.length === 0) {
        return 'Sorry, no entries to display!'
    } else
    return (
        <div className="App">
            <main className="main">
                <h1>My Journal</h1>
                    {props.allEntries.map(entry => {
                        return (
                            <div>
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