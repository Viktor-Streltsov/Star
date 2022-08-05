import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Uivideo.module.css';
import { useEffect, useRef } from 'react';

const Uivideo = ({ src, classes, playbackrate=1.0, }) => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.playbackrate = playbackrate;
    }, []);

   return (
       <video loop autoPlay muted ref={videoRef} className={cn(styles.video, classes)}>
            <source src={src} />
       </video>
   )
}

Uivideo.propTypes = {
    src: PropTypes.string,
    playbackrate: PropTypes.number,
    classes: PropTypes.string
}

export default Uivideo;