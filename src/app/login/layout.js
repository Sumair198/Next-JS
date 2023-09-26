'use client'
import Link from "next/link"
import './login.css'
import { usePathname } from "next/navigation"
const Layout = ({children}) => {
    const pathname = usePathname()
    
    return (
        <div>
            {pathname !== '/login/loginteacher'? 
             <ul className="login-menu">
             <li>
                 <Link href='/login'>Login Main </Link>
             </li>
             <li>
                 <Link href='/login/loginstudent'>Login Student </Link>
             </li>
             <li>
                 <Link href='/login/loginteacher'>Login Teacher </Link>
             </li>
         </ul>
          :null}
           

            {children}
        </div>
    )
}
export default Layout