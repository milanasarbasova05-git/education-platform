import React, { useState, useEffect, useRef } from 'react';
import styles from './TeacherCard.module.css';

function TeacherCard({ teacher, onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    // Инициализация IntersectionObserver для отслеживания появления карточки в экране
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.3,
      }
    );

    observer.observe(element);

    // Снятие наблюдения при размонтировании компонента
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.card} onClick={() => onClick(teacher.id)}>
      <div className={styles.photoWrapper}>
        {!isLoaded && (
          <div className={styles.placeholder} aria-hidden="true">
            <span className={styles.placeholderIcon}>👤</span>
          </div>
        )}
        {isVisible && (
          <img
            src={teacher.photo}
            alt={teacher.name}
            className={`${styles.photo} ${isLoaded ? styles.photoLoaded : styles.photoHidden}`}
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.name}>{teacher.name}</h3>
        <p className={styles.info}>{teacher.education}</p>
        <p className={styles.info}>Стаж: {teacher.experience}</p>
        <p className={styles.degree}>{teacher.degree}</p>
        <button className={styles.detailsBtn}>Подробнее</button>
      </div>
    </div>
  );
}

export { TeacherCard };
