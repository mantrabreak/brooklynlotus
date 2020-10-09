import React from 'react';
import IconRow from './IconRow.js';
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
          <div className="icons">
            {matches.large && <IconRow/>}
            {matches.medium && <IconRow/>}
            {matches.small && <IconRow/>}
          </div>
        )}
      </Media>
    </div>
  }
}

export default Icons;
