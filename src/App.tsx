import React from 'react'

import { Header } from './components/header/Header'
import { Promo } from './components/promo/Promo'
import { Brands } from './components/brands/Brands'
import { Arrivals } from './components/arrivals/Arrivals'
import { Payday } from './components/payday/Payday'
import { Favourite } from './components/favourite/Favourite'
import { DownloadApp } from './components/download-app/DownloadApp'
import { Subscribe } from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Favourite />
      <DownloadApp />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
