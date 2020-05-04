import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';




const Yellow = () => (
  <div>
    <Helmet>
      <style>{'body { background-color: yellow; }'}</style>
    </Helmet>
    <h2>THIS IS YELLOW!</h2>
    <h2>ISN'T IT BEAUTIFUL?</h2>
    <ul>
      <li>
        <Link to='/colors'><h2>GO BACK</h2></Link>
      </li>
    </ul>
  </div>
);





export default Yellow;