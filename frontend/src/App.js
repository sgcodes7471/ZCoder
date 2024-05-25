import LandingPage from "./LandingPage";
import LogIn from "./LogInPage";
import SignUp from "./SignUpPage";
import { BrowserRouter , Routes , Route} from "react-router-dom";
function App() {
  return(<>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/LogIn" element={<LogIn/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  </>)
}

export default App;
