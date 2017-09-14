import React, { Component } from 'react';

function Completed(props) {
    return (
        <div className="Completed">
            <h1>Completed Stuff!</h1>
            <ul>
                {
                    props.completedList.map((item, i, arr) => {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
                </ul>
            </div>
    )
}


// class Completed extends Component {
//     render() {
//         return (
            
//         )
//     }
// }

export default Completed;