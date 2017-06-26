import React from 'react';

import PropTypes from 'prop-types';

export default function Header(props){
    return(
        <p>{props.title || "default"}</p>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'Default title'
}