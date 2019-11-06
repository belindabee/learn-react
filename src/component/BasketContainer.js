import { connect } from 'react-redux'
import { Basket } from './Basket'

function mapStateProps (state) {
    return{
        currency:state.currency,
    }
}

export default connect(mapStateProps)(Basket)