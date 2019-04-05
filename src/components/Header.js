import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.svg'

const logostyle = {marginTop: '10px',
};

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="logo"><img src={logo} alt="" style={logostyle} /> </span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>McAfee Incubator</h1>
              <p>Manifesting today's vision into tomorrow's reality.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
