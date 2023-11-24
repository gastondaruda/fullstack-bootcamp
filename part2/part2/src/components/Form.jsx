import React from 'react'

export default function Form({addPerson, newName,newNumber, handleAddPerson, handleNewNumber}) {
    return (
        <form onSubmit={addPerson}>
        <h3>Add a new</h3>
        <div>
            name: 
                <input
                value={newName} 
                onChange={handleAddPerson}
                placeholder="Add a person..."
                required
                />
                <div>newNumber: 
                    <input
                    placeholder="Add number..."
                    value={newNumber}
                    onChange={handleNewNumber}
                    required
                    />
                </div>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}
