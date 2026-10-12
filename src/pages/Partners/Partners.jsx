import { PartnerCard } from '../../components/PartnerCard/PartnerCard.jsx';
import styles from './Partners.module.css';

const partnersData = [
  {
    id: 1,
    name: "ICL",
    logo: "/исл.jpg",
    link: "https://icl.ru/",
    description: "ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг: проекты, решения и продукты. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС)."
  },
  {
    id: 2,
    name: "Татнефть",
    logo: "/татнефть.jpg",
    link: "https://www.tatneft.ru/",
    description: "«Татнефть» — одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур."
  }
];

function Partners() {
  return (
    <div className={styles.partnersPage}>
      <h1 className={styles.title}>Партнеры</h1>
      <div className={styles.grid}>
        {partnersData.map(partner => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}

export { Partners };