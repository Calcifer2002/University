import { useState } from "react";


function StudentForm() {
  const [ID, setID] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [cohort, setCohort] = useState('');

 

  function handleSubmit(event) {
    event.preventDefault();

    const data = {student_id : ID, first_name :first_name, last_name:last_name, cohort:`http://127.0.0.1:8000/api/cohort/${cohort}/` };

    fetch(`http://127.0.0.1:8000/api/student/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="IDInput">Student ID: </label>
        <input
          type="text"
          className="form-control"
          id="IDInput"
          placeholder="Enter ID name eg 20102232"
          value={ID}
          onChange={(event) => setID(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="first_nameInput">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first_nameInput"
          placeholder="Enter first name"
          value={first_name}
          onChange={(event) => setFirst_name(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="last_nameInput">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="last_nameInput"
          placeholder="Enter last name"
          value={last_name}
          onChange={(event) => setLast_name(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cohortInput">Cohort</label>
        <input
          type="text"
          className="form-control"
          id="cohortInput"
          placeholder="Enter cohort eg DS1"
          value={cohort}
          onChange={(event) => setCohort(event.target.value)}
        />
      </div>
     
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default StudentForm;
