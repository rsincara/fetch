import React, {useState, useEffect} from 'react';
import User from "./User";
import Loading from "./Loading";

const Main = () => {
    const [user, setUser] = useState( null );

    useEffect(  ()=>{
        async function getUser() {
            if(user === null){
                let info = await fetch('https://randomuser.me/api');
                let userInfo = info.json();
                userInfo.then(data => setUser(data.results[0]));
            }
        }
        getUser();
        //setTimeout(getUser, 5000);
        console.log(user);
    })
    return (
        <div className={'main'}>
            <h1 className={'social'}>Выбери своего раба:</h1>
            {user === null ? <Loading /> : <User user={user} />}
        </div>
    )
}

export default Main;