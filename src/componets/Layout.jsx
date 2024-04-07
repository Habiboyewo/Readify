import {Link} from "react-router-dom"

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <div className='sidebar'>
            <Link to = "/dashboard/settings">Settings</Link>
            <Link to = "/dashboard/user">Users</Link>
            <Link to = "/dashboard/admin">Admin</Link>
        </div>
        <div>
            <h1>
                {children}
            </h1>
        </div>
    </div>
  )
}

export default Layout