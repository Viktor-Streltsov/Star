import { useSelector } from "react-redux";

import PeopleList from "@components/PeoplePage/PeopleList";

import styles from './FavoritesPage.module.css';


const FavoritesPage = () => {
    const storeDate = useSelector(state => state.favoriteReducer);
    const people = Object.entries(storeDate).map(item => {
        return {
            id: item[0],
            ...item[1]
        }
    });

    return (
       <>
        <h1 className="header_text">FavoritesPage</h1>
        {people.length
            ? <PeopleList people={people} />
            : <h2 className={styles.comment}>No data</h2>
        }
       
       </>
   )
}

export default FavoritesPage;