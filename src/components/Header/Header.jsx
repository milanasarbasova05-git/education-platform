import styles from './Header.module.css';

function Header({ onNavigate, currentPage, onBook }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          onClick={() => onNavigate('home')}
          className={`${styles.navBtn} ${currentPage === 'home' ? styles.navBtnActive : ''}`}
        >
          Главная
        </button>

        <button
          onClick={() => onNavigate('partners')}
          className={`${styles.navBtn} ${currentPage === 'partners' ? styles.navBtnActive : ''}`}
        >
          Партнеры
        </button>

        <a
          href="#about"
          className={styles.navBtn}
          onClick={() => onNavigate('home')}
        >
          О нас
        </a>

        <button
          onClick={() => onNavigate('teachers')}
          className={`${styles.navBtn} ${currentPage === 'teachers' ? styles.navBtnActive : ''}`}
        >
          Лекторы
        </button>
      </nav>

      <button
        onClick={onBook}
        className={styles.bookBtn}
      >
        Записаться
      </button>
    </header>
  );
}

export { Header };