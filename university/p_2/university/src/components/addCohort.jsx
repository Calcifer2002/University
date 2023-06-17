import { useState } from "react";


function CohortForm() {
  const [ID, setID] = useState('');
  const [year, setYear] = useState('');
  const [degree, setDegree] = useState('');

 

  function handleSubmit(event) {
    event.preventDefault();

    const data = {id : ID, year : year,  degree:`http://127.0.0.1:8000/api/degree/${degree}/` };

    fetch(`http://127.0.0.1:8000/api/cohort/`, {
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
        <label htmlFor="IDInput">ID: </label>
        <input
          type="text"
          className="form-control"
          id="IDInput"
          placeholder="Enter ID name eg DS1"
          value={ID}
          onChange={(event) => setID(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="YearInput">Year</label>
        <input
          type="text"
          className="form-control"
          id="YearInput"
          placeholder="Enter Year - must be <= 4"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="DegreeInput">Degree</label>
        <input
          type="text"
          className="form-control"
          id="DegreeInput"
          placeholder="Enter Degree eg DS"
          value={degree}
          onChange={(event) => setDegree(event.target.value)}
        />
      </div>
      
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CohortForm;
