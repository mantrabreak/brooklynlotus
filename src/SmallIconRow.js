import React from 'react';
import smallIG from './shared/instagram.png'
import smallFB from './shared/facebook.png'
import smallMU from './shared/meetup.png'
import smallYT from './shared/youtube.png'
import smallWA from './shared/whatsapp.png'

class SmallIconRow extends React.Component {

  render() {
    return <table className="icontable">
      <tr>
        <td><a href="https://facebook.com"><img className="iconimage" src={smallFB} alt="" ></img></a></td>
        <td><a href="https://instagram.com"><img className="iconimage" src={smallIG} alt="" ></img></a></td>
        <td><a href="https://whatsapp.com"><img className="iconimage" src={smallWA} alt="" ></img></a></td>
        <td><a href="https://youtube.com"><img className="iconimage" src={smallYT} alt="" ></img></a></td>
        <td><a href="https://meetup.com"><img className="iconimage" src={smallMU} alt="" ></img></a></td>
      </tr>
      </table>
  }
}

export default SmallIconRow;
