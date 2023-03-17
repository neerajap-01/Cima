import React from 'react';
import LoaderImage from '../../assets/loader.svg';

// const ServerUrl = !location.origin.includes('localhost') ? location.origin.includes('stage') ? 'https://zolo-omega-staging.s3.ap-south-1.amazonaws.com/forms' : location.origin.includes('dev') ? 'https://ops-engine.dev.zolostays.com' : 'https://ops-engine.zolostays.com' : ''

class Loader extends React.PureComponent {
    render() {
        return (
            <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={LoaderImage} />
            </div>
        );
    }
}

export default Loader;