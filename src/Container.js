import React from 'react'

export default class Container extends React.Component {
    render() {
        console.log(this.props.children[1].props.childrengit )
        const items = React.Children.map(this.props.children, (child) => <li>{child}</li>)
        return(
            <ul>{items}</ul>
        )
    }
}