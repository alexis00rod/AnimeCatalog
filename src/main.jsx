import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './components/index'
import { HomePage,CatalogPage,DetailPage,SearchPage } from './pages/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path=':id' element={<DetailPage />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path='catalog' element={<CatalogPage />} />
                    <Route path='catalog/:genre' element={<CatalogPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
