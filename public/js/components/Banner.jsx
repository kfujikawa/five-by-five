import React from 'react';

class Banner extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <section id="banner">
                <div className="inner">
                    <h1>Five By Five: Goal setting through positive thought</h1>
                </div>
            </section>
        )
    }
}

export default Banner;