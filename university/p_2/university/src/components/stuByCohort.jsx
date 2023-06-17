import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StudentByCohortPage() {
  const [ cohort, setCohort] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cohort/${id}/`)
      .then(response => response.json())
      .then(data => {
        setCohort(data);
        console.log(data)
        setIsLoaded(true);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
         <p> <FontAwesomeIcon icon={faSpinner} spin size="3x" /></p>
      </div>
    );
  }

  return (
    <div className="container">
      
      

      <h2>Students of {cohort.name}</h2>
      <Link to={`/student/add`}>
          Add
        </Link>
      <AllStudents id={id} />
    </div>
  );
}function AllStudents(props) {
    const [student, setStudent] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
  
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/student/?cohort=${props.id}`)
        .then(response => response.json())
        .then(data => {
          setStudent(data);
          console.log(data);
          setIsLoaded(true);
        })
        .catch(error => console.log(error));
    }, [props.shortcode]);
    function displaystudent(student) {
      if (!Array.isArray(student)) {
        return null;
      }
      return student.map(student => (
        <div>
        <div class="card">
  
  <div className="card-body">
    <h4 className="card-title" style={{color: "black"}}>{student.first_name} {student.last_name}</h4>
    <p className="card-text" style={{color: "black"}}>Student ID: {student.student_id} <br /> Email: {student.email}</p>
    <Link to={`/student/${student.student_id}`}>
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
          <p> <FontAwesomeIcon icon={faSpinner} spin size="3x" /></p>
        </div>
      );
    }
  
    return (
      <ul className="list-group">
        {displaystudent(student)}
      </ul>
    );
  }
  
  export default StudentByCohortPage;
  
  