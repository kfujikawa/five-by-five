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
                    <ul className="actions">
                        <li><a href="/register" className="button alt">Register</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner;