import { useState, useEffect } from "react";
import { useParams,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function DegreePage() {
  const [degree, setDegree] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { shortcode } = useParams();
  console.log(shortcode)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/degree/${shortcode}/`)
      .then(response => response.json())
      .then(data => {
        setDegree(data);
        console.log(data)
        setIsLoaded(true);
      })
      .catch(error => console.log(error));
  }, [shortcode]);

  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="mt-3 mb-4">{degree.full_name} [{degree.shortcode}]</h1>
      <h2>Cohorts:</h2>
      <AllCohorts shortcode={shortcode} />
    </div>
  );
}

function AllCohorts(props) {
  const [cohorts, setCohorts] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(props.shortcode);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cohort/?degree=${props.shortcode}`)
      .then(response => response.json())
      .then(data => {
        setCohorts(data);
        console.log(data);
        setIsLoaded(true);
      })
      .catch(error => console.log(error));
  }, [props.shortcode]);

  function displayCohorts(cohorts) {
    if (!Array.isArray(cohorts)) {
      return null;
    }
    return cohorts.map(cohort => (
      <div>
      <div class="card">

<div className="card-body">
  <h5 className="card-title" style={{color: "black"}}>{cohort.id} - Year {cohort.year}</h5>
  <p className="card-text" style={{color: "black"}}>{cohort.name}</p>
  <Link to={`/cohort/${cohort.id}`}>
          <button type="button" className="btn btn-info">View More</button>
        </Link>
</div>


</div>

<br />
</div>
     
    ));
  }

  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    );
  }

  return (
    <ul className="list-group">
      {displayCohorts(cohorts)}
    </ul>
  );
}

export default DegreePage;
