
import styles from './Home.module.css';

function Home({ onNavigate }) {
  return (
    <div className={styles.home}>
      {/* Hero-блок */}
      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <img  
            src="/тетя.jpg"  
            alt="Лектор" 
            className={styles.heroPhoto}
          />
        </div>
        <div className={styles.heroText}>
          <h2>Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.</h2>
          <button onClick={() => onNavigate('teachers')} className={styles.findBtn}>
            НАЙТИ ЛЕКТОРА
          </button>
        </div>
      </div>

      {/* Блок "О нас" снизу */}
      <section id="about" className={styles.aboutSection}>
        <h2 className={styles.aboutTitle}>О нас</h2>
        <div className={styles.aboutContent}>
          <p>
            Наша учебная платформа соединяет компании, образовательные учреждения и НКО
            с профессиональными лекторами, спикерами и тренерами.
          </p>
          <p>
            Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить экспертов,
            которые не просто делятся знаниями, но и вдохновляют аудиторию.
          </p>
        </div>
      </section>
    </div>
  );
}

export { Home };