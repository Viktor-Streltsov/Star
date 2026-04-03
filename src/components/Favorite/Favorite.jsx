import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg';

import styles from './Favorite.module.css';


const Favorite = () => {
    const storeDate = useSelector(state => state.favoriteReducer);
    const favoritesCount = Object.keys(storeDate).length;
    const count = favoritesCount.toString().length > 2 ? '...' : favoritesCount;

   return (
       <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="favorite" />
            </Link>
       </div>
   )
}

export default Favorite;