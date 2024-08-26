import './index.css'
import {FaChevronDown} from 'react-icons/fa'

const OneboxHeader = () => {
    return (
        <header className="onbox-header-card">
            <div className="header-left-card">
                <h1 className="onebox-header-title">Onebox</h1>
            </div>
            <div className="header-right-card">
                <div className="header-toggle-card">
                    <span className="header-toggle-icon"></span>
                </div>
                <h2 className="header-workspace">Tim's Workspace <FaChevronDown size={10} /> </h2>
            </div>
        </header>
    )
}

export default OneboxHeader