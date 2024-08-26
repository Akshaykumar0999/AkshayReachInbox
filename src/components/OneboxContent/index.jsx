import React from 'react'
import './index.css'
import OneboxHeader from '../OneboxHeader'
import OneboxNav from '../OneboxNav'
import OneboxList from '../OneboxList'
import OneboxMainData from '../OneboxMainData'
import OneboxListDetails from '../OneboxListDetails'

const OneboxContent = () => {
    return(
        <div className='onebox-main-container'>
            <OneboxNav />
            <div className='onebox-main-content-container'>
                <OneboxHeader />
                <div className='one-box-content-container'>
                    <OneboxList />
                    <OneboxMainData />
                    <OneboxListDetails />
                </div>
            </div>
        </div>
    )
}

export default OneboxContent