import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './components/index'
import { HomePage, DetailPage} from './pages/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<HomePage />} />
          <Route path=':page' element={<HomePage />} />
          <Route path='anime/:id' element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
