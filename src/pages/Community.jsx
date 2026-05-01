import { Users, Calendar, Plus, MessageCircle } from 'lucide-react';

const Community = () => {
  const groups = [
    { id: 1, name: 'RMIT Students', members: 450, activity: 'High' },
    { id: 2, name: 'Indian Students Connect', members: 820, activity: 'High' },
    { id: 3, name: 'Nursing & Health Students', members: 310, activity: 'Medium' }
  ];

  const events = [
    { id: 1, title: 'Navigating Aussie Healthcare', date: 'Oct 15, 2026', rsvp: 120 },
    { id: 2, title: 'Graduate Visa Q&A', date: 'Oct 22, 2026', rsvp: 345 }
  ];

  return (
    <div className="page-container">
      <div className="page-header flex-between">
        <div>
          <h1>Community & Events</h1>
          <p>Foster belonging and peer-driven engagement.</p>
        </div>
        <div className="flex-center gap-12">
          <button className="btn btn-secondary">
            <Users size={16} />
            New Group
          </button>
          <button className="btn btn-primary">
            <Calendar size={16} />
            New Event
          </button>
        </div>
      </div>

      <div className="community-grid">
        <div className="panel glass-panel">
          <div className="panel-header flex-between">
            <h3>Active Groups</h3>
            <span className="badge">12 Total</span>
          </div>
          <div className="list">
            {groups.map(group => (
              <div key={group.id} className="list-item flex-between">
                <div className="info">
                  <h4>{group.name}</h4>
                  <span className="meta">{group.members} members</span>
                </div>
                <div className="activity-badge">
                  Activity: <span className={`text-${group.activity.toLowerCase()}`}>{group.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel glass-panel">
          <div className="panel-header flex-between">
            <h3>Upcoming Events</h3>
            <span className="badge">4 Scheduled</span>
          </div>
          <div className="list">
            {events.map(event => (
              <div key={event.id} className="list-item flex-between">
                <div className="info">
                  <h4>{event.title}</h4>
                  <span className="meta">{event.date}</span>
                </div>
                <div className="rsvp-badge">
                  {event.rsvp} RSVPs
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gap-12 { gap: 12px; }
        .community-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .panel {
          padding: 24px;
        }
        .panel-header {
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 16px;
        }
        .panel-header h3 {
          font-size: 18px;
        }
        .list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .list-item {
          padding: 16px;
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .info h4 {
          font-size: 15px;
          margin-bottom: 4px;
        }
        .meta {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .activity-badge, .rsvp-badge {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-tertiary);
          background: var(--bg-base);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }
        .text-high { color: var(--success); }
        .text-medium { color: var(--warning); }
      `}</style>
    </div>
  );
};

export default Community;
