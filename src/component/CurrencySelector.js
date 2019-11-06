import React from'react'
import PropTypes from 'prop-types'

export default class CurrencySelector extends React.Component {
    
    valueChhanged (e) {
        const target = e.nativeEvent.target
        this.props.currencyChanged(target[target.selectedIndex].value)
    }

    render() {
        const { currency } = this.props
        return(
            <div>
                <select defaultValue={currency} onChange={(e) => this.valueChange(e)}>
                    <option value='rupiah'>Rp</option>
                    <option value='usd'>Dollars</option>
                </select>
            </div>
        )
    }
}

CurrencySelector.PropTypes = {
    currency: PropTypes.string,
    currencyChanged: PropTypes.func,
}