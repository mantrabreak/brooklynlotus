import React from 'react';
import largeIG from './large/instagram.png'
import largeFB from './large/facebook.png'
import largeMU from './large/meetup.png'
import largeYT from './large/youtube.png'
import largeWA from './large/whatsapp.png'

class LargeIconRow extends React.Component {

  render() {
    return <table className="icontable">
      <tr>
        <td><a href="https://facebook.com"><img className="iconimage" src={largeFB} alt="" ></img></a></td>
        <td><a href="https://instagram.com"><img className="iconimage" src={largeIG} alt="" ></img></a></td>
        <td><a href="https://whatsapp.com"><img className="iconimage" src={largeWA} alt="" ></img></a></td>
        <td><a href="https://youtube.com"><img className="iconimage" src={largeYT} alt="" ></img></a></td>
        <td><a href="https://meetup.com"><img className="iconimage" src={largeMU} alt="" ></img></a></td>
      </tr>
      </table>
  }
}

export default LargeIconRow;
