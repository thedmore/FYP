import React, { useState } from 'react';

function CrimeRepo() {
  const [crimeData, setCrimeData] = useState({
    crimeType: '',
    dateTime: '',
    complaintDetails: '',
    location: '',
    documentProof: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrimeData({
      ...crimeData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(crimeData); // Do something with the crime data
    // Reset the form after submission if needed
    setCrimeData({
      crimeType: '',
      dateTime: '',
      complaintDetails: '',
      location: '',
      documentProof: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
      <label>
        Type of Crime :
        <input
          type="text"
          name="crimeType"
          value={crimeData.crimeType}
          onChange={handleChange}
        />
      </label>
      </div>
      <br />
      <div>
      <label>
        Date And Time :
        <input
          type="datetime-local"
          name="dateTime"
          value={crimeData.dateTime}
          onChange={handleChange}
        />
      </label>
      </div>
      <br />
      <div>
      <label>
        Complaint Details :   
        <textarea
          name="complaintDetails"
          value={crimeData.complaintDetails}
          onChange={handleChange}
        />
      </label>
      </div>
      <br />
      <div>
      <label>
        Location :
        <input
          type="text"
          name="location"
          value={crimeData.location}
          onChange={handleChange}
        />
      </label>
      </div>
      <br />
      <div>
      <label>
        Upload Document Proof :
        <input
          type="file"
          name="documentProof"
          onChange={handleChange}
        />
      </label>
      </div>
      <br />
      <div >
      <button type="submit" style={{backgroundColor:'#FF4646',width:'200px',height:'40px'}}><b>Submit</b></button>
      </div>
    </form>
  );
}

export default CrimeRepo;
