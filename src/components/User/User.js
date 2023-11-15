import React, { useState } from 'react';
import '../user.css'
const User = (props) => {
    console.log(props)
    const {name,email, picture, website,phone} = props.user;
    const addMember = props.addMember;
    const fullName = name.first+ ' ' +name.last;
    const [mobile, setMobile]=useState(' ');
    const showPhone = () => setMobile(phone);
    return (
        <div className='body'>
            <div className="pic">
                <img src={picture.large} alt="" />
            </div>
            <div className="name">
                <h3>Name:{fullName}</h3>
                <p>Emali:{email}</p>
                <p><a target='blank' href={website}>Learn about me</a></p>
                <p>Phone:{mobile}</p>
                <button onClick={showPhone}>Show phone number</button>
                <button onClick={() => addMember(fullName)}>Add me</button>
            </div>
        </div>
    );
};

export default User;