import React from 'react'
import EnchancedCheckbox from '../EnchancedCheckbox'


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
            <div class='enchanched-checkbox-group-container'>
                {this.renderItem()}
            </div>
        )
    }
}