import { connect } from 'react-redux'
import { ProductListing } from './ProductListing'

function mapStateProps (state) {
    return{
        currency:state.currency,
    }
}

export default connect(mapStateProps)(ProductListing)