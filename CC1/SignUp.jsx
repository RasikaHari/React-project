import React, { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './HomePage.css';

const Header = ({ setCurrentView }) => (
  <header className="r-header">
    <div className="r-header-logo">Timeza-The meet</div>
    <nav className="r-header-nav">
      <button onClick={() => setCurrentView('schedule')} className="r-nav-button">Schedule Meeting</button>
      <button onClick={() => setCurrentView('view')} className="r-nav-button">View Meetings</button>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="r-footer">
    <p>&copy; 2024 MeetingScheduler. All rights reserved.</p>
    <p>Contact us: <a href="mailto:info@meetingscheduler.com">info@meetingscheduler.com</a></p>
  </footer>
);

const ScheduleMeeting = ({ addMeeting }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("30");
  const [participants, setParticipants] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleScheduleMeeting = () => {
    if (title && date && time && duration && participants) {
      const newMeeting = {
        id: Date.now(),
        title,
        date,
        time,
        duration: parseInt(duration),
        participants: participants.split(',').map(p => p.trim()),
      };
      addMeeting(newMeeting);
      setShowConfirmation(true);
      setTitle("");
      setDate(new Date());
      setTime("");
      setDuration("30");
      setParticipants("");
    }
  };

  return (
    <div id="schedule-meeting" className="r-schedule-meeting">
      <h2>Schedule a Meeting</h2>
      <form className="r-schedule-form">
        <div className="r-form-group">
          <label htmlFor="meeting-title">Meeting Title</label>
          <input
            id="meeting-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="r-input"
          />
        </div>
        <div className="r-form-group">
          <label htmlFor="calendar">Date</label>
          <div className="r-calendar-container">
            <ReactCalendar
              onChange={setDate}
              value={date}
              className="r-calendar-component"
            />
          </div>
        </div>
        <div className="r-form-group">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="r-input"
          />
        </div>
        <div className="r-form-group">
          <label htmlFor="duration">Duration</label>
          <select id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="r-select">
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1.5 hours</option>
            <option value="120">2 hours</option>
          </select>
        </div>
        <div className="r-form-group">
          <label htmlFor="participants">Participants</label>
          <input
            id="participants"
            type="text"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            className="r-input"
          />
        </div>
        <button type="button" onClick={handleScheduleMeeting} className="r-button">Schedule Meeting</button>
      </form>
      {showConfirmation && (
        <div className="r-confirmation-dialog">
          <h3>Meeting Scheduled</h3>
          <p>Your meeting has been successfully scheduled!</p>
          <button onClick={() => setShowConfirmation(false)} className="r-button">OK</button>
        </div>
      )}
    </div>
  );
};

const ViewMeetings = ({ meetings }) => (
  <div id="view-meetings" className="r-view-meetings">
    <h2>Scheduled Meetings</h2>
    {meetings.length === 0 ? (
      <p>No meetings scheduled yet.</p>
    ) : (
      <div className="r-meetings-list">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="r-meeting-card">
            <h3>{meeting.title}</h3>
            <p><strong>Date:</strong> {meeting.date.toDateString()}</p>
            <p><strong>Time:</strong> {meeting.time}</p>
            <p><strong>Duration:</strong> {meeting.duration} minutes</p>
            <p><strong>Participants:</strong> {meeting.participants.join(', ')}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const HomePage = () => {
  const [currentView, setCurrentView] = useState('schedule');
  const [meetings, setMeetings] = useState([]);

  const addMeeting = (newMeeting) => {
    setMeetings([...meetings, newMeeting]);
  };

  const renderView = () => {
    switch (currentView) {
      case 'schedule':
        return <ScheduleMeeting addMeeting={addMeeting} />;
      case 'view':
        return <ViewMeetings meetings={meetings} />;
      default:
        return <ScheduleMeeting addMeeting={addMeeting} />;
    }
  };

  return (
    <div className="r-home-page">
      <aside className="r-sidebar">
        <div className="r-sidebar-logo">Dashboard</div>
        <nav className="r-sidebar-nav">
          <br></br><br></br>
          <a href="#about">About</a>
          <br /><br></br><br></br>
          <a href="#features">Features</a>
          <br /><br></br><br></br>
          <a href="#contact">Contact</a>
          <br /><br></br><br></br>
          <a href="#dashboard">Dashboard</a>
        </nav>
      </aside>
      <main className="r-main-content">
        <Header setCurrentView={setCurrentView} />
        <div className="r-main-image-container">
          <img src="https://prod.wp.cdn.aws.wfu.edu/sites/224/2020/04/Canva-Smiling-girl-looking-at-laptop-making-notes-sitting-at-cafe-scaled.jpg" alt="Main Visual" className="r-main-image" />
          <div className="r-main-text-overlay">
            <p className="r-main-text">Online Meeting Scheduler</p>
          </div>
        </div>
        <center><h1>Features</h1></center>
        <section id="features" className="r-features">
          <div className="r-feature-item">
            <img src="https://media.istockphoto.com/id/1278801008/vector/calendar-and-check-mark-vector-icon.jpg?s=170667a&w=0&k=20&c=zSe24yj0zlg0Pv_kMGQdHua1sr3H3zKx1ZQnelELh4g=" alt="Easy Scheduling" className="r-feature-image" />
            <h3>Easy Scheduling</h3>
            <p>Quickly schedule meetings with our intuitive interface.</p>
          </div>
          <div className="r-feature-item">
            {/* <h2>Features</h2> */}
            <img src="https://static.vecteezy.com/system/resources/previews/015/078/734/original/3d-notification-bell-icon-with-push-bubble-speech-notification-icon-or-message-reminder-concept-icon-png.png" alt="Automated Reminders" className="r-feature-image" />
            <h3>Automated Reminders</h3>
            <p>Get automated reminders and notifications for your meetings.</p>
          </div>
          <div className="r-feature-item">
            <img src="https://i.pinimg.com/736x/64/f2/8d/64f28d0ea2f1473815afab597c510ab2.jpg" alt="Integration" className="r-feature-image1" />
            <h3>Integration</h3>
            <p>Integrate with your favorite calendar applications seamlessly.</p>
          </div>
        </section>
        {renderView()}
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
