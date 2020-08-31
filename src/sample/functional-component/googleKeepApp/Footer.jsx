import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
    const copyYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <footer className="text-center">
                <p><CopyrightIcon /> {copyYear}</p>
            </footer>
        </React.Fragment>
    )
}

export default Footer;