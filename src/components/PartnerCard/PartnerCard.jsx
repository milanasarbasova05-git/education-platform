import { ArrowIcon } from './ArrowIcon.jsx';
import styles from './PartnerCard.module.css';

function PartnerCard({ partner }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={partner.logo} alt={partner.name} className={styles.logo} />
        <a 
          href={partner.link} 
          target="_blank" 
          rel="noreferrer" 
          className={styles.arrowLink}
          title={`Перейти на сайт ${partner.name}`}
        >
          <ArrowIcon className={styles.arrowIcon} />
        </a>
      </div>
      <p className={styles.description}>{partner.description}</p>
    </div>
  );
}

export { PartnerCard };