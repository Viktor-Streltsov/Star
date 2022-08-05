import PropTypes, { string } from 'prop-types';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router';
import React, { useEffect, useState, Suspense } from 'react';

import PersonInfo from '@components/PesonPage/PersonInfo';
import PersonPhoto from '@components/PesonPage/PersonPhoto';
import PersonLinkBack from '@components/PesonPage/PersonLinkBack';

import UiLoading from '@ui/UiLoading';
import { getApiResource } from '@utils/network'
import { getPeopleImage } from '@services/getPeopleData';
import { AIP_PERSON } from '@constans/api';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PesonPage/PersonFilms'))


const PersonPage = ({ setErrorApi }) => {
    const [id] = useParams().id;
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const storeDate = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${AIP_PERSON}/${id}/`);

            storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false);

            setPersonId(id);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Heir Color', data: res.heir_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ])

                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            }else {
                setErrorApi(true);
            }
        })();
    }, []);

   return (
       <>
            <PersonLinkBack />

            <div className={styles.wrapper}>
                <span className={styles.person_name}>{personName}</span>
                    <div className={styles.container}>
                        <PersonPhoto
                            personId={personId}
                            personPhoto={personPhoto}
                            personName={personName}
                            personFavorite={personFavorite}
                            setPersonFavorite={setPersonFavorite}
                        />

                        {personInfo && <PersonInfo personInfo={personInfo} />}

                        {personFilms && (
                            <Suspense fallback={<UiLoading />}>
                                <PersonFilms personFilms={personFilms} />
                            </Suspense>
                        )}
                    </div>
            </div>
       </>
   )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);