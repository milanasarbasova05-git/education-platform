import { useState } from 'react';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Teachers } from './pages/Teachers/Teachers.jsx';
import { TeacherDetail } from './pages/TeacherDetail/TeacherDetail.jsx';
import { About } from './pages/About/About.jsx';
import { Partners } from './pages/Partners/Partners.jsx';
import { BookingModal } from './components/Booking/Booking.jsx';
import { teachers } from './data/teachers.js';
import styles from './styles/App.module.css';

function App() {
  const [page, setPage] = useState('home');
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  const handleNavigate = (target) => {
    setPage(target);
    setSelectedTeacherId(null);
    window.scrollTo(0, 0);
  };

  const handleSelectTeacher = (id) => {
    setSelectedTeacherId(id);
    setPage('teacherDetail');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setPage('teachers');
    setSelectedTeacherId(null);
    window.scrollTo(0, 0);
  };

  const handleBook = (teacherName, tariffName) => {
    setBookingData({ teacherName, tariffName });
  };

  const handleOpenBooking = () => {
    setBookingData({ teacherName: null, tariffName: null });
  };

  const handleCloseBooking = () => {
    setBookingData(null);
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'partners':
        return <Partners />;
      case 'about':
        return <About />;
      case 'teachers':
        return <Teachers onSelectTeacher={handleSelectTeacher} />;
      case 'teacherDetail':
        const teacher = teachers.find(t => t.id === selectedTeacherId);
        return <TeacherDetail teacher={teacher} onBack={handleBack} onBook={handleBook} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={styles.app}>
      <Header 
        onNavigate={handleNavigate} 
        currentPage={page} 
        onBook={handleOpenBooking} 
      />
      <main className={styles.main}>
        {renderPage()}
      </main>

      {bookingData && (
        <BookingModal 
          teacherName={bookingData.teacherName}
          tariffName={bookingData.tariffName}
          onClose={handleCloseBooking}
        />
      )}

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;