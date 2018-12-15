import React from 'react'
import { Link } from 'gatsby'
import './style.scss'
import resume from '../../pages/Resume.pdf'

const MenuItem = props => {
  if (props.internal) {
    return (
      <Link
        to={props.path}
        className="menu__list-item-link"
        activeClassName="menu__list-item-link menu__list-item-link--active"
      >
        {props.label}
      </Link>
    )
  }
  let link = props.path
  if (props.label === 'Resume') {
    link = resume
  }
  return (
    <a
      href={link}
      target="_blank"
      className="menu__list-item-link"
    >
      {props.label}
    </a>
  )
}

class Menu extends React.Component {
  render() {
    const menu = this.props.data
    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => (
          <li className="menu__list-item" key={item.label}>
            <MenuItem {...item} />
          </li>
        ))}
      </ul>
    )
    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
