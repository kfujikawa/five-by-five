import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="copyright">
                &copy; 2017 Kinuyo Fujikawa: <a href= "mailto:info@kinuyo.me">Contact</a>
            </div>
        )
    }
}

export default Footer;