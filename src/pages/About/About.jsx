import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>О нас</h1>
      <div className={styles.content}>
        <p>
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО
          с профессиональными лекторами, спикерами и тренерами.
        </p>
        <p>
          Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить экспертов,
          которые не просто делятся знаниями, но и вдохновляют аудиторию.
        </p>
      </div>
    </div>
  );
}

export { About };