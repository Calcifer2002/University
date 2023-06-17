import { useState } from "react";

function GradeForm() {
  const [ID, setID] = useState('');
  const [ca_mark, setCa_mark] = useState('');
  const [exam_mark, setExam_mark] = useState('');
  const [module, setModule] = useState('');
  const [cohort, setCohort] = useState('');

 

  function handleSubmit(event) {
    event.preventDefault();

    const data = {student : `http://127.0.0.1:8000/api/student/${ID}/`, module: `http://127.0.0.1:8000/api/module/${module}/`, ca_mark :ca_mark, exam_mark:exam_mark, cohort:`http://127.0.0.1:8000/api/cohort/${cohort}/` };
    
    fetch(`http://127.0.0.1:8000/api/grade/`, {
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
        <label htmlFor="moduleInput">Module</label>
        <input
          type="text"
          className="form-control"
          id="moduleInput"
          placeholder="Enter module"
          value={module}
          onChange={(event) => setModule(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ca_markInput">CA marks</label>
        <input
          type="text"
          className="form-control"
          id="ca_markInput"
          placeholder="Enter CA mark"
          value={ca_mark}
          onChange={(event) => setCa_mark(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exam_markInput">Exam Mark</label>
        <input
          type="text"
          className="form-control"
          id="exam_markInput"
          placeholder="Enter exam mark"
          value={exam_mark}
          onChange={(event) => setExam_mark(event.target.value)}
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

export default GradeForm;