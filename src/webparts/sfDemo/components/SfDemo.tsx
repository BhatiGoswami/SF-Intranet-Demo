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
  AirplaneRegular,
  PeopleRegular,
  ImageRegular,
  ClipboardTaskRegular,
  QuestionCircleRegular
} from '@fluentui/react-icons';

/* ---------- TYPES ---------- */
interface ISubMenuItem {
  key: string;
  title: string;
}

interface IMenuItem {
  key: string;
  title: string;
  icon: JSX.Element;
  children?: ISubMenuItem[];
}

/* ---------- MENU DATA ---------- */
const menuItems: IMenuItem[] = [
  { key: 'home', title: 'Home', icon: <Home24Regular /> },
  {
    key: 'about',
    title: 'About the Company',
    icon: <Info24Regular />,
    children: [
      { key: 'companyOverview', title: 'Company Overview' },
      { key: 'ourJourney', title: 'Our Journey' },
      { key: 'leadership', title: 'Leadership Messages' },
      { key: 'notices', title: 'Notices & Circulars' },
      { key: 'news', title: 'News Archive' }
    ]
  },
  { key: 'info', title: 'Information', icon: <Document24Regular /> },
  {
    key: 'events',
    title: 'Events & Calendar',
    icon: <Calendar24Regular />,
    children: [
      { key: 'masterCalendar', title: 'Master Calendar' },
      { key: 'holidays', title: 'Holiday Calendar' }
    ]
  },
  {
    key: 'people',
    title: 'People',
    icon: <People24Regular />
  },
  {
    key: 'media',
    title: 'Media Center',
    icon: <Folder24Regular />,
    children: [
      { key: 'photoGallery', title: 'Photo Gallery' },
      { key: 'videoLibrary', title: 'Video Library' }],
  },
  {
    key: 'policies',
    title: 'Policies & Knowledge',
    icon: <Document24Regular />
  },
  { key: 'surveys', title: 'Surveys & Feedback', icon: <ClipboardTask24Regular /> },
  {
    key: 'admin',
    title: 'Administration',
    icon: <Settings24Regular />
  }
];

const quickLinks = [
  { title: 'Announcements', icon: <MegaphoneRegular />, color: '#F59E0B' },
  { title: 'Events', icon: <Calendar24Regular />, color: '#3B82F6' },
  { title: 'Holidays', icon: <AirplaneRegular />, color: '#10B981' },
  { title: 'Policies', icon: <Document24Regular />, color: '#8B5CF6' },
  { title: 'Directory', icon: <PeopleRegular />, color: '#EC4899' },
  { title: 'Gallery', icon: <ImageRegular />, color: '#0EA5E9' },
  { title: 'Surveys', icon: <ClipboardTaskRegular />, color: '#F97316' },
  { title: 'FAQ', icon: <QuestionCircleRegular />, color: '#64748B' }
];

const SfDemo: React.FC<ISfDemoProps> = (props) => {

  /* ---------- STATE ---------- */
  const [activeMenu, setActiveMenu] = React.useState<string>('home');
  const [expandedMenu, setExpandedMenu] = React.useState<string | null>(null);

  /* ---------- CONTENT ---------- */
  const renderContent = () => {
    switch (activeMenu) {
      case 'home':
        return (
          <>
            <div className={styles.announcementBar}>
              Announcements | Q4Business Update – New product ranges launched and delivery coverage expanded across regions.
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

      case 'companyOverview':
        return <h2>🏢 Company Overview</h2>;

      case 'ourJourney':
        return <h2>🚀 Our Journey</h2>;

      case 'leadership':
        return <h2>👔 Leadership Messages</h2>;

      case 'notices':
        return <h2>📢 Notices & Circulars</h2>;

      case 'news':
        return <h2>📰 News Archive</h2>;

      case 'masterCalendar':
        return <h2>📅 Master Calendar</h2>;

      case 'holidays':
        return <h2>🏖 Holiday List</h2>;

      case 'people':
        return <h2>👥 People Directory</h2>;

      case 'media':
        return <h2>🖼 Media Center</h2>;

      case 'policies':
        return <h2>📄 Policies & Knowledge</h2>;

      case 'admin':
        return <h2>⚙️ Administration</h2>;

      default:
        return null; 
    }
  };

  return (
    <div className={styles.appShell}>

      {/* ---------- HEADER ---------- */}
      <header className={styles.headerBar}>
        <div className={styles.headerLeft}>
          <span className={styles.hamburger}>☰</span>
          <div className={styles.headerLogo}>
            <span className={styles.logoBox}>SF</span>
            <span className={styles.logoText}>Service Foods</span>
          </div>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.iconBtn}>
            <Alert24Regular />
            <span className={styles.badge}>3</span>
          </div>
          <div className={styles.iconBtn}><Grid24Regular /></div>
          <div className={styles.iconBtn}><WeatherMoon24Regular /></div>
          <div className={styles.avatar}>
            {props.userDisplayName?.charAt(0)}
          </div>
        </div>

      </header>

      {/* ---------- BODY ---------- */}
      <div className={styles.layout}>

        {/* ---------- SIDEBAR ---------- */}
        <aside className={styles.sideNav}>
          <nav className={styles.menu}>
            {menuItems.map(item => {
              const isExpanded = expandedMenu === item.key;

              return (
                <div key={item.key}>
                  <div
                    className={`${styles.menuItem} ${activeMenu === item.key ? styles.active : ''
                      }`}
                    onClick={() => {
                      if (item.children) {
                        setExpandedMenu(isExpanded ? null : item.key);
                      } else {
                        setActiveMenu(item.key);
                        setExpandedMenu(null);
                      }
                    }}
                  >
                    <div className={styles.menuLeft}>
                      <span className={styles.menuIcon}>{item.icon}</span>
                      <span className={styles.menuText}>{item.title}</span>
                    </div>

                    {item.children && (
                      <span className={`${styles.chevron} ${isExpanded ? styles.rotate : ''}`}>
                        ›
                      </span>
                    )}
                  </div>

                  {item.children && isExpanded && (
                    <div className={styles.subMenu}>
                      {item.children.map(sub => (
                        <div
                          key={sub.key}
                          className={`${styles.subMenuItem} ${activeMenu === sub.key ? styles.activeSub : ''
                            }`}
                          onClick={() => setActiveMenu(sub.key)}
                        >
                          {sub.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* ---------- CONTENT ---------- */}
        <main className={styles.content}>
          {renderContent()}
        </main>

      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>

          {/* Brand */}
          <div className={styles.footerCol}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>SF</span>
              <h4>Service Foods</h4>
            </div>
            <p>
              Your corporate intranet portal for seamless communication
              and collaboration.
            </p>

            <div className={styles.socialIcons}>
              <span>f</span>
              <span>𝕏</span>
              <span>in</span>
              <span>◎</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h5>Quick Links</h5>
            <ul>
              <li>About Us</li>
              <li>News & Updates</li>
              <li>Events</li>
              <li>Employee Directory</li>
              <li>Policies</li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.footerCol}>
            <h5>Resources</h5>
            <ul>
              <li>FAQs</li>
              <li>Knowledge Base</li>
              <li>Submit Feedback</li>
              <li>Quick Links</li>
              <li>Video Library</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerCol}>
            <h5>Contact</h5>
            <ul className={styles.contactList}>
              <li>📍 123 Business Avenue<br />New York, NY 10001</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉ info@samplework.com</li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
};


export default SfDemo;
