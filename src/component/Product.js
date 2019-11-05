import React from 'react' 
import { getCurrencySymbol, convertCurrency } from '../currency'

class Product extends React.Component {
    render () {
        const { title,price } = this.this.props
        const { currency } = this.context
        return (
            <div>
                <h3>{title}</h3>
                <img src='/placeholder.jpg' alt='img' />
                <div>
                    <div>{getCurrencySymbol(currency)}{convertCurrency(price, currency)}</div>
                    <button>Add to cart</button>
                </div>
            </div>
                
        )
    }
}
export default Product

