import { Routes, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '../../components/Header';

import style from './App.module.css';

const App = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Header />
                    <Routes>
                        {routesConfig.map((route, index) => (
                            <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                element={<route.element/>}
                            />
                        ))}
                    </Routes>
            </div>
        </>
    )
}

export default App;
