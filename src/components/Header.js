import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Design & App Development</h1>
                <ReactTypingEffect
                    className="typed-text"
                    text={["Hello World!",
                        "Web Design", "App Development"]}
                    speed={200}
                    eraseSpeed={100}
                    eraseDelay={300}
                    typingDelay={300}
                />
                <a href="#scroll-form" className="btn-main-offer"> Contact Me</a>
            </div>
        </div>
    )
}

export default Header
