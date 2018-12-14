import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Links from '../Links'
import pic_normal from '../../pages/Photo1.jpg'
import pic_hover from '../../pages/Photo2.jpg'
import './style.scss'

class Sidebar extends React.Component {
  render() {
    const { location } = this.props
    const {
      name,
      subtitle,
      copyright,
	  links,
    } = this.props.data.site.siteMetadata
	  const menu = []
    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <img
          src={pic_normal}
          onMouseOver={e => (e.currentTarget.src = pic_hover)}
          onMouseOut={e => (e.currentTarget.src = pic_normal)}
          className="sidebar__author-photo"
          width="150"
          height="150"
          alt={name}
        />
        <h1 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">
            {name}
          </Link>
        </h1>
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menu} />
            <Links data={links} />
            <p className="sidebar__copyright">{copyright}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
