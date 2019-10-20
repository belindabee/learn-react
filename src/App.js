import React from 'react'
import EnchacedCheckboxGroup from './components/EnchancedCheckboxGroup'


export default class App extends React.Component {
constructor(props) {
    super(props)
    this.state ={
      main: undefined,
      side1: undefined,
      side2: undefined,
      showSelection: false
    }
  }

  itemSelected (item) {
    this.setState((currentState) => {
      const newState = {
        ...currentState,
        ...item
      }
      const { main, side1, side2 } = newState
      if (main && side1 && side2) {
        return {
          ...newState,
          showSelection: true,
        }
      }
      return newState
    })
  }

  render () {
    const mains = [
      { id: 'chicken', value: 'chicken', label: 'Grilled Chicken' },
      { id: 'cod', value: 'code', label: 'Steamed Cod' },
      { id: 'beff', value: 'beef', label: 'Roast Beef' }
    ]
    const side1s = [
      { id: 'potatoes', value: 'carrots', label: 'Carrot' },
      { id: 'rice', value: 'rice', label: 'Steamed Rice'}
    ]
    const side2s = [
      { id: 'carrots', value: 'carrots', label: 'Carrot' },
      { id: 'broccoli', value: 'broccoli', label: 'Broccoli' }
    ]
    const {
      showSelection,
      main,
      side1,
      side2,
    } = this.state
    return (
      <div className='App'>
        <h2>Monday</h2>
        { showSelection && <p>{`${main} with ${side1} and ${side2}`}</p> }
        <div className='container'>
          <div>
            <h3>Main</h3>
            <EnchacedCheckboxGroup item={main} />
          </div>
          <div>
            <h3>Side 1</h3>
            <EnchacedCheckboxGroup item={side1s} />
          </div>
          <div>
            <h3>side 2</h3>
            <EnchacedCheckboxGroup item={side2s} />
          </div>
        </div>
      </div>
    )
    
  }
}