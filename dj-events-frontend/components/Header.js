import Link from 'next/Link'
import Search from './Search'
import styles from '@/styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href='/'>
                <a>DJ Events</a>
            </Link>
        </div>
        <Search/>
        <nav>
            <ul>
                <li>
                    <Link href='/events'>
                        <a>Events</a>
                    </Link>
                </li>
                <li>
                    <Link href='/events/add'>
                        Add Event
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header