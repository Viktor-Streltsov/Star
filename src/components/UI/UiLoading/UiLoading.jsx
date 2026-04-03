import PropTypes from 'prop-types';
import cn from 'classnames';

import loaderBlack from './img/loader-black.svg';
import loaderWhite from './img/loader-white.svg';
import loaderBlue from './img/loader-blue.svg';

import styles from './UiLoading.module.css';

const UiLoading = ({
    theme = 'white',
    isShadow=true,
    classes
}) => {
    let loaderIcon = loaderBlack;

    switch (theme) {
        case 'black':
            loaderIcon = loaderBlack;
            break;
        case 'blue':
            loaderIcon = loaderBlue;
            break;
        case 'white':
            loaderIcon = loaderWhite;
            break;
        default:
            loaderIcon = loaderBlack;
    }

   return (
       <img
        className={cn(styles.loader, isShadow && styles.shadow, classes)}
        src={loaderIcon}
        alt='Loader'
       />
   )
}

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
}

export default UiLoading;