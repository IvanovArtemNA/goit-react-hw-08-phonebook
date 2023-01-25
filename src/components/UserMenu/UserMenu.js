import styles from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userWrapper}>
      <h2 className={styles.username}>
        {user.name} ({user.email})
      </h2>
      <button
        className={styles.logoutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
