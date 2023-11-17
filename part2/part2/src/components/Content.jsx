
import Part from './Part'

export default function Content({parts}) {

    console.log(parts)

    return (
        <table>
            <tbody>
                {
                    parts.map(part => <Part key={part.id} text={part.name} value={part.exercises}/>)
                }
            </tbody>
        </table>
    )
}
