import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Fetch = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = (event) => {
        setSelectedPlatform(event.target.value);
    };
    return (<>
        <div className='body-wrapper'>

            <Navbar2 />

            <div style={{ width: '95vw' }}>
                <p class="heading" style={{ marginBottom: '2vh',fontSize:'4vh' }}>Question Headline</p>
                <form className="flex2" style={{ alignItems: 'flex-start', rowGap: '2vh' }}>
                    <div className="flex">
                        <p style={{ fontSize: '2.7vh' }}>Visibility:</p>
                        <div className="flex">
                            <input
                                type="radio"
                                name="platform"
                                value="Private"
                                checked={selectedPlatform === 'Private'}
                                onChange={handleChange}
                                style={{ height: '3vh', width: '2vw' }}
                            />
                            <label htmlFor="Private">Private</label>
                        </div>
                        <div className="flex">
                            <input
                                type="radio"
                                name="platform"
                                value="Public"
                                checked={selectedPlatform === 'Public'}
                                onChange={handleChange}
                                style={{ height: '3vh', width: '2vw' }}
                            />
                            <label htmlFor="Public">Public</label>
                        </div>
                    </div>
                    <div className="search-results">
                        <p>Question Statement</p>
                    </div>
                    <div className="search-results">
                        <p>Code Solution</p>
                    </div>
                    <input className='login-submit' style={{ width: '15vw' }} type='submit' value="Publish Question" />
                </form>
            </div>
        </div>
    </>
    );
}
export default Fetch;