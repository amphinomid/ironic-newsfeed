import React from "react"
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <header className={headerStyles.header}>
          ironic newsfeed -- don't stop scrolling!
        </header>
        {props.children}
      </div>
      <footer>
        <p style={{ fontSize: `0.75rem` }}>
          <b>Built by Anne Li, © 2020</b>
        </p>
      </footer>
    </div>
  )
}

export default Layout
