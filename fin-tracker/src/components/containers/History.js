import React, { Component } from 'react';
import Operation from '../Operation';
import '../../css/history.css';
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import { getOperations, deleteOperation } from '../../store/action/operationActions';

class History extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getOperations())
    }
    render() {
        const { operations = [], isAmount } = this.props;
        return (
            <section className='form'>
                {isAmount ? null : <Redirect to='/amount' />}
                <div className='historyContent centerHorizontal'>
                    <div>History</div>
                    <div className='redLine centerHorizontal'></div>
                    {operations.map(operation => <Operation sum={operation.sum} date={operation.date} onDelete={() => { this.props.onDelete(operation) }} />)}
                </div>
            </section >
        )
    }
}

const mapStateToProps = ({ operation, amount }) => ({
    operations: operation.operations,
    isAmount: amount.isAmount,
    amountDay: amount.amountDay,
    amountMonth: amount.amountMonth
})

const mapDispatchToProps = dispatch => ({
    onDelete(operation) {
        dispatch(deleteOperation(operation))
    },
    dispatch
})

const connectedHistory = connect(mapStateToProps, mapDispatchToProps)(History)

export { connectedHistory as History }
