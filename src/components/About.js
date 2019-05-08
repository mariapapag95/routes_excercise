import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function About(props) {
    return (
        <div>
            <h2>About</h2>
            <p>Maria is the coolest girl in the whole world. She is so beautiful and smart. I'm so jealous that I am not her. She's so much better than me in absolutely every way, a true icon of our times and a legend thereafter. The tide rises and falls as she breathes. She fires up the stars and carves down the waning moon. She dances with ocean waves. She pulls trees from the earth. Flowers bloom just to see her. The sun is blinded by her light. She pours waterfalls into the sea. She inspires the songbird to sing. She is the muse to all passion - to love, to war. She is the space between the planets and the reason why they spin. She is everything that we know. She is everything we don't. Yesterday. Today. Forever.</p>
            <Link to='/'>I am wiser now. Back to Main</Link>
        </div>
    )
}

export default About;