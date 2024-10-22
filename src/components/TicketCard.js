import React from 'react';

function TicketCard({ ticket, users, grouping }) {
  const assignedUser = users.find(user => user.id === ticket.userId);

  // Status icons based on the ticket's status
  const statusIcons = {
    'Todo': '/Untitled/icons_FEtask/To-do.svg',
    'In progress': '/Untitled/icons_FEtask/in-progress.svg',
    'Done': '/Untitled/icons_FEtask/Done.svg',
    'Backlog': '/Untitled/icons_FEtask/Backlog.svg',
    'Canceled': '/Untitled/icons_FEtask/Cancelled.svg'
  };

  // Priority icons based on the ticket's priority
  const priorityIcons = {
    0: '/Untitled/icons_FEtask/No-priority.svg',
    1: '/Untitled/icons_FEtask/Img - Low Priority.svg',
    2: '/Untitled/icons_FEtask/Img - Medium Priority.svg',
    3: '/Untitled/icons_FEtask/Img - High Priority.svg',
    4: '/Untitled/icons_FEtask/SVG - Urgent Priority colour.svg'
  };

  // User avatars based on the user ID
  const userAvatars = {
    'usr-1': '/Untitled/icons_FEtask/unnamed.jpg',
    'usr-2': '/Untitled/icons_FEtask/unnamed2.png',
    'usr-3': '/Untitled/icons_FEtask/unnamed3.png',
    'usr-4': '/Untitled/icons_FEtask/unnamed.png',
    'usr-5': '/Untitled/icons_FEtask/harsha.png'
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        
    
        {grouping === 'status' && 'priority' && 'user' && assignedUser && (
          <img
            className="user-avatar"
            src={userAvatars[assignedUser.id]}  
            alt={assignedUser.name}
            title={assignedUser.name}
          />
        )}
      </div>

      
      <div className="ticket-title-container">
        {/* When grouping by status, display the priority icon */}
        {/* {grouping === 'status' && (
          <img
            className="priority-icon"
            src={priorityIcons[ticket.priority]}  // Get the priority icon dynamically
            alt={`Priority ${ticket.priority}`}
          />
        )} */}

        {/* When grouping by user or priority, display the status icon */}
        {(grouping === 'priority' || grouping === 'user') && (
          <img
            className="status-icon"
            src={statusIcons[ticket.status]}  // Get the status icon dynamically
            alt={ticket.status}
          />
        )}
      
        <h4 className="ticket-title">{ticket.title}</h4>
      </div>

      <div className="ticket-body">
        <div className="ticket-info">
        
          <img
            className="ticket-icon"
            src={priorityIcons[ticket.priority]} 
            alt={`Priority ${ticket.priority}`}
          />
          <span className="ticket-tag">{ticket.tag[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
