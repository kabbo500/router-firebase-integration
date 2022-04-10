import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please register now</h3>
            <form >
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;