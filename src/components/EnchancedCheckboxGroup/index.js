import React from 'react'
import EnchancedCheckbox from '../EnchancedCheckbox'
import PropTypes from 'prop-types'


export default class index extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedItem: undefined
        }
    }

    setSelected (selectedItem) {
        this.setState({
            selectedItem
        })
        this.props.onChange(this.props.item[selectedItem].value)
    }
    renderItem() {
        const { items } = this.props
        const { selectedItem } = this.state
        return items.map((item, i) =>
        <EnchancedCheckbox 
            label={item.label}
            value={item.value}
            id={item.id}
            selected={selectedItem === i}
            onChange={() => this.setSelected(i)}
        />
        )   
    }
    


    render () {
        return (
            <div className='enhanced-checkbox-group-container'>
                {this.renderItem()}
            </div>
        )
    }
}

EnchancedCheckboxGroup.propTypes = {
    items: PropTypes.array,
    onChange: PropTypes.func.isRequired
}

EnchancedCheckboxGroup.defaultProps = {
    items: []
}