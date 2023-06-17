import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ModulePage() {
  const [module, setModule] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { code } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/module/${code}/`)
      .then(response => response.json())
      .then(data => {
        setModule(data);
        setIsLoaded(true);
      })
      .catch(error => console.log(error));
  }, [code]);

  function displayModule(module) {
    const deliveredTo = module.delivered_to;
    return (
      <div>
        {deliveredTo.map((delivery, index) => {
          const cohort = delivery.split("/")[delivery.split("/").length - 2];
          return (
            <div>
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title" style={{color:"black"}}>Cohort {cohort}</h5>
                <p style={{color:"black"}}>CA Split: {module.ca_split}</p>
                <Link to={`/cohort/${cohort}`}>
                  <button type="button" className="btn btn-info">View More</button>
                </Link>
              </div>
            </div>
             <br />
             </div>
          );
        })}
      
      </div>
    );
  };
  
  
  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
         <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    );
  }
  
  return (
    <div className="container">
      <h1 className="mt-3 mb-4">{module.full_name} [{module.code}]</h1>
      <h2>Module Details:</h2>
      {displayModule(module)}
  
      
    </div>
  );}
  export default ModulePage;