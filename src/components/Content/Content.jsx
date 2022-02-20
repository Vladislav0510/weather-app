import React from 'react';
import './Content.scss'

const Content = (props) => {
    debugger
    return (
        <main className='main'>
            <div className="main__container _container">

                {props.city ? props.city : null}
            </div>

        </main>
    );
};

export default Content;