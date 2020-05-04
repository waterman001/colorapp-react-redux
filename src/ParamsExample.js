import React from 'react';
import { Link, Route } from 'react-router-dom';

const Instructors = ({match, location}) => {
    const { name } = match.params;
    return(
        <div>
            <h3>Instructor Info for { name ? name: "No one"}</h3>
    <h4>What's in match? <pre> { JSON.stringify(match, null, 4)}</pre></h4>
    <h4>What's in location? <pre> { JSON.stringify(location, null, 4)}</pre></h4>
        </div>
    )
}

const ParamsExample = () => (
    <div>
        <h2>Instructor:</h2>
        <ul>
            <li>
                <Link to="/name/elie">Elie</Link>
            </li>
            <li>
                <Link to="/name/matt">Matt</Link>
            </li>
            <li>
                <Link to="/name/tim">Tim</Link>
            </li>
        </ul>
        <Route path="/name/:name" component= {Instructors} />
    </div>
);












export default ParamsExample;