import './index.css'

const OneboxListDetails = () => {
    return(
        <div className='list-details-main-container'>
            <h3 className='details-button-card'>Lead Details</h3>
            <ul className='list-details-first-card'>
                <li className='list-details-first-li-item'>
                    <h3 className='name-card'>Name</h3>
                    <p className="name-value-card">Orlando</p>
                </li>
                <li className='list-details-first-li-item'>
                    <h3 className='name-card'>Contact No</h3>
                    <p className="name-value-card">+91 00000000000</p>
                </li>
                <li className='list-details-first-li-item'>
                    <h3 className='name-card'>Email ID</h3>
                    <p className="name-value-card">orlando@gmail.com</p>
                </li>
                <li className='list-details-first-li-item'>
                    <h3 className='name-card'>Linked In</h3>
                    <p className="name-value-card">linkedin.com/in/timvadde/</p>
                </li>
                <li className='list-details-first-li-item'>
                    <h3 className='name-card'>Comapny Name</h3>
                    <p className="name-value-card">Reachinbox</p>
                </li>
            </ul>
            <br/>
            <h3 className='details-button-card'>Activities</h3>
            <div className='datails-second-card'>
                <h3 className='list-replies' style={{margin: '10px 0px 10px 0pxmn'}}>Company Name</h3>
                <p className='name-card'>3 Steps | 5 days in sequence</p>
            </div>
        </div>
    )
}
export default OneboxListDetails