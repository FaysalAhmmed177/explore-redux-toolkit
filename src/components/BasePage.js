import React, { useEffect } from 'react';
import { getDataAction, LogoutAction } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const BasePage = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    console.log(auth);

    useEffect(() => {
        dispatch(getDataAction());
    }, [])

    return (
        <div>
            <h3>Welcome</h3>
            <p>{auth.phone}</p>
            <p>Title: {auth.data.title}</p>
            <p>id: {auth.data.id}</p>
            <button onClick={() => dispatch(LogoutAction())} >Log out</button>
        </div>
    );
};

export default BasePage;