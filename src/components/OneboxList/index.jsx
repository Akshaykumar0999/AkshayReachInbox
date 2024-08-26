import './index.css'
import {FaChevronDown, FaTelegramPlane} from 'react-icons/fa'
import { IoMdRefresh } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const OneboxList = () => {
    return(
        <div className='list-main-container'>
            <div className='list-left-card-container'>
                <div className='list-left-first-card'>
                    <div className='list-left-first-button'>All Inbox(s) <FaChevronDown size={10} /></div>
                    <p className='list-left-des'><span className='list-left-span'>25/25</span> Inboxes selected</p>
                </div>
                <div className='list-left-second-button-item'>
                    <IoMdRefresh />
                </div>
            </div>
            <div className='list-search-container'>
                <CiSearch style={{marginRight: '5px',marginleft: '5px', color: '#6f7070'}} />
                <input type='search' className='list-search-card' placeholder='search' />
            </div>
            <div className='list-replies-container'>
                <h3 className='list-repliesheading'><span className='replies-card'>26</span> New Replies</h3>
                <h3 className='list-replies'>New Set  <FaChevronDown size={10} /></h3>
            </div>
            <ul className='list-items-container-card'>
                <li className='list-item-card'>
                    <GoDotFill style={{color: '#4285F4', margin: '5px'}} />
                    <div className='list-item-first-card'>
                        <div className='list-item-first-content'>
                            <div className='list-item-first-titles'>
                                <h3 className='list-repliesheading'>Beata@gmail.com</h3>
                                <p className='list-left-des'>Mar 7</p>
                            </div>
                            <p className='list-item-content-message'>I've tried a lot and .</p>
                        </div>
                        <div className='list-item-meassges'>
                            <p className='replies-first-card'><GoDotFill size={10} />Interested</p>
                            <p className='replies-second-card'><FaTelegramPlane size={10} style={{marginRight: '5px'}} />Campaign Name</p>
                        </div>
                    </div>
                </li>
                <li className='list-item-card'>
                    <GoDotFill style={{color: '#4285F4', margin: '5px'}} />
                    <div className='list-item-first-card'>
                        <div className='list-item-first-content'>
                            <div className='list-item-first-titles'>
                                <h3 className='list-repliesheading'>Beata@gmail.com</h3>
                                <p className='list-left-des'>Mar 7</p>
                            </div>
                            <p className='list-item-content-message'>I've tried a lot and .</p>
                        </div>
                        <div className='list-item-meassges'>
                            <p className='replies-first-card'><GoDotFill size={10} /> Interested</p>
                            <p className='replies-second-card'><FaTelegramPlane size={10} style={{marginRight: '5px'}} />Campaign Name</p>
                        </div>
                    </div>
                </li>
                <li className='list-item-card'>
                    <GoDotFill style={{color: '#4285F4', margin: '5px'}} />
                    <div className='list-item-first-card'>
                        <div className='list-item-first-content'>
                            <div className='list-item-first-titles'>
                                <h3 className='list-repliesheading'>Beata@gmail.com</h3>
                                <p className='list-left-des'>Mar 7</p>
                            </div>
                            <p className='list-item-content-message'>I've tried a lot and .</p>
                        </div>
                        <div className='list-item-meassges'>
                            <p className='replies-first-card'><GoDotFill size={10}  /> Interested</p>
                            <p className='replies-second-card'><FaTelegramPlane size={10} style={{marginRight: '5px'}} />Campaign Name</p>
                        </div>
                    </div>
                </li>
                <li className='list-item-card'>
                    <GoDotFill style={{color: '#4285F4', margin: '5px'}} />
                    <div className='list-item-first-card'>
                        <div className='list-item-first-content'>
                            <div className='list-item-first-titles'>
                                <h3 className='list-repliesheading'>Beata@gmail.com</h3>
                                <p className='list-left-des'>Mar 7</p>
                            </div>
                            <p className='list-item-content-message'>I've tried a lot and .</p>
                        </div>
                        <div className='list-item-meassges'>
                            <p className='replies-first-card'><GoDotFill size={10} /> Interested</p>
                            <p className='replies-second-card'><FaTelegramPlane size={10} style={{marginRight: '5px'}} />Campaign Name</p>
                        </div>
                    </div>
                </li>
                <li className='list-item-card'>
                    <GoDotFill style={{color: '#4285F4', margin: '5px'}} />
                    <div className='list-item-first-card'>
                        <div className='list-item-first-content'>
                            <div className='list-item-first-titles'>
                                <h3 className='list-repliesheading'>Beata@gmail.com</h3>
                                <p className='list-left-des'>Mar 7</p>
                            </div>
                            <p className='list-item-content-message'>I've tried a lot and .</p>
                        </div>
                        <div className='list-item-meassges'>
                            <p className='replies-first-card'><GoDotFill size={10} /> Interested</p>
                            <p className='replies-second-card'><FaTelegramPlane size={10} style={{marginRight: '5px'}} />Campaign Name</p>
                        </div>
                    </div>
                </li>
                <li className='list-item-card'>
                    <GoDotFill style={{color: '#4285F4', margin: '5px'}} />
                    <div className='list-item-first-card'>
                        <div className='list-item-first-content'>
                            <div className='list-item-first-titles'>
                                <h3 className='list-repliesheading'>Beata@gmail.com</h3>
                                <p className='list-left-des'>Mar 7</p>
                            </div>
                            <p className='list-item-content-message'>I've tried a lot and .</p>
                        </div>
                        <div className='list-item-meassges'>
                            <p className='replies-first-card'><GoDotFill size={10} /> Interested</p>
                            <p className='replies-second-card'><FaTelegramPlane size={10} style={{marginRight: '5px'}} />Campaign Name</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default OneboxList