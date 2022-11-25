import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CatalogProvider } from './context/CatalogContext'
import { App } from './App'
import { Home } from './routes/Home'
import { Detail } from './routes/Detail'
// import { Search } from './routes/Search'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <CatalogProvider>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='anime/:id' element={<Detail />} />
                        {/* <Route path='search' element={<Search />} /> */}
                    </Route>
                </Routes>
            </CatalogProvider>
        </BrowserRouter>
    </React.StrictMode>
)
