import React, {useState} from 'react';
import {signup} from '../actions/authActions';
import { connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


function Signup(props) {
    const[credentials, Setcredentials] = useState({email:"", password:""})

    function handleOnChange (event){
        Setcredentials ({...credentials, [event.target.name] :  event.target.value})
    }

    function handleSubmit () {
        props.signup(credentials.email, credentials.password);
    }

    if (props.auth.isLoaded === false) {
        return <h1>Loading...</h1>;
    }

    if (props.auth.isEmpty === false) {
        return <Redirect path ='/' />
    }
    return (
        <div>
            <form>
                <label>Email</label>
                <input type='text' name='email' value={credentials.email} onChange={handleOnChange}/>
                <label>Password</label>
                <input type='password' name='password' value={credentials.password} onChange={handleOnChange}/>
                <button type='button' onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        auth: state.firebaseState.auth,
    };
};

const mapDispatchToProps = { signup }
export default connect (mapStateToProps, mapDispatchToProps)(Signup);