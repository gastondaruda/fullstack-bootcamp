import Part from "./Part";

export default function Content({part, exercises}) {
    return (
        <p>
            <Part part={part} exercises={exercises}/>
        </p>
    )
}
