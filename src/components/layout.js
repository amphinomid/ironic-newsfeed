import React from "react"
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <header>
          <h1 style={{ paddingLeft: `2.5px` }}>ironic newsfeed</h1>
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
