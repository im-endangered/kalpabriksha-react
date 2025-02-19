import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HeaderSeparator from '../components/HeaderSeparator'

const Downloads = () => {
  return (
    <>
      <Navbar />
      <HeaderSeparator 
        title="Download"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Download" }]}
      />
      <Footer />
    </>
  )
}

export default Downloads