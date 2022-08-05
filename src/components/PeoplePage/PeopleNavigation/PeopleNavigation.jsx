import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {
    const hendleChangeNext = () => getResource(nextPage);
    const hendleChangePrev = () => getResource(prevPage);

   return (
       <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`}  className={styles.buttons}>
                <UiButton 
                    text="Rrevious"
                    onClick={hendleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`}  className={styles.buttons}>
                    <UiButton 
                        text="Next"
                        onClick={hendleChangeNext}
                        disabled={!nextPage}
                    />
            </Link>
       </div>
   )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPagea: PropTypes.string,
    counterPage: PropTypes.number
}

export default PeopleNavigation;
