import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello/css/fontello.css'

const Link = l => (
  <li className="links__list-item">
    <a
      href={l.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={l.icon_name} />
    </a>
  </li>
)

class Links extends React.Component {
  render() {
    const links = this.props.data
    return (
      <div className="links">
        <ul className="links__list">
          <Link {...links[0]} />
          <Link {...links[1]} />
          <Link {...links[2]} />
        </ul>
        <ul className="links__list">
          <Link {...links[3]} />
          <Link {...links[4]} />
        </ul>
        <ul className="links__list">
          <Link {...links[5]} />
        </ul>
      </div>
    )
  }
}

export default Links
