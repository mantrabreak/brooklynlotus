import React from 'react';
import IG from './shared/instagram.png'
import FB from './shared/facebook.png'
import MU from './shared/meetup.png'
import YT from './shared/youtube.png'
import WA from './shared/whatsapp.png'

class IconRow extends React.Component {

  render() {
    return <table className="icontable">
      <tbody>
        <tr>
          <td><a href="https://www.facebook.com/brooklynlotus"><img className="iconimage" src={FB} alt="Facebook Logo" ></img></a></td>
          <td><a href="https://www.instagram.com/lotus_room"><img className="iconimage" src={IG} alt="Instagram Logo" ></img></a></td>
          <td><a href="https://chat.whatsapp.com/BPzDA4iWAzgKL7CmilB3I2"><img className="iconimage" src={WA} alt="WhatsApp Logo" ></img></a></td>
          <td><a href="https://www.youtube.com/channel/UCbsWmjsl71s_862PO5R8iOw"><img className="iconimage" src={YT} alt="YouTube Logo" ></img></a></td>
          <td><a href="https://www.meetup.com/Lotus-Room-Brooklyn/"><img className="iconimage" src={MU} alt="Meetup Logo" ></img></a></td>
        </tr>
      </tbody>
    </table>
  }
}

export default IconRow;
