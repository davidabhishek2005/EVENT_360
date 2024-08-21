import React, { useState } from 'react';
import axios from 'axios';

const RsvpForm = ({ eventId }) => {
  const [status, setStatus] = useState('attending');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/rsvps', { eventId, status, comments });
      alert('RSVP submitted successfully!');
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Failed to submit RSVP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="attending">Attending</option>
          <option value="not attending">Not Attending</option>
          <option value="maybe">Maybe</option>
        </select>
      </label>
      <label>
        Comments:
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </label>
      <button type="submit">Submit RSVP</button>
    </form>
  );
};

export default RsvpForm;
