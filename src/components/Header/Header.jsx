import React from 'react';
import DataForm from "./DataForm/DataForm";
import './Header.scss'

const Header = (props) => {

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

        </header>
    );
};

export default Header;