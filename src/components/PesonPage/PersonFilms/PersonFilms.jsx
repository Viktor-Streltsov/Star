import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeConcurerentRequest, changeHTTP } from '@utils/network';

import styles from './PersonFilms.module.css';

const PersonFilms = ({ personFilms }) => {
    const [ filmsName, setFilmsName ] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const getFilms = async () => {
            if (!personFilms?.length) {
                setFilmsName([]);
                return;
            }

            const filmsHTTS = personFilms.map(url => changeHTTP(url));
            const response = await makeConcurerentRequest(filmsHTTS);

            if (isMounted) {
                setFilmsName(response);
            }
        };

        getFilms();

        return () => {
            isMounted = false;
        };
    }, [personFilms]);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName
                    .sort((a, z) => a.episode_id - z.episode_id)
                    .map(({ title, episode_id }) =>
                        <li className={styles.list__item} key={episode_id}>
                            <span className={styles.item__episide}>Episode {episode_id}</span>
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{title}</span>
                        </li>
                    )
                 }
            </ul>
        </div>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;