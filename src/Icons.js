import React from 'react';
import LargeIconRow from './LargeIconRow.js';
// import MediumIconRow from './MediumIconRow.js';
// import SmallIconRow from './SmallIconRow.js';
import Media from 'react-media';


class Icons extends React.Component {

  render() {
    return <div>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {matches.large && <LargeIconRow className="icons"/>}
            {/* {matches.medium && <MediumIconRow className="icons" />}
            {matches.small && <SmallIconRow className="icons" />} */}
          </div>
        )}
      </Media>
    </div>
  }
}

export default Icons;
