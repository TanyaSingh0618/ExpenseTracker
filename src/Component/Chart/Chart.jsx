import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
    const dataPointValues = props.dataCharts.map(dataCharts => dataCharts.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className='chart'>
            {props.dataCharts.map(dataCharts => < ChartBar
                key={dataCharts.label}
                value={dataCharts.value}
                maxValue={totalMaximum}
                label={dataCharts.label} />)}
        </div>
    )
}

export default Chart