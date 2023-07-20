import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NewTicketPage.css'; 

const NewTicketPage = ({ onLogout }) => {
  const [leadSource, setLeadSource] = useState('');
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');

  const navigate = useNavigate();

  const handleLeadSourceChange = (e) => {
    setLeadSource(e.target.value);
  };

  const handleTicketTitleChange = (e) => {
    setTicketTitle(e.target.value);
  };

  const handleTicketDescriptionChange = (e) => {
    setTicketDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... (form submission logic)

    // Show a success message as a pop-up screen or modal.
    alert('New Task Created Successfully');
  };

  return (
    <div className="new-ticket-page">
      <h2>New Ticket Page</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Lead Source:</label>
          <input type="text" value={leadSource} onChange={handleLeadSourceChange} />
        </div>
        <div className="form-group">
          <label>Ticket Title:</label>
          <input type="text" value={ticketTitle} onChange={handleTicketTitleChange} />
        </div>
        <div className="form-group">
          <label>Ticket Description:</label>
          <textarea value={ticketDescription} onChange={handleTicketDescriptionChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTicketPage;
