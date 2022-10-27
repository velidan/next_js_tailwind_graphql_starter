import { useTranslation } from 'react-i18next';
import styles from './UserCard.module.css';

export interface IUserCard {}

const UserCard: React.FC<IUserCard> = () => {
  const { t } = useTranslation();
  return <div className={styles.container}>{t('home.welcome')}</div>;
};

export default UserCard;
