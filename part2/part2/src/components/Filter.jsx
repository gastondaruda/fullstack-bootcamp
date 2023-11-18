import React from 'react'

export default function Filter({handleSearch}) {
    return (
        <div>
            <span>filter showm with a </span>
            <input 
                type="text"
                onChange={handleSearch}
            />
        </div>
    )
}
