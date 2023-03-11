import {Component} from 'react'

import './index.css'

class LastBlog extends Component {
  render() {
    const {EachBlog} = this.props
    const {imageUrl, description, name} = EachBlog
    return (
      <li className="list-items">
        <img src={imageUrl} className="image" alt={name} />
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </li>
    )
  }
}
export default LastBlog
