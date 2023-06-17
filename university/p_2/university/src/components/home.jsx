import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>University</h1>
      <p>"University is a passport to future opportunities."</p>
      <span style={{display: 'inline-block', marginRight: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '0.5rem'}}><Link to={`/degrees`}>
      Degrees
        </Link></span>
        <span style={{display: 'inline-block', marginRight: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '0.5rem'}}><Link to={`/cohorts`}>
      Cohorts
        </Link></span>
      <span style={{display: 'inline-block', marginRight: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '0.5rem'}}><Link to={`/modules`}>
    Modules
        </Link></span>
        <span style={{display: 'inline-block', marginRight: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '0.5rem'}}><Link to={`/student/cohort`}>
    Students by Cohort
        </Link></span>
    </div>
  );
}

export default Home;
