import React from 'react';

const Loading = () =>{
    return(
        <div className={'loading'}>
            <h1>Загрузка, пожалуйста подождите</h1>
            <img src={'https://i.stack.imgur.com/ATB3o.gif'} alt={'loading'}/>
        </div>
    )
}

export default Loading;