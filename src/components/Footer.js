import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; 2019  Team McAfee. Built from the ground up with ReactJS, VanillaJS, HTML5, Sassy CSS, GraphQL, and Gatsby.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
