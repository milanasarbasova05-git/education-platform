import styles from './TariffCard.module.css';

function TariffCard({ name, price, onBook }) {
  return (
    <div className={styles.tariff}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.price}>{price}</p>
      <button className={styles.buyBtn} onClick={() => onBook(name)}>
        Записаться
      </button>
    </div>
  );
}

export { TariffCard };