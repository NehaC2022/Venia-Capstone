import React from 'react'
import AdventureBanner from '../Component/Banner/AdventureBanner'
import Banner from '../Component/Banner/Banner'
import CategoriesBanner from '../Component/Banner/CategoriesBanner'
import SignatureBanner from '../Component/Banner/SignatureBanner'

export default function Home() {
  return (
    <>
        <Banner/>
        <CategoriesBanner/>
        <SignatureBanner/>
        <AdventureBanner/>
    </>
  )
}
