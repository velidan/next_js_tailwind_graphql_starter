import styles from './UserCard.module.css';

export interface IUserCard {}

const UserCard: React.FC<IUserCard> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default UserCard;
