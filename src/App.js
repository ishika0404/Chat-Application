import {ChatEngine} from "react-chat-engine";
import LoginForm from "./components/LoginForm"
import ChatFeed from "./components/ChatFeed"
import "./App.css";

const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="3b241e46-cad8-4de6-b838-a97147d55788"
            userName= {localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );

}

export default App;