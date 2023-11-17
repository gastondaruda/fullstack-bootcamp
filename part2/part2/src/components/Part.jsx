import React from 'react'

export default function Part({text,value}) {
    return (
        <tr>
            <td>{text} {value}</td>
        </tr>
    )
}
