import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function StudentPage() {
  const [student, setStudent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/student/${id}/`)
      .then(response => response.json())
      .then(data => {
        setStudent(data);
        
        setIsLoaded(true);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p>Loading...</p>
      </div>
    );
  }

  const cohortName =student.cohort.split("/")[student.cohort.split("/").length - 2];
  return (
    <div className="container">
      
      <h1 className="mt-3 mb-4">{student.first_name} {student.last_name}</h1>
      <h2 className="mt-3 mb-4">{student.name}</h2>
      <h2 className="mt-3 mb-4">{student.email}</h2>
      <h3 className="mt-3 mb-4">Cohort - <Link to={`/cohort/${cohortName}`}>
      {cohortName}
                </Link> </h3>

      <h2>Academics</h2>
      <AllStudents id={id} />
    </div>
  );
}

function AllStudents(props) {
  const [grades, setGrades] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/grade/?student=${props.id}`)
      .then(response => response.json())
      .then(data => {
        setGrades(data);
       
        setIsLoaded(true);
      })
      .catch(error => console.log(error));
  }, [props.id]);

  const displayGrades = () => {
    if (!Array.isArray(grades)) {
        return null;
      }
      
    return (
        <div>
        <Link to={`/student/grade`}>
        Add grade
      </Link>
      <table class="table table-light">
      <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Module</th>
      <th scope="col">CA</th>
      <th scope="col">Exam</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>
  <tbody>
    {grades.map((grade, index) => {
      const moduleName = grade.module.split("/")[grade.module.split("/").length - 2];
      return (
        <tr key={grade.id}>
          <th scope="row">{index + 1}</th>
          <td>{moduleName}</td>
          <td>{grade.ca_mark}</td>
          <td>{grade.exam_mark}</td>
          <td>{grade.total_grade}</td>
        </tr>
      );
    })}
  </tbody>
</table>

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
    <ul className="list-group">
      {displayGrades()}
    </ul>
  );
}

export default StudentPage;
