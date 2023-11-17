import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

export default function Course({course}) {
    console.log(course.parts)

    return (
        <>
            {
                course.map(part =><div> <Header title={part.name}/>
                                    <Content parts={part.parts}/>
                                    <Total parts={part.parts}/>
                                </div>)
            } 
        </>
    )
}
