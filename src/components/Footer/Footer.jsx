import styles from './Footer.module.css';

function Footer({ onNavigate }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Учебная платформа</h3>
          <p className={styles.footerText}>
            Соединяем компании и образовательные учреждения 
            с профессиональными лекторами.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Разделы</h3>
          <ul className={styles.footerList}>
            <li>
              <button onClick={() => onNavigate('home')} className={styles.footerLink}>
                Главная
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('partners')} className={styles.footerLink}>
                Партнёры
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className={styles.footerLink}>
                О нас
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('teachers')} className={styles.footerLink}>
                Лекторы
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Контакты</h3>
          <ul className={styles.footerList}>
            <li>
              <a href="tel:+70000000000" className={styles.footerLink}>
                +7 (000) 000-00-00
              </a>
            </li>
            <li>
              <a href="mailto:info@eduplatform.ru" className={styles.footerLink}>
                info@educationplatform.ru
              </a>
            </li>
            <li>
              <span className={styles.footerText}>
                г. Казань, ул. Карла Маркса, д. 72
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; 2026 Учебный проект. Все права защищены.
      </div>
    </footer>
  );
}

export { Footer };