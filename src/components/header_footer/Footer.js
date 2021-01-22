import { Facebook } from '@material-ui/icons';
import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return(
        <footer className="bck_reds">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Outdoor Movie Night</div>
                <div className="footer_copyright">
                    The Best and Relaxing Movie Experience Ever. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
