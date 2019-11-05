import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import MainContent from './MainContent'
import Proptypes from 'prop-types'

 class Page extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            currency: 'rupiah'
        }
    }

    getChildContext () {
        return {
            currency: this.state.currency
        }
    }

    render() {
        return (
            <div clasName='page'>
                <Header />
                <div className='layout'>
                    <SideBar />
                    <MainContent />
                </div>
            </div>
        )
    }
}

export default Page

Page.ChildContexType = {
    currency: Proptypes.string,
}
