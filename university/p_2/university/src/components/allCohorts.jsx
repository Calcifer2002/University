import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';




function CohortList() {
  const [cohorts, setCohorts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cohort/")
      .then(response => response.json())
      .then(data => {
        setCohorts(data.map(element => element));
        setIsLoaded(true);
        console.log(data)
      })
      .catch(error => console.log(error));
  }, []);

  const displayCohorts = () => {
    return cohorts.map(cohort => (
      <div>
      <div class="card">

<div className="card-body">
  <h4 className="card-title" style={{color: "black"}}>{cohort.name}</h4>
  <p className="card-text" style={{color: "black"}}>[ {cohort.year} ] {cohort.id}</p>
  <Link to={`/cohort/${cohort.id}`}>
          <button type="button" className="btn btn-info">View</button>
        </Link>
</div>


</div>

<br />
</div>
     
      
  
      
    ));
  };

  if (isLoaded) {
    return (
      <div className="container text-center">
        <span><h1 >Cohorts</h1> <Link to={`/cohort/add`}>
          Add
        </Link> <br></br></span>
        
        
        <ul className="list-group">
          {displayCohorts()}
        </ul>
       
      </div>
    );
  }
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
    </div>
  );
}

export default CohortList;
