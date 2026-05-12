import React, { useState, useEffect } from 'react';
import './App.css';

// 1. ตรวจสอบว่าคอมโพเนนต์อยู่ในโฟลเดอร์ components
import Header from './components/Header';
import UserSection from './components/UserSection';
import AdminSection from './components/AdminSection';
import OwnerSection from './components/OwnerSection';

// 2. แก้ไข Path ของ API (จากรูป api.js อยู่ใน src/ โดยตรง ไม่ได้อยู่ใน services/)
import { fetchMembers } from './api';

const App = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ดึงข้อมูลสมาชิก
  const loadMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMembers();
      setMembers(data);
    } catch (err) {
      setError('Failed to load members');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // เรียกใช้ loadMembers เมื่ออยู่ที่หน้า User หรือ Admin
  useEffect(() => {
    if (activeSection === 'user' || activeSection === 'admin') {
      loadMembers();
    }
  }, [activeSection]);

  const handleRefreshMembers = () => {
    loadMembers();
  };

  return (
    <div className="App">
      {/* ส่ง setActiveSection ไปให้ Header เพื่อใช้เปลี่ยนหน้า */}
      <Header activeSection={activeSection} onNavigate={setActiveSection} />

      {activeSection === 'landing' && (
        <div className="landing-section">
          <h1>Generation Thailand</h1>
          <h2>React - Assessment</h2>
          <div className="button-container">
            <button
              className="section-button"
              onClick={() => setActiveSection('user')}
            >
              User Home Section
            </button>
            <button
              className="section-button"
              onClick={() => setActiveSection('admin')}
            >
              Admin Home Section
            </button>
          </div>
        </div>
      )}

      {activeSection === 'user' && (
        <UserSection members={members} loading={loading} error={error} />
      )}

      {activeSection === 'admin' && (
        <AdminSection
          members={members}
          loading={loading}
          error={error}
          onMembersChange={handleRefreshMembers}
        />
      )}

      {activeSection === 'owner' && (
        <OwnerSection />
      )}
    </div>
  );
};

export default App;