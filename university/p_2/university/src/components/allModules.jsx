import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';




function ModuleList() {
  const [modules, setModules] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/module/")
      .then(response => response.json())
      .then(data => {
        setModules(data.map(element => element));
        setIsLoaded(true);
       
      })
      .catch(error => console.log(error));
  }, []);

  const displayModule = () => {
    return modules.map(element => (
      <div key={element.code}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title" style={{ color: "black" }}>
              {element.full_name} [ {element.code} ]
            </h4>
  
            {element.delivered_to.map((delivery, index) => (
              <p className="card-text" style={{ color: "black" }}>
                {delivery.split("/")[delivery.split("/").length - 2]}
              </p>
              
            ))}
            <p className="card-text"  style={{ color: "black" }}>CA split: {element.ca_split} </p>
            <Link to={`/module/${element.code}`}>
              <button type="button" className="btn btn-info">
                View
              </button>
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
        <span><h1 >Modules</h1> <Link to={`/module/add`}>
          Add
        </Link> <br></br></span>
        
        
        <ul className="list-group">
           {displayModule()};
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

export default ModuleList;