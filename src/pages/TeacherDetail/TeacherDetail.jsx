import { TariffCard } from '../../components/TariffCard/TariffCard.jsx';
import styles from './TeacherDetail.module.css';

function TeacherDetail({ teacher, onBack, onBook }) {
  if (!teacher) return null;

  return (
    <div className={styles.detailPage}>
      <button onClick={onBack} className={styles.backBtn}>← Назад к списку</button>

      <div className={styles.profile}>
        <img src={teacher.photo} alt={teacher.name} className={styles.photo} />
        <div className={styles.info}>
          <h1>{teacher.name}</h1>
          <p><strong>Образование:</strong> {teacher.education}</p>
          <p><strong>Стаж:</strong> {teacher.experience}</p>
          <p><strong>Учёная степень:</strong> {teacher.degree}</p>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Преподаваемые дисциплины</h2>
      {teacher.disciplines.map((disc, idx) => (
        <div key={idx} className={styles.discipline}>
          <h3>{disc.title}</h3>
          <p className={styles.desc}>{disc.description}</p>
          <ol className={styles.topics}>
            {disc.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ol>
        </div>
      ))}

      <h2 className={styles.sectionTitle}>Тарифы</h2>
      <div className={styles.tariffs}>
        {teacher.tariffs.map((tariff, idx) => (
          <TariffCard 
            key={idx} 
            name={tariff.name} 
            price={tariff.price}
            onBook={(tariffName) => onBook(teacher.name, tariffName)}
          />
        ))}
      </div>
    </div>
  );
}

export { TeacherDetail };