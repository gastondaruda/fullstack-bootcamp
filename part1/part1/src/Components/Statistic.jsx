import StatisticLine from './StatisticLine'
import Title from './Title'

export default function Statistic({good, total, neutral, bad}) {
    return (
        <div>
            <Title title={"statistic"}/>
            {
                total === 0 ? "No feedback given" : 
                    <table>
                        <tbody>
                            <StatisticLine text={"good"} value={good}/>
                            <StatisticLine text={"neutral"} value={neutral}/>
                            <StatisticLine text={"bad"} value={bad}/>
                            <StatisticLine text="all" value={total}/>
                            <StatisticLine text="average" value={(good + bad + neutral) / 3}/>
                            <StatisticLine text="positive" value={`${Math.floor((good / total) * 100)+ "%"}`}/>
                        </tbody>
                    </table>
            }
        </div>
    )
}
