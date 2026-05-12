// เปลี่ยนมาชี้ที่ Express Server ของเราเอง
const API_BASE = 'http://localhost:6767';

// ดึงข้อมูลสมาชิก
export const fetchMembers = async () => {
  try {
    const response = await fetch(`${API_BASE}/users`);
    if (!response.ok) throw new Error('Failed to fetch members');
    return await response.json();
  } catch (error) {
    console.error('Error fetching members:', error);
    throw error;
  }
};

// เพิ่มสมาชิกใหม่
export const createMember = async (memberData) => {
  try {
    const response = await fetch(`${API_BASE}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memberData),
    });
    if (!response.ok) throw new Error('Failed to create member');
    return await response.json();
  } catch (error) {
    console.error('Error creating member:', error);
    throw error;
  }
};

// ลบสมาชิก
export const deleteMember = async (memberId) => {
  try {
    const response = await fetch(`${API_BASE}/users/${memberId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete member');
    return await response.json();
  } catch (error) {
    console.error('Error deleting member:', error);
    throw error;
  }
};