import React from 'react';
import './Footer.scss'

const Footer = (props) => {

    const feelsLike = `${Math.round(props.feelsLike - 273.15)} °C`
    const windSpeed = `${Math.round(props.windSpeed * 1.609)} KMH`
    const humidity = `${props.humidity} %`

    return (
        <div>
            {props.feelsLike ? <footer className='footer'>
            <div className="footer__container _container">
                <div className="footer__body">
                    <div className="footer__column">
                        {props.feelsLike ?
                            <div className='footer__item'>
                                <div>{feelsLike}</div>
                                <div className="feels__like">Feels Like</div>
                            </div>
                            : null}
                    </div>
                    <div className="footer__column">
                        {props.windSpeed ?
                            <div className='footer__item'>
                                <div>{windSpeed}</div>
                                <div className="wind__speed">Wind Speed</div>
                            </div>
                            : null}
                    </div>
                    <div className="footer__column">
                        {props.feelsLike ?
                            <div className='footer__item'>
                                <div>{humidity}</div>
                                <div className="humidity">Humidity</div>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        </footer>: <div>

            </div>}
        </div>


    );
};

export default Footer;