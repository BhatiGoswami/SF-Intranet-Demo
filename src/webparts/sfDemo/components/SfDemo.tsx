import * as React from 'react';
import styles from './SfDemo.module.scss';
import { ISfDemoProps } from './ISfDemoProps';

import {
  Home24Regular,
  Info24Regular,
  Calendar24Regular,
  People24Regular,
  Folder24Regular,
  Document24Regular,
  ClipboardTask24Regular,
  Settings24Regular,
  Alert24Regular,
  Grid24Regular,
  WeatherMoon24Regular,
  MegaphoneRegular,
  CalendarRegular,
  AirplaneRegular,
  DocumentRegular,
  PeopleRegular,
  ImageRegular,
  ClipboardTaskRegular,
  QuestionCircleRegular
} from '@fluentui/react-icons';

interface IMenuItem {
  key: string;
  title: string;
  icon: JSX.Element;
  hasChildren: boolean;
}

const menuItems: IMenuItem[] = [
  { key: 'home', title: 'Home', icon: <Home24Regular />, hasChildren: false },
  { key: 'about', title: 'About the Company', icon: <Info24Regular />, hasChildren: true },
  { key: 'info', title: 'Information', icon: <Document24Regular />, hasChildren: true },
  { key: 'events', title: 'Events & Calendar', icon: <Calendar24Regular />, hasChildren: true },
  { key: 'people', title: 'People', icon: <People24Regular />, hasChildren: true },
  { key: 'media', title: 'Media Center', icon: <Folder24Regular />, hasChildren: true },
  { key: 'policies', title: 'Policies & Knowledge', icon: <Document24Regular />, hasChildren: true },
  { key: 'surveys', title: 'Surveys & Feedback', icon: <ClipboardTask24Regular />, hasChildren: true },
  { key: 'admin', title: 'Administration', icon: <Settings24Regular />, hasChildren: false }
];
const quickLinks = [
  { title: 'Announcements', icon: <MegaphoneRegular />, color: '#F59E0B' },
  { title: 'Events', icon: <CalendarRegular />, color: '#3B82F6' },
  { title: 'Holidays', icon: <AirplaneRegular />, color: '#10B981' },
  { title: 'Policies', icon: <DocumentRegular />, color: '#8B5CF6' },
  { title: 'Directory', icon: <PeopleRegular />, color: '#EC4899' },
  { title: 'Gallery', icon: <ImageRegular />, color: '#0EA5E9' },
  { title: 'Surveys', icon: <ClipboardTaskRegular />, color: '#F97316' },
  { title: 'FAQ', icon: <QuestionCircleRegular />, color: '#64748B' }
];

const SfDemo: React.FC<ISfDemoProps> = (props) => {

  /* SPA STATE */
  const [activeMenu, setActiveMenu] = React.useState<string>('home');

  /* Content Switcher */
  const renderContent = () => {
    switch (activeMenu) {
      case 'home':
        return (
          <>
            <div className={styles.announcementBar}>
              {/* 📢 Q4 All-Hands Meeting: Vision 2025 – Leadership shares our roadmap */}
              Announcements | Q4 All-Hands Meeting: Vision 2025 | Leadership shares our strategic roadmap and celebrates achievements from the past quarter.
            </div>

            <div className={styles.pageHeader}>
              <div>
                <h2>Good morning, {props.userDisplayName}</h2>
                <p>Welcome to your Food Service Dashboard</p>
              </div>
              <button className={styles.customizeBtn}>Customize</button>
            </div>

            <div className={styles.hero}>
              <div className={styles.heroOverlay}>
                <h3>Delivering Quality Food Solutions Across New Zealand</h3>
                <p>
                  From sourcing to delivery, we ensure freshness, consistency,
                  and reliability for professional kitchens.
                </p>
                <button className={styles.primaryBtn}>Explore Products</button>
              </div>
            </div>

           <div className={styles.quickAccessBar}>
  {quickLinks.map(item => (
    <div key={item.title} className={styles.quickItem}>
      <div
        className={styles.quickIcon}
        style={{ backgroundColor: item.color + '20', color: item.color }}
      >
        {item.icon}
      </div>
      <span>{item.title}</span>
    </div>
  ))}
</div>
          </>
        );

      case 'people':
        return <h2>👥 People Directory</h2>;

      case 'events':
        return <h2>📅 Events & Calendar</h2>;

      case 'media':
        return <h2>🖼 Media Center</h2>;

      case 'policies':
        return <h2>📄 Policies & Knowledge</h2>;

      case 'admin':
        return <h2>⚙️ Administration</h2>;

      default:
        return <h2>Section Coming Soon</h2>;
    }
  };

  return (
    <div className={styles.appShell}>

      {/* HEADER */}
      <header className={styles.headerBar}>
        <div className={styles.headerLeft}>
          <span className={styles.hamburger}>☰</span>
          <div className={styles.headerLogo}>
            <span className={styles.logoBox}>W</span>
            <span className={styles.logoText}>WorkNest</span>
          </div>
        </div>

        {/* <div className={styles.headerCenter}>
          <input className={styles.searchBox} placeholder="Search" />
        </div> */}
<div className={styles.headerRight}>
  <div className={styles.iconBtn}>
    <Alert24Regular />
    <span className={styles.badge}>3</span>
  </div>

  <div className={styles.iconBtn}>
    <Grid24Regular />
  </div>

  <div className={styles.iconBtn}>
    <WeatherMoon24Regular />
  </div>

  <div className={styles.avatar}>
    {props.userDisplayName?.charAt(0)}
  </div>
</div>

      </header>

      {/* BODY */}
      <div className={styles.layout}>

        {/* SIDEBAR */}
        <aside className={styles.sideNav}>
          <nav className={styles.menu}>
            {menuItems.map(item => (
              <div
                key={item.key}
                className={`${styles.menuItem} ${
                  activeMenu === item.key ? styles.active : ''
                }`}
                onClick={() => setActiveMenu(item.key)}
              >
                <div className={styles.menuLeft}>
                  <span className={styles.menuIcon}>{item.icon}</span>
                  <span className={styles.menuText}>{item.title}</span>
                </div>

                {item.hasChildren && (
                  <span className={styles.chevron}>›</span>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* CONTENT */}
        <main className={styles.content}>
          {renderContent()}
        </main>

      </div>
    </div>
  );
};

export default SfDemo;
