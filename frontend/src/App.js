import ChatRoom from "./ChatRoomPage";
import Calender from "./Calender";
import CodeEditor from "./CodeEditorPage";
import ForgotPassword from "./ForgotPasswordPage";
import LandingPage from "./LandingPage";
import LogIn from "./LogInPage";
import SignUp from "./SignUpPage";
import DashBoard from "./DashBoard";
import Logout from "./logout";
import Profile from "./profile";
import Fetch from "./fetch";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Question from "./Question";
import Comments from "./Comments";
import ResetPassword from "./ResetPassword"
import AccVerify from "./AccVerify";
import AccEdit from "./AccEditPage";
function App() {
  return(<>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/LogIn" element={<LogIn/>}/>
        <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route exact path="/ForgotPassword/ResetPassword" element={<ResetPassword/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path="/LogIn/:id/ChatRoom" element={<ChatRoom/>}/>
        <Route exact path='/CodeEditor' element={<CodeEditor/>}/>
        <Route exact path="/LogIn/:id/Calender" element={<Calender/>}/>
        <Route exact path="/LogIn/:id" element={<DashBoard/>}/>
        <Route exact path="/LogIn/:id/:qid" element={<Question/>}/>
        <Route exact path="/LogIn/:id/:qid/Comments" element={<Comments/>}/>
        <Route exact path="/LogIn/:id/PublishQuestion" element={<Fetch/>}/>
        <Route exact path="/LogIn/:id/Calender" element={<DashBoard/>}/>
        <Route exact path="/LogIn/:id/LogOut" element={<Logout/>}/>
        <Route exact path="/LogIn/:id/Profile" element={<Profile/>}/>
        <Route exact path="/LogIn/:id/Profile/AccEdit" element={<AccEdit/>}/>
        <Route exact path="/LogIn/:id/Profile/AccVerify" element={<AccVerify/>}/>
    </Routes>
    </BrowserRouter>
  </>)
}

export default App;