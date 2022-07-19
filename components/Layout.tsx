import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import { ReactNode } from 'react'

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Meta title='' keywords='' description=''/>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout