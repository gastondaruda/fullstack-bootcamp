
export default function Total({parts}) {


    const total = parts.reduce((acc, value) => acc + value.exercises,0);

    return (
        <p>Number of exercises {total}</p>
    )
}
