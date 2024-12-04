import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Nav from "../components/Nav.jsx";

function Home(){

    const introRef = useRef(null);

    useEffect(() => {
        // Fade-in animation from bottom to top
        gsap.fromTo(
            introRef.current,
            { opacity: 0, y: 50 }, // Start state
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } // End state
        );
    }, []);

    return(
        <div className="container">
            <Nav />
            <div ref={introRef} className="intro-home">
                <div className="title-intro-home">
                    <p>Discover my projects, designed to inspire.</p>
                </div>
                <div className="description-intro-home">
                    <p>I’m a multimedia and creative technology student specializing in web development. Proficient in HTML, CSS, JavaScript, and React, I focus on crafting responsive, user-friendly websites. With a strong background in graphic design, I bring ideas to life using Adobe Illustrator, creating UI elements, branding materials, and more. Passionate about blending design and development, I strive to deliver engaging and impactful digital experiences.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;