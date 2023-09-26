'use client'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [username, setUsername] = useState('Sumair')
  const [btnStyle,setbtnStyle] = useState({color:'orange'})
  const router = useRouter();
  const userState = () => {
    setUsername('Sumair ul haq')
  }

  const navigate = (e) => {
    router.push(e)
  }

  const DummyCom = () => {
    return (
      <main>
        <h1>Dummy Component</h1>
      </main>
    )
  }
  return (
    <main>
      <h1>Hello {username}</h1>
      {/* <User name='Sumair' />   */}

      {/* <button onClick={()=>alert('Hello Sumair')}>Click Me</button>
        <button onClick={apple}>Click Me</button>
        <button onClick={()=>apple('Fruit hai')}>Click Me</button> */}
      <button onClick={userState}>State change</button>
      <DummyCom />
      <br />
      <br />

      <Link href='/login'>Go to login page</Link>
      <br />
      <br />
      <button onClick={() => navigate('/login')}>Go to login page</button>
      <br />
      <br />
      <button onClick={() => navigate('/about')}>Go to about page</button>

      <br />
      <br />
      <Link href='/products'>Products</Link>

      <br />
      <br />
      <Link href='/productserverside'>Products Show Server Side</Link>
      <br />
      <br />

      <h2 style={{ color: "brown" }}>Styling Practice</h2>

      <br />
      <br />

      <h5 style={btnStyle}>Styling Change</h5>
      <button onClick={()=>setbtnStyle({color:'red'})}>Change Style</button>
    </main>
  )
}

// const User = (props) =>
// {
//   return(
//     <div>
//       <h1>Hello I am {props.name}</h1>
//     </div>
//   )
// }