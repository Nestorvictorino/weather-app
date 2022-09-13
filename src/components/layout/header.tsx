import React from 'react'

const Header = () => {
    return (
        <div className="site-header">
            <div className="container">
                <a className="branding">
                    <img src="images/logo.png" alt="" className="logo" />
                    <div className="logo-type">
                        <h1 className="site-title">WeatherNess</h1>
                        <small className="site-description">Be aware from weather</small>
                    </div>
                </a>

                <div className="main-navigation">
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Header