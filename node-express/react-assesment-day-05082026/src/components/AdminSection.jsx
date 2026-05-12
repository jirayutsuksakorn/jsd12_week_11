import React from 'react';
import CreateUserForm from './CreateUserForm';
import MemberTable from './MemberTable';
import { deleteMember } from '../api'; // ปรับตามโครงสร้าง src/api.js

const AdminSection = ({ members, loading, error, onMembersChange }) => {
  const handleDeleteMember = async (memberId) => {
    try {
      await deleteMember(memberId);
      onMembersChange();
    } catch (err) {
      console.error('Error deleting member:', err);
    }
  };

  return (
    <div className="section admin-section">
      <h1>Generation Thailand</h1>
      <h2>Home - Admin Section</h2>

      <CreateUserForm onSuccess={onMembersChange} />

      <MemberTable
        members={members}
        loading={loading}
        error={error}
        showActions={true}
        onDelete={handleDeleteMember}
      />
    </div>
  );
};

export default AdminSection;