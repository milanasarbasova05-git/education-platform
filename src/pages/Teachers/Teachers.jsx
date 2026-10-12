import { TeacherCard } from '../../components/TeacherCard/TeacherCard.jsx';
import { teachers } from '../../data/teachers.js';
import styles from './Teachers.module.css';

function Teachers({ onSelectTeacher }) {
  return (
    <div className={styles.teachersPage}>
      <h1 className={styles.title}>Наши лекторы</h1>
      <div className={styles.grid}>
        {teachers.map(teacher => (
          <TeacherCard 
            key={teacher.id} 
            teacher={teacher} 
            onClick={onSelectTeacher} 
          />
        ))}
      </div>
    </div>
  );
}

export { Teachers };