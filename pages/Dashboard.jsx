import React from 'react'
import AllCharts from '../components/dashboard/AllCharts'
import ProductsLayout from '../components/dashboard/ProductsLayout.jsx'
import TotalCard from '../components/dashboard/TotalCard'

export default function Dashboard() {
  return (
    <div className='p-5'>
        <TotalCard/>
        <AllCharts/>
        <ProductsLayout/>

    </div>
  )
}
