import React from 'react';
import TicketCard from './TicketCard';

function KanbanBoard({ tickets, users, grouping }) {
  const statuses = [
    { name: 'Backlog', icon: '/Untitled/icons_FEtask/Backlog.svg', color: '#007bff' },
    { name: 'Todo', icon: '/Untitled/icons_FEtask/To-do.svg', color: '#f50057' },
    { name: 'In Progress', icon: '/Untitled/icons_FEtask/in-progress.svg', color: '#ffc107' },
    { name: 'Done', icon: '/Untitled/icons_FEtask/Done.svg', color: '#28a745' },
    { name: 'Canceled', icon: '/Untitled/icons_FEtask/Cancelled.svg', color: '#d9534f' }
  ];

  const priorities = [
    { level: 'No Priority', value: 0, icon: '/Untitled/icons_FEtask/No-priority.svg', color: '#888' },
    { level: 'Urgent', value: 4, icon: '/Untitled/icons_FEtask/SVG - Urgent Priority colour.svg', color: '#dc3545' },
    { level: 'High', value: 3, icon: '/Untitled/icons_FEtask/Img - High Priority.svg', color: '#fd7e14' },
    { level: 'Medium', value: 2, icon: '/Untitled/icons_FEtask/Img - Medium Priority.svg', color: '#007bff' },
    { level: 'Low', value: 1, icon: '/Untitled/icons_FEtask/Img - Low Priority.svg', color: '#28a745' }
  ];

  const userAvatars = {
    'usr-1': '/Untitled/icons_FEtask/unnamed.jpg',
    'usr-2': '/Untitled/icons_FEtask/unnamed2.png',
    'usr-3': '/Untitled/icons_FEtask/unnamed3.png',
    'usr-4': '/Untitled/icons_FEtask/unnamed.png',
    'usr-5': '/Untitled/icons_FEtask/harsha.png'
  };

  const getTicketsByStatus = (status) => tickets.filter(ticket => ticket.status.toLowerCase() === status.name.toLowerCase());
  const getTicketsByUser = (userId) => tickets.filter(ticket => ticket.userId === userId);
  const getTicketsByPriority = (priority) => tickets.filter(ticket => ticket.priority === priority.value);

  return (
    <div className="kanban-board">
      {/* Group by Status */}
      {grouping === 'status' && statuses.map((status) => (
        <div key={status.name} className="kanban-column">
          <div className="status-column-header">
            <img className="status-icon" src={status.icon} alt={status.name} />
            <h4 className="status-name">{status.name}</h4>
            <span className="status-count">{getTicketsByStatus(status).length}</span>
            <button className="add-card-btn">+</button>
            <button className="add-card-btn">
              <img src='/untitled/icons_FEtask/3 dot menu.svg' alt='menu' />
            </button>
          </div>

          {/* Cards for this status */}
          {getTicketsByStatus(status).map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} users={users} grouping={grouping} />
          ))}
        </div>
      ))}

      {/* Group by User */}
      {grouping === 'user' && users.map((user) => (
        <div key={user.id} className="kanban-column">
          <div className="status-column-header">
            {/* Use the 'user' variable for user avatar */}
            <img className="user-avatar" src={userAvatars[user.id]} alt={user.name} />
            <h4 className="status-name">{user.name}</h4>
            <span className="status-count">{getTicketsByUser(user.id).length}</span>
            <button className="add-card-btn">+</button>
            <button className="add-card-btn">
              <img src='/untitled/icons_FEtask/3 dot menu.svg' alt='menu' />
            </button>
          </div>

          {/* Cards for this user */}
          {getTicketsByUser(user.id).map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} users={users} grouping={grouping} />
          ))}
        </div>
      ))}

      {/* Group by Priority */}
      {grouping === 'priority' && priorities.map((priority) => (
        <div key={priority.value} className="kanban-column">
          <div className="status-column-header">
            <img className="status-icon" src={priority.icon} alt={priority.level} />
            <h4 className="status-name">{priority.level}</h4>
            <span className="status-count">{getTicketsByPriority(priority).length}</span>
            <button className="add-card-btn">+</button>
            <button className="add-card-btn">
              <img src='/untitled/icons_FEtask/3 dot menu.svg' alt='menu' />
            </button>
          </div>

          {/* Cards for this priority */}
          {getTicketsByPriority(priority).map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} users={users} grouping={grouping} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
