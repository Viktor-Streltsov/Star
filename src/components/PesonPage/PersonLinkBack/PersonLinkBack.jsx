import { useNavigate } from 'react-router-dom';
import styles from './PersonLinkBack.module.css';
import iconBack from './img/backsvg.svg';

const PersonLinkBack = () => {

    const history = useNavigate();

    const handleGoBack = e => {
        e.preventDefault(0);
        history(-1);
    }
   
    return (
       <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}
       >
            <img className={styles.link__img} src={iconBack} alt='Go Back' />
            <span>Go back</span>
       </a>
   )
}

export default PersonLinkBack;