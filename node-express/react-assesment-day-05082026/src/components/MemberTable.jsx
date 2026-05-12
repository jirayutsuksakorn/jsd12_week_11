import React from 'react';

const MemberTable = ({ members, onDelete, showActions = false, loading, error }) => {
  if (loading) {
    return <div className="loading">Loading members...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!members || members.length === 0) {
    return <div className="no-data">No members found</div>;
  }

  return (
    <div className="table-container">
      <table className="member-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            {showActions && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.lastName}</td>
              <td>{member.position}</td>
              {showActions && (
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this member?')) {
                        onDelete(member.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;
