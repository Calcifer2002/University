import { useState, useEffect } from "react";

import { Link,  useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';


function MCohortList() {
  const [modules, setModules] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const {id} = useParams();
  console.log(`http://127.0.0.1:8000/api/module/?delivered_to=${id}`)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${id}`)
      .then(response => response.json())
      .then(data => {
        setModules(data.map(element => element));
        setIsLoaded(true);
        console.log(data)
      })
      .catch(error => console.log(error));
  }, []);

  const displayModules = () => {
    if (!Array.isArray(modules)) {
        return null;
      }
    return (
      <table className="table table-light">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>CA Split</th>
            <th>Delivered To</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module) => (
            <tr key={module.code}>
              <td>{module.full_name}</td>
              <td>{module.code}</td>
              <td>{module.ca_split}</td>
              <td> {module.delivered_to.map((delivery, index) => {
            const cohort = delivery.split("/")[delivery.split("/").length - 2];
            return (
              <li key={index}>
                
                <Link to={`/cohort/${cohort}`}>
                {cohort}
                </Link>
              </li>
            );
          })}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  if (isLoaded) {
    return (
      <div className="container text-center">
        <span>
          <h1>{id}</h1>
          <Link to={`/module/add`}>Add</Link>
          <br></br>
        </span>
  
        {displayModules()}
      </div>
    );
  }
}
export default MCohortList;
    