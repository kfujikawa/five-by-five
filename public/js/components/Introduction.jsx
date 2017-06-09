import React from 'react';

class Introduction extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <section id="one">
                <div className="inner">
                    <header>
                        <h2>Introduction</h2>
                    </header>
                    <p>Radio operators give a subjective scale from one to five for the strength of a signal and its clarity. "I read you
                    five by five" means the speaker is hearing a voice at full strength and clarity. This site will help you clearly
                    define and accomplish goals in all aspects of your life.</p>
                </div>
            </section>
        )
    }
}

export default Introduction;