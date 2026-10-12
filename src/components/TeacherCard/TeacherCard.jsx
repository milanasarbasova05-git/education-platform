import styles from './TeacherCard.module.css';

function TeacherCard({ teacher, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(teacher.id)}>
      <div className={styles.photoWrapper}>
        <img src={teacher.photo} alt={teacher.name} className={styles.photo} />
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