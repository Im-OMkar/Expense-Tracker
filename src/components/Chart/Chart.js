import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value)
    const maxValue = Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {
                props.dataPoints.map((dataPoint)=>{
                    return (
                        <ChartBar
                            key = {dataPoint.label}
                            value = {dataPoint.value}
                            maxValue = {maxValue}
                            label = {dataPoint.label}
                        />
                    )
                })
            }
        </div>
    )
}

export default Chart