import Link from "next/link";

const Login = () => {
    return (
        <main>
            <h1>Login Page</h1>
            <Link href='/'>Go to Home</Link>
            <br /><br />
            {/* <Link href='/login/loginstudent'> Login Student</Link>
            <br /><br />
            <Link href='/login/loginteacher'> Login Teacher</Link> */}
        </main>
    )
}
export default Login;