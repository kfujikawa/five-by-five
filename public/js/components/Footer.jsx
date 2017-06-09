import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div class="copyright">
                &copy; 2017 Kinuyo Fujikawa: <a href= "mailto:kinuyofujikawa@gmail.com">Contact Me</a>
            </div>
        )
    }
}

export default Footer;