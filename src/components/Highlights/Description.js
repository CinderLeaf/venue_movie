import React from 'react';
import Fade from 'react-reveal/Fade';

const Description=()=>{
    return(
        <Fade delay={100}>
            <div className="center_wrapper">
                <h2 className="highlight_title">Movies on Screen</h2>
                <div className="highlight_description">
                    <div>
                        <ol className="movie_list">
                            <li>Avatar 2
                                <div className="video1_wrapper">
                                    <iframe id="video1" 
                                    src="https://www.youtube.com/embed/AxLH0lXEGAY"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                    </iframe>
                                    <p id="video1_text">Avatar 2 is an upcoming American science fiction film directed by James Cameron and produced by 20th Century Studios. It is the second film in the Avatar franchise, following Avatar.</p>
                                </div>
                            </li>
                            <li>Star Wars: The Rise of Skywalker
                                <div className="video2_wrapper">
                                    <p id="video2_text">The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.</p>
                                    <iframe id="video2" 
                                    src="https://www.youtube.com/embed/8Qn_spdM5Zg"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                    </iframe>
                                </div>
                            </li>
                            <li>Legend
                                <div className="video3_wrapper">
                                    <iframe id="video3" 
                                    src="https://www.youtube.com/embed/WVHlrfzLjd4"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                    </iframe>
                                    <p id="video3_text">As a gangster biopic, Legend is deeply flawed, but as a showcase for Tom Hardy -- in a dual role, no less -- it just about lives up to its title.</p>
                                </div>
                            </li>
                            <li>The Conjuring 3
                                <div className="video4_wrapper">
                                    <iframe id="video4" 
                                    src="https://www.youtube.com/embed/xpaAdZA5sEs"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                    </iframe>
                                    <p id="video4_text">Paranormal investigators Ed and Lorraine Warren try to uncover the truth behind a murderer's claim of demonic possession.</p>
                                </div>
                            </li>
                            <li>The Dark Knight
                                <div className="video6_wrapper">
                                    <iframe id="video6" 
                                    src="https://www.youtube.com/embed/EXeTwQWrcwY"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                    </iframe>
                                    <p id="video6_text">When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    
                </div>
            </div>
        </Fade>
    );
};
export default Description;

//https://www.youtube.com/embed/EXeTwQWrcwY