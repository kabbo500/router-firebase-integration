import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Please login in</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <br />
            <form >
                <input type="email" placeholder='your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;