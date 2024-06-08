import Calender from "./Calender";
import ChatRoom from "./ChatRoomPage";
import CodeEditor from "./CodeEditorPage";
import ForgotPassword from "./ForgotPasswordPage";
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
        <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path="/ChatRoom" element={<ChatRoom/>}/>
        <Route exact path="/CodeEditor" element={<CodeEditor/>}/>
        <Route exact path="/Calender" element={<Calender/>}/>
    </Routes>
    </BrowserRouter>
  </>)
}

export default App;
