import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DisplayControls from './components/DisplayControls';
import './App.css';

function App() {
  const [tickets, setTickets] = useState(JSON.parse(localStorage.getItem('tickets')) || []);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
  const [loading, setLoading] = useState(tickets.length === 0 && users.length === 0); // Show loading only if cache is empty

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
        
        // Cache data in localStorage for faster subsequent loads
        localStorage.setItem('tickets', JSON.stringify(data.tickets));
        localStorage.setItem('users', JSON.stringify(data.users));

        setLoading(false);  // Stop loading when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  return (
    <div className="App">
      {loading && <div className="loading">Loading...</div>} {/* Only show loading when cache is empty */}
      
      {!loading && (
        <>
          <DisplayControls
            grouping={grouping}
            setGrouping={setGrouping}
            ordering={ordering}
            setOrdering={setOrdering}
          />
          <div className="board-area">
            <KanbanBoard tickets={tickets} users={users} grouping={grouping} ordering={ordering} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
