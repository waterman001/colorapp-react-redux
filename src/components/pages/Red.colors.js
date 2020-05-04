import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



const Red = () => (
    <div>
        <Helmet>
                <style>{'body { background-color: red; }'}</style>
            </Helmet>
            <h2>THIS IS RED!</h2>
        <h2>ISN'T IT BEAUTIFUL?</h2>
        <ul>
            <li>
                <Link to='/colors'><h2>GO BACK</h2></Link>
            </li>
            </ul>
    </div>
    );





export default Red;