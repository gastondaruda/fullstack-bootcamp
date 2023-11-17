import React from 'react'

export default function Total({parts}) {

    const total = parts.reduce((acc, value) => acc + value.exercises,0);

    return (
        <h6>Total of {total} exercises</h6>
    )
}
