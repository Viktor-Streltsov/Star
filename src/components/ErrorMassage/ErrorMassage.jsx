import Uivideo from '../UI/Uivideo/Uivideo';
import video from './video/star.webm';

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
   return (
       <>
            <p className={styles.text}>
                Go to the dark side!!!HE HE HE
            </p>

            <Uivideo src={video} classes={styles.video} playbackrate={1.0}/>
       </>
   )
}

export default ErrorMessage;