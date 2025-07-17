import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'

import useTheme from './theme/useTheme'
import { classNames } from './halpers/classNames/classNames'

export default function App() {
    const { theme, toggleTheme} = useTheme();
    const bool = true;
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path='/' element={<MainPageAsync />} />                  
                </Routes>
            </Suspense>
        </div>
        
    )
}