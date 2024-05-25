import {Link} from 'react-router-dom'

function Navbar1(){
    return(<>
    <div className='navbar-wrapper'>
        <ul>
            <li><Link to='/LogIn'>LogIn</Link></li>
            <li><Link to='/SignUp'>SignUp</Link></li>
        </ul>
    </div>
    </>)
}

export default Navbar1