import { useLocation } from 'react-router-dom';
import imgStar from './imgs/found.jpg';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
        let location = useLocation();
   return (
       <>
            <img className={styles.img} src={imgStar} alt="Not Found" />
            <p className={styles.text}>Not found {location.pathname}</p>
       </>
   )
}


export default NotFoundPage;