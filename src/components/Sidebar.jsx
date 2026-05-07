import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Zap, 
  Megaphone, 
  Globe2, 
  Filter,
  Rocket,
  Network
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Command Centre', icon: <LayoutDashboard size={20} /> },
    { path: '/segments', label: 'Student Segments', icon: <Users size={20} /> },
    { path: '/action-studio', label: 'Action Studio', icon: <Zap size={20} /> },
    { path: '/activation', label: 'Activation Engine', icon: <Rocket size={20} /> },
    { path: '/campaigns', label: 'Campaigns', icon: <Megaphone size={20} /> },
    { path: '/community', label: 'Community', icon: <Globe2 size={20} /> },
    { path: '/referrals', label: 'Referral Operations', icon: <Network size={20} /> },
    { path: '/funnel', label: 'Conversion Funnel', icon: <Filter size={20} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/medibank-logo.webp" alt="Medibank Logo" className="brand-logo" />
        <h1>Engine</h1>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="status-indicator">
          <span className="dot online"></span>
          System Operational
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
