import React from 'react';
import largeLotus from './large/background.png'
import medLotus from './medium/background_text.png'
import smallLotus from './small/background_text.png'
import Media from 'react-media';

class Lotus extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.large && <img className="lotus" src={largeLotus} alt="Lotus Room"></img>}
            {matches.medium && <img className="lotus" src={medLotus} alt="Lotus Room"></img>}
            {matches.small && <img className="lotus" src={smallLotus} alt="Lotus Room"></img>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default Lotus;
