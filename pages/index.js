import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Home() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing your order")
        router.push('/product')
    }
    return (
        <div>
            <h1>Home page</h1>
            <Link href={"/blog"}><a>Blog</a></Link>
            <Link href={"/users"}><a>Users</a></Link>
            <Link href={"/posts"}><a>Posts</a></Link>
            <button onClick={handleClick}>Place order</button>
        </div>
    )
}
