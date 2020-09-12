import React from 'react';
import mediumIG from './medium/instagram.png'
import mediumFB from './medium/facebook.png'
import mediumMU from './medium/meetup.png'
import mediumYT from './medium/youtube.png'
import mediumWA from './medium/whatsapp.png'

class MediumIconRow extends React.Component {

  render() {
    return <table className="icontable">
      <tr>
        <td><a href="https://facebook.com"><img className="iconimage" src={mediumFB} alt="" ></img></a></td>
        <td><a href="https://instagram.com"><img className="iconimage" src={mediumIG} alt="" ></img></a></td>
        <td><a href="https://whatsapp.com"><img className="iconimage" src={mediumWA} alt="" ></img></a></td>
        <td><a href="https://youtube.com"><img className="iconimage" src={mediumYT} alt="" ></img></a></td>
        <td><a href="https://meetup.com"><img className="iconimage" src={mediumMU} alt="" ></img></a></td>
      </tr>
      </table>
  }
}

export default MediumIconRow;
