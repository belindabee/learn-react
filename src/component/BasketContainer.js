import { connect } from 'react-redux'
import { Ba sket } from './Basket'

function mapStateProps (state) {
    return{
        currency:state.currency,
    }
}

export default connect(mapStateProps)(Basket)