import PropTypes from 'prop-types';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { debounce } from 'lodash';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { AIP_SEARCH } from '@constans/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo/SearchPageInfo';
import Uiinput from '@ui/Uiinput';

import styles from './SearchPage.module.css';


const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = useCallback(async (param) => {
        const res = await getApiResource(AIP_SEARCH+param);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
                return {
                    id,
                    name,
                    img,
                }
            });
            setPeople(peopleList);
            setErrorApi(false);
        }else {
            setErrorApi(true);
        }
    }, [setErrorApi]);

    useEffect(() => {
        getResponse('');
    }, [getResponse]);

    const debounceGetRespouns = useMemo(() => {
        return debounce(value => getResponse(value), 300);
    }, [getResponse]);

    useEffect(() => {
        return () => {
            debounceGetRespouns.cancel();
        };
    }, [debounceGetRespouns]);

    const handleInputChange = (value) => {
        setInputSearchValue(value);
        debounceGetRespouns(value);
    }

   return (
       <>
       
            <h1 className="header_text">Search</h1>
            <Uiinput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input characters's name"
                classes={styles.input__search}
            />
            <SearchPageInfo people={people} />
       
       </>
   )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage);