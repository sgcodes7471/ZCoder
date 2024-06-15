import Navbar1 from "./Navbar1";

function LandingPage() {
    return(<>
    <div className="landingPage-wrapper">
        <Navbar1/>
        <div className='landingpage-img-wrapper'>
            <p id="landingpage-heading"><b>Welcome to ZCoder</b></p>
            <p id="landingpage-sub-heading">Your OneStop Solution for Coding Practice</p>
        </div>
       
    </div>
    </>)
}

export default LandingPage;
