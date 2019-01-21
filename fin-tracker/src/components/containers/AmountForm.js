import React from 'react';
import { connect } from "react-redux"
import Loader from 'react-loader-spinner'
import NumberFormat from 'react-number-format';
import '../../css/amountForm.css';
import { setAmount } from '../../store/action/amountActions';

const AmountForm = ({ isLoading, amount, onSetPress }) => {
    let amountValueObject
    return (<section className='form'>
        {isLoading ? <Loader
            type="Puff"
            color="#00BFFF"
            height="100"
            width="100"
        /> :
            <div className='amountFormContent'>
                <div>Monthly amount</div>
                <div className='redLine'></div>
                <div className='formInput'>
                    <NumberFormat className='textInput'
                        placeholder='Type your monthly amount'
                        decimalScale={2}
                        thousandSeparator={true}
                        fixedDecimalScale={true}
                        allowNegative={false}
                        value={amount}
                        onValueChange={(valueObject) => amountValueObject = valueObject}
                    />
                    <input className='actionButton green'
                        type='button'
                        value='Set'
                        onClick={(e) => {
                            onSetPress(amountValueObject.value)
                        }}></input>
                </div>
            </div>
        }
    </section>)
}
const mapStateToProps = ({ amount, app }) => ({
    amount: amount.amount,
    isLoading: app.isLoading
})

const mapDispatchToProps = dispatch => ({
    onSetPress(amount) {
        dispatch(setAmount(amount))
    }
})

const connectedAmountForm = connect(mapStateToProps, mapDispatchToProps)(AmountForm)

export { connectedAmountForm as AmountForm }