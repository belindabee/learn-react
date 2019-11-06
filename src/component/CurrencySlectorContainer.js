import { connect } from 'react-redux'
import CurrencySelector from './CurrencySelector'

function mapStateProps (state) {
    return{
        currency:state.currency,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        currencyChanged: (currency) => dispatch(currencyChanged(currency))
    }
}

export default connect(mapStateProps)(CurrencySelector)