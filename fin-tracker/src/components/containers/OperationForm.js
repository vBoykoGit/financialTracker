import React, { Component } from 'react';
import { connect } from "react-redux"
import NumberFormat from 'react-number-format';
import '../../css/operationForm.css';
import { newOperation } from '../../store/action/operationActions';

class OperationForm extends Component {
    state = {
        amountValue: ''
    }
    render() {
        return (
            <section className='form'>
                <div className='operationFormContent'>
                    <div className='right'>You have {this.props.amountMonth}R left for the month</div>
                    <div className='right'>{this.props.amountDay}R left for the day</div>
                    <div className='redLine'></div>
                    <div className='formInput'>
                        <NumberFormat className='textInput'
                            value={this.state.amountValue}
                            placeholder='Type operation sum'
                            decimalScale={2}
                            thousandSeparator={true}
                            fixedDecimalScale={true}
                            allowNegative={false}
                            onValueChange={(valuesObject) => {
                                const { value } = valuesObject;
                                this.setState({ amountValue: value })
                            }}
                        />
                        <input className='actionButton red'
                            type='button'
                            value='Expense'
                            onClick={(e) => {
                                this.props.onExpense(this.state.amountValue)
                                this.setState({ amountValue: '' })
                            }}></input>
                        <input className='actionButton green'
                            type='button'
                            value='Income'
                            onClick={(e) => {
                                this.props.onIncome(this.state.amountValue)
                                this.setState({ amountValue: '' })
                            }}></input>
                    </div>
                </div>
            </section>)
    }
}

const mapStateToProps = ({ amount }) => ({
    amountDay: amount.amountDay,
    amountMonth: amount.amountMonth
})

const mapDispatchToProps = dispatch => ({
    onExpense(sum) {
        dispatch(newOperation(-sum))
    },
    onIncome(sum) {
        dispatch(newOperation(sum))
    },
})

const connectedOperationForm = connect(mapStateToProps, mapDispatchToProps)(OperationForm)

export { connectedOperationForm as OperationForm }
