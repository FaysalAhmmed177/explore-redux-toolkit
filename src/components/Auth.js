import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, LogoutAction } from '../redux/actions';

const Auth = () => {
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Please Login.</h3>
            <input
                name="phone"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={() => dispatch(LoginAction(phone))}>Login</button>
        </div>
    );
};

export default Auth;