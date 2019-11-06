import React from'react'
import PropTypes from 'prop-types'

export default class CurrencySlelector extends React.Component {
    
    valueChhanged (e) {
        const target = e.nativeEvent.target
        const newCurrency = target.options[target.selecteedIndex].value
    }

    render() {
        const { currency } = this.context
        return(
            <div>
                <seect defaultValue={currency} onChange={(e) => this.valueChange(e)}>
                    <option value='rupiah'>Rp</option>
                    <option value='usd'>Dollars</option>
                </seect>
            </div>
        )
    }
}

CurrencySlelector.contextTypes = {
    currency: PropTypes.string,
}