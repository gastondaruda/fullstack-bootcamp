import { useState } from "react"
import Button from "./Components/Button"
import Title from "./Components/Title"
import Statistic from "./Components/Statistic"
import Anecdotes from "./Components/Anecdotes"

function App() {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(good+neutral+bad)

  const handleOperation = (type) => {
    if(type == "good"){
      setGood(good+1)
    }else if(type == "neutral"){
      setNeutral(neutral + 1)
    } else if( type == "bad"){
      setBad(bad+ 1)
    } else {
      return
    }
    setTotal(total+1)
  }

  return (
    <>
      <div>
        <Title title={"feedback"}/>
        <Button handleClick={() => handleOperation("good")} text={"good"}/>
        <Button handleClick={() => handleOperation("neutral")} text={"neutral"}/>
        <Button handleClick={() => handleOperation("bad")} text={"bad"}/>
      </div>
      <Statistic good={good} neutral={neutral} bad={bad} total={total}/>
      <Anecdotes />
    </>
  )
}

export default App
