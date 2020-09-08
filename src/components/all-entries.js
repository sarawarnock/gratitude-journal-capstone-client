import React from 'react'
import { Link } from 'react-router-dom'

export default class AllEntries extends React.Component {
    render() {
        return (
            <div className="App">
                <main className="main">
                    {/* <h1>All Entries</h1>
                    <table className="workouts-table">
                        <thead>
                            <tr>
                                <th className="tb-name">Name</th>
                                <th className="tb-id">Workout ID</th>
                                <th className="tb-view">View Workout</th>
                            </tr>
                        </thead>
                    <tbody>
                        {props.allEntries.map(workout => {
                        return (
                            <tr>
                                <td>{workout.workouts_name}</td>
                                <td> {workout.id} </td>
                                <td>
                                    <button>
                                    <Link
                                    to={`/past-workouts/${workout.id}`}
                                    >
                                    View
                                    </Link>
                                    </button>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                    </table>
                <Link
                    to='/newentry'
                >
                    <button>New Entry</button>
                </Link> */}
                </main>
            </div>
        )
    }
}