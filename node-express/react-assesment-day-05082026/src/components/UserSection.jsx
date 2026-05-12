import React from 'react';
import MemberTable from "./MemberTable";

const UserSection = ({ members, loading, error }) => {
  return (
    <div className="section user-section">
      <h1>Generation Thailand</h1>
      <h2>Home - User Section</h2>
      <MemberTable
        members={members}
        loading={loading}
        error={error}
        showActions={false}
      />
    </div>
  );
};

export default UserSection;
