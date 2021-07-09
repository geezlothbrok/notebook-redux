import React, {useState} from 'react';
import { login } from '../actions/authActions';
import { connect } from 'react-redux';

function Login(props) {
const[credentials, Setcredentials] = useState({email:"", password:""})

function handleOnChange (event){
    Setcredentials ({...credentials, [event.target.name] :  event.target.value})
}

function handleSubmit () {
    props.login(credentials.email, credentials.password);
}
    return (
        <div>
            <form>
                <label>Email</label>
                <input type='text' name='email' value={credentials.email} onChange={handleOnChange}/>
                <label>Password</label>
                <input type='password' name='password' value={credentials.password} onChange={handleOnChange}/>
                <button type='button' onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = { login };
export default connect(null, mapDispatchToProps)(Login);