import React from 'react'

export default function Persons({persons}) {
    return (
        <ul>
            {
                persons.map((person, i) => <li key={i}>{person.name} - {person.number}</li>)
            }
        </ul>
    )
}
