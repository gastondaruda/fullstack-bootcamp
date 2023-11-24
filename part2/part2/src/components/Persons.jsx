import React from 'react'

export default function Persons({persons, handleDelete}) {
    return (
        <ul>
            {
                persons.map((person, i) => <li key={i}>
                                                {person.name} - {person.number} 
                                                <input
                                                    type="button"
                                                    value="delete"
                                                    id={person.id}
                                                    onClick={handleDelete}
                                                />    
                                            </li>)
            }
        </ul>
    )
}
