import {useState, useEffect} from 'react'

export default function Anecdotes() {

    const [anecdotesArr, setAnecdotesArr] = useState(0)
    const [anecdotePopular, setAnecdotePopular] = useState("")

    const handleAnecdote = () => {
        setAnecdotesArr(Math.floor(Math.random() * anecdotes.length) )
        console.log(anecdotesArr)
    }

    const handlePoints = () => {
        anecdotes[anecdotesArr].point += 1
        console.log(anecdotes)

    }

    useEffect(() => {
        handleAnecdote()
    }, [])

    /*
    const handlePopularAnecdote = () => {
        console.log( anecdotes.reduce((acc,value) => acc.point < value.points ? acc.anecdote : value.anecdote))
    }
    */
    return (
        <>
            <div>
                {anecdotes[anecdotesArr].anecdote}
                <button onClick={handleAnecdote}>Next anecdote</button>
                <button onClick={handlePoints}>Vote anecdote</button>
            </div>
            {/*
            <div>
                <h3>Anecdote with more votes</h3>
                <button onClick={handlePopularAnecdote}>Popular</button>
            </div>
            */}
        </>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    {anecdote: "Adding manpower to a late software project makes it later!", point: 0},
    {anecdote: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", point: 0},
    {anecdote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", point: 0},
    {anecdote: "Premature optimization is the root of all evil.", point: 0},
    {anecdote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", point: 0}
] 