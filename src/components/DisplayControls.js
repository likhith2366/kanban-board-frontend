// DisplayControls.js
import React, { useState, useRef, useEffect } from 'react';

function DisplayControls({ grouping, setGrouping, ordering, setOrdering }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="display-controls" ref={dropdownRef}>
     
      <button className="display-btn" onClick={toggleDropdown}>
        Display ▼
      </button>


      {isOpen && (
        <div className="dropdown-content">
          <div>
            <label>Grouping</label>
            <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">By Status</option>
              <option value="user">By User</option>
              <option value="priority">By Priority</option>
            </select>
          </div>
          <div>
            <label>Ordering</label>
            <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
              <option value="priority">By Priority</option>
              <option value="title">By Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayControls;
