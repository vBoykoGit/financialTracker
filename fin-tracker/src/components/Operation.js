import React from 'react';
import '../css/operation.css';

const Operation = ({ sum = 0, date, onDelete }) => {
    const isPositive = sum >= 0
    const dateObject = new Date(date)
    return (
        <section className='operation'>
            <div className={`circle centerVertical ${isPositive ? 'green' : 'red'}`}>
                <div>{isPositive ? '+' : '-'}</div>
            </div>
            <div className='operationDetails'>
                <div>{sum}R</div>
                <div>{date ? dateObject.toLocaleString() : null}</div>
            </div>
            <div className='closeButton' onClick={() => onDelete()}>x</div>
        </section>)
}

export default Operation