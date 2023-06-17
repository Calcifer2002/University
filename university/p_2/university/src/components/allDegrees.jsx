import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




function DegreeList() {
  const [degrees, setDegrees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/")
      .then(response => response.json())
      .then(data => {
        setDegrees(data.map(degree => degree));
        setIsLoaded(true);
      })
      .catch(error => console.log(error));
  }, []);

  const displayDegrees = () => {
    return degrees.map(degree => (
      <div>
      <div class="card">

<div className="card-body">
  <h5 className="card-title" style={{color: "black"}}>{degree.shortcode} </h5>
  <p className="card-text" style={{color: "black"}}>{degree.full_name}</p>
<Link to={`/degrees/${degree.shortcode}`}>
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
        <span><h1 >Degrees</h1> <Link to={`/degree/add`}>
          Add
        </Link> <br></br></span>
        
        
        <ul className="list-group">
          {displayDegrees()}
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

export default DegreeList;


