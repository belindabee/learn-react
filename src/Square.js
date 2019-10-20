import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';


export default class Square extends React.Component {
    constructor (props) {
        super(props)
        this.squareElem = null
        this.state = {
            x: 0,
            y: 0
        }
    }

    updateCoords (e) {
        const { clientX, clientY} = e
        const { top, left } = this.squareRef.getBoundingClientRect()
        this.setState({
            x: clientX - left,
            y: clientY - top
        })
    }

    reset() {
        this.setState({
            x: 0,
            y: 0
        })
    }

    render () {
        let textInput;
        const size = `${this.props.size}px`
        const style = {
            width: size,
            height: size,
            backgroundColor: this.props.initialColor,
        }
        // const { x, y } = this.state
        return (
            <div className='SquareContainer'>
                <div
                 ref={(e) => this.squareRef = e}
                  style={style} 
                  className='Square' 
                  onMouseMove={(e) => this.updateCoords(e)}
                  onMouseOut={() => this.reset()}
                  >
                    <div>{ `${this.state.x}, ${this.state.y}` }</div>
                </div>
            </div>
        )
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
    size: PropTypes.number.isRequired
}

Square.defaultProps = {
    initialColor: 'blue'
}