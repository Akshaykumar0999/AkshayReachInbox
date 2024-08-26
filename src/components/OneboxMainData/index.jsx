import './index.css'
import { GoDotFill } from "react-icons/go";
import {FaChevronDown, FaArrowsAltV} from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";
const OneboxMainData = () => {
    return (
        <div className='maindata-container-card'>
            <div className='maindata-header-card'>
                <div className='maindata-left-card'>
                    <h3 className='list-repliesheading'>Orlando</h3>
                    <p className='maindata-left-des'>orladom@gmail.com</p>
                </div>
                <div className='maindata-right-card'>
                    <div className='maindata-right-bar'>
                        <GoDotFill style={{margin: '5px'}} />
                        <h3>Meeting Completed</h3>
                        <FaChevronDown style={{margin: '5px'}}  />
                    </div>
                    <div className='maindata-right-bar'>
                        <h3>Move</h3>
                        <FaChevronDown style={{margin: '5px'}} />
                    </div>
                    <div className='maindata-right-three-dots'>
                        <BsThreeDots />
                    </div>
                </div>
            </div>
            <div className='maindata-content-data-container'>
                <h3 className='maindata-daily-card'>Today</h3>
                <div className='maindata-data-container'>
                    <div className='maindata-data-Item-titles'>
                        <div className='main-data-title-card'>
                            <h3 className='list-repliesheading'>New Product Launch</h3>
                            <p className='list-left-des'>20 june 2022 : 9:16AM</p>
                        </div>
                        <p className='list-left-des' style={{marginBottom: '5px'}}>from : jeanne@icloud.com cc : lennon.j@mail.com</p>
                        <p className='list-left-des'>to : lennon.j@mail.com</p>
                    </div>
                    <div className='maindata-des-content-card'>
                        <h3 className='maindata-des-item'>Hi firstname,</h3>
                        <p className='maindata-des-item'>I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.</p>
                    </div>
                </div>
                <h3 className='maindata-daily-card'><FaArrowsAltV color='#737373' /> View all <span style={{color: "#4285F4"}}>4</span> replies</h3>
            </div>
        </div>
    )
}

export default OneboxMainData