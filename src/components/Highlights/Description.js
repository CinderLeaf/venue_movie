import React from 'react';
import Fade from 'react-reveal/Fade';

const Description=()=>{
    return(
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                <iframe id="video" 
                src="https://www.youtube.com/embed/AxLH0lXEGAY"
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen>

                </iframe>
                {/* <iframe id="video" 
    src="https://www.youtube.com/embed/neut5O8SAq4" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen id="video">
    </iframe> */}
                </div>
            </div>
        </Fade>
    );
};
export default Description;