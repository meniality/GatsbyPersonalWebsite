import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header style={styles.header}>
    <div style={styles.div}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={styles.text}
        >
          Patrick Hoehn
        </Link>
      </h1>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={styles.text}
        >
          Software Engineer
        </Link>
      </h2>
    </div>
  </header>
)

const styles = {
  header: {
    backgroundColor: 'rgba(118, 121, 125, 0.55)',
    marginBottom: `1.45rem`
  },
  div: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`
  },
  text: {
    color: `white`,
    textDecoration: `none`
  }
}
export default Header
