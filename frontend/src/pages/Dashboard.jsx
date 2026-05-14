import { useEffect, useState } from 'react'
import { dummyAdminDashboardData, dummyEmployeeDashboardData } from '../assets/assets.jsx'
import Loading from '../components/Loading.jsx'
import EmployeeDashboard from '../components/EmployeeDashboard.jsx'
import AdminDashboard from '../components/AdminDashboard.jsx'

function Dashboard() {
  const [data, setData] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setData(dummyAdminDashboardData)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  },[])

  if(loading) return <p><Loading/></p>
  if(!data) return <p>Failed to load data</p>

  if(data.role === "ADMIN"){
    return <AdminDashboard  data={data}/>
  }
  else return <EmployeeDashboard data={data}/>
}

export default Dashboard