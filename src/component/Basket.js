import React from 'react'
import PropTypes from 'prop-types'
import { getCurrencySymbol, convertCurrency } from '../currency'

export default class Basket extends React.Component {
    render() {
        const { items, total, currency } = this.props;
        return (
            <div>
                {items} item | { getCurrencySymbol(currency)}{convertCurrency(total, currency)}
            </div>
        )
    }
}

Basket.contexTypes ={
    currency: PropTypes.string,
}