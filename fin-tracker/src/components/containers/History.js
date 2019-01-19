import React from 'react';
import Operation from '../Operation';
import '../../css/history.css';
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

const History = ({ operations, amountDay, amountMonth, isAmount }) =>
    <section className='history'>
        {isAmount ? <Redirect to='/amount' /> : null}
        <div className='historyContent centerHorizontal'>
            <div className='centerHorizontal'>History</div>
            <div className='redLine centerHorizontal'></div>
            {operations.map(operation => <Operation />)}
        </div>
    </section >

const mapStateToProps = ({ operation, amount }) => ({
    operations: operation.operations,
    isAmount: amount.isAmount,
    amountDay: amount.amountDay,
    amountMonth: amount.amountMonth
})

const mapDispatchToProps = dispatch => ({
    onPlay() {
        // dispatch(start())
    },
    onPause() {
    },
    onStop() {
    },
    onAddCommand(command) {
    }
})

const connectedHistory = connect(mapStateToProps, mapDispatchToProps)(History)

export { connectedHistory as History }
