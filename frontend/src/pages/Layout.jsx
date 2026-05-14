import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
        <main>
            <p>Layout</p>
            <div>
                <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default Layout