import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.css'

// const Menubar = () => (
//   <div className={headerStyles.menu}>
//     <Link to="/" className={headerStyles.menulink}>
//       {'Home'}
//     </Link>

//     <Link className={headerStyles.menulink} to="/">
//       {'GitHub'}
//     </Link>
//   </div>
// )

const Header = ({ siteTitle }) => (
  <div className={headerStyles.header}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    {/* TODO: Use <Menubar> when there needs to be a menu */}
  </div>
)

export default Header
