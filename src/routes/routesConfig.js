import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '@containers/PersonPage';
import FavoritesPage from '@containers/FavoritesPage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMassage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: HomePage
    },
    {
        path: '/people',
        exact: true,
        element: PeoplePage
    },
    {
        path: '/people/:id',
        exact: true,
        element: PersonPage
    },
    {
        path: '/favorites',
        exact: true,
        element: FavoritesPage
    },
    {
        path: '/search',
        exact: true,
        element: SearchPage
    },
    {
        path: '/found',
        exact: true,
        element: NotFoundPage
    },
    {
        path: '/fail',
        exact: true,
        element: ErrorMessage
    },
    {
        path: '*',
        exact: false,
        element: NotFoundPage
    },
];

export default routesConfig