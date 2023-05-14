import React from 'react'
import "./styles/home.css"
import nikeshoes from "./assets/nikeshoes.png"


function Home() {
    return (
        <div class="home-header">
        <section className="home">
            <div className="home-content">
                <div className="home-text">
                    <h1 id="text-black">The</h1>
                    <h1 id="text-red">Best</h1>
                    <h1 id="text-black">Shoes</h1>
                    <h3 id="text-small">You will ever wear.</h3>
                </div>
                <div className="home-button">
                    <button type="button" id="learn-more">Learn More</button>
                    <button type="button" id="explore">Explore</button>
                </div>
                <div className="home-image">
                    <img src={nikeshoes} alt="nikeshoes" />
                </div>
            </div>
        </section>
        </div>
    )
};

export default Home;