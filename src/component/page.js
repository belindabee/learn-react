import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import MainContent from './MainContent'

 class Page extends React.Component { 
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


