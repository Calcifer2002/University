import { useState } from "react";


function DegreeForm() {
  const [fullName, setFullName] = useState('');
  const [shortcode, setShortcode] = useState('');
 

  function handleSubmit(event) {
    event.preventDefault();

    const data = { full_name: fullName, shortcode: shortcode };

    fetch(`http://127.0.0.1:8000/api/degree/`, {
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
        <label htmlFor="fullNameInput">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullNameInput"
          placeholder="Enter full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="shortcodeInput">Shortcode</label>
        <input
          type="text"
          className="form-control"
          id="shortcodeInput"
          placeholder="Enter shortcode"
          value={shortcode}
          onChange={(event) => setShortcode(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default DegreeForm;
