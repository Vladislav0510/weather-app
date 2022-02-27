import React from 'react';
import './Content.scss'

const Content = (props) => {
    const temperature = props.temp ? props.temp - 273.15 : null
    debugger
    return (
        <div>
                <main className='main'>
                    <div className="main__container _container">
                        <div className="main__body">
                            <div className="main__info">
                                <div className="main__city">
                                    {props.city ? props.city : null}
                                </div>
                                <div className="main__temp">
                                    {props.temp ?
                                        <span className="main__temp">{Math.round(temperature)} °C</span> : null}
                                </div>
                            </div>
                            <div className="main__clouds">
                                {props.clouds ? props.clouds : null}
                            </div>
                        </div>
                    </div>
                </main>
        </div>


    );
};

export default Content;