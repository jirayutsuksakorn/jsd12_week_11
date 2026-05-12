import React, { useState } from 'react';
import { createMember } from "../api";

const CreateUserForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    position: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.lastName || !formData.position) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createMember(formData);
      setFormData({ name: '', lastName: '', position: '' });
      onSuccess();
    } catch (err) {
      setError('Failed to create member');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-form-section">
      <h3>Create User Here</h3>
      {error && <div className="error-message">{error}</div>}
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          disabled={loading}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          disabled={loading}
        />
        <button type="submit" disabled={loading} className="save-btn">
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
