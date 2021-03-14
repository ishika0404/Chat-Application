import {useState} from 'react';
import axios from 'axios';


const LoginForm=()=>{
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')


    const handleSubmit= async(e)=>{
        e.preventDefault();

        const authObject ={ 'Project-ID':"3b241e46-cad8-4de6-b838-a97147d55788" , 'User-Name': username, 'User-Secret': password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();

        } catch (error) {
            seterror("Incorrect Username or Password")
            
        }




    }



    return(
        <div className="wrapper">
        <div className="form">
                <h1 className ="title">chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setusername(e.target.value) }  className="input" placeholder="username" required />
                    <input type='password' value={password} onChange={(e) => setpassword(e.target.value) }  className="input" placeholder="password" required />
                    <div align="center" >
                    <button type="submit" className="button">
                        <span>Start Chatting</span>

                    </button>
                    <h2 className ="error" >
                        {error}
                    </h2>

                    </div>

                </form>
        </div>

        </div>
    )




}

export default LoginForm;