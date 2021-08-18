import React from 'react';

const User = ({user}) =>{
    return(
        <div className={'user'}>
            <img src={user.picture.large} alt={'avatar'} width={'300px'} height={'300px'} />
            <div className="info">
                <h1 className='user-name'>{user.name.title} {user.name.first} {user.name.last}, {user.gender}</h1>
                <h2>Age: {user.dob.age}</h2>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    )
}

export default User;