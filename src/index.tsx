import {createRoot} from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ThemProvider from './theme/ThemeProvider'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ThemProvider>
            <App />
        </ThemProvider>
    </BrowserRouter>
)