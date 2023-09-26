'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
    const router = useRouter()
    return (
        <main>
            <h1>About Page</h1>
            <Link href='/'>Got to Home</Link>
            <br /><br />
            <button onClick={()=>router.push('/about/aboutstudent')}>About Student</button>
            <br /><br />
            <button onClick={()=>router.push('/about/aboutteacher')}>About Teacher</button>
        </main>
    )
}
export default About;