import { useState } from "react";


function ModuleForm() {
  const [code, setCode] = useState('');
  const [full_name, setFullName] = useState('');
  const [delivered_to, setDeliveredTo] = useState([]);
  const [ca_split, setCaSplit] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
  
    const data = {
      code: code,
      full_name: full_name,
      delivered_to: [`http://127.0.0.1:8000/api/cohort/${delivered_to}/`],
      ca_split: ca_split
    };
    console.log([`http://127.0.0.1:8000/api/cohort/${delivered_to}`])
  
    fetch(`http://127.0.0.1:8000/api/module/`, {
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
        <label htmlFor="CodeInput">Code: </label>
        <input
          type="text"
          className="form-control"
          id="CodeInput"
          placeholder="Enter Code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="FullNameInput">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="FullNameInput"
          placeholder="Enter Full Name"
          value={full_name}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="DeliveredToInput">Delivered To</label>
        <input
          type="text"
          className="form-control"
          id="DeliveredToInput"
          placeholder="Enter Cohort -eg DS1"
          value={delivered_to}
          onChange={(event) => setDeliveredTo([event.target.value])}
        />
      </div>
      <div className="form-group">
        <label htmlFor="CaSplitInput">CA Split</label>
        <input
          type="number"
          className="form-control"
          id="CaSplitInput"
          placeholder="Enter CA Split"
          value={ca_split}
          onChange={(event) => setCaSplit(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ModuleForm;
