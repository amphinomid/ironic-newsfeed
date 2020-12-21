import React from "react"
import { Link } from "react-router-dom"
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <header style={{ paddingLeft: `2.5px`, display: `flex`, flexDirection: `row` }}>
          <h1 style={{ marginBottom: `37.5px` }}>
            <Link to="/" style={{ textDecoration: `none` }}>ironic newsfeed</Link>
          </h1>
          <h1 style={{ marginBottom: `37.5px`, paddingLeft: `2.5px`, flexGrow: `1`, textAlign: `right` }}>
            <a href="https://github.com/fibanneacci/ironic-newsfeed" target="_blank" rel="noreferrer">
              built
            </a>{` `}
            by{` `}
            <a href="https://anli.io" target="_blank" rel="noreferrer">
              anne li
            </a>
          </h1>
        </header>
        {props.children}
      </div>
      <footer>
        <p style={{ fontSize: `1rem`, textAlign: `center` }}>
          <b>hi! i unironically hope you're having a good day 🥺</b>
        </p>
      </footer>
    </div>
  )
}

export default Layout
