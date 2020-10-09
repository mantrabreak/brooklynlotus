import React from 'react';
import largeLogo from './large/logo-large.png'
import medLogo from './medium/logo-medium.png'
import smallLogo from './small/logo-small.png'
import Media from 'react-media';

class Logo extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.large && <img className="logo" src={largeLogo} alt="Lotus Room"></img>}
            {matches.medium && <img className="logo" src={medLogo} alt="Lotus Room"></img>}
            {matches.small && <img className="logo" src={smallLogo} alt="Lotus Room"></img>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default Logo;
