// App.js
import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DisplayControls from './components/DisplayControls';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');

  // Fetch tickets and users from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  // Save the grouping and ordering in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  return (
    <div className="App">
      {/* Display Controls for grouping and ordering */}
      <DisplayControls
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />

      {/* Kanban Board displaying the tickets and users */}
      <div className="board-area">
        <KanbanBoard tickets={tickets} users={users} grouping={grouping} ordering={ordering} />
      </div>
    </div>
  );
}

export default App;
