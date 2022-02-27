import React from 'react';
import DataForm from "./DataForm/DataForm";
import './Header.scss'

const Header = (props) => {
    debugger
    const onSubmit = (value) => {
        props.getDataThunk(value)
    }
    return (
        <header className='header'>
            <div className="header__container _container">
                <div className="header__form">
                    <DataForm onSubmit={onSubmit}/>

                </div>

            </div>
            {props.error
                ? <div className="header__error">
                    {props.error ? 'Please check the correct spelling' : null}
                </div>
                : null}


        </header>
    );
};

export default Header;