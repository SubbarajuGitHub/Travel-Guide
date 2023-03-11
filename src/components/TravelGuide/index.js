import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LastBlog from '../LastBlog'

import './index.css'

class TravelGuide extends Component {
  state = {packagesList: [], isLoading: true}

  componentDidMount() {
    this.getTravelBlogs()
  }

  getTravelBlogs = async () => {
    const {packagesList} = this.state

    const url = 'https://apis.ccbp.in/tg/packages'
    const data = await fetch(url)
    const dataJson = await data.json()
    const packagesData = dataJson.packages
    const convertedData = packagesData.map(Each => ({
      description: Each.description,
      id: Each.id,
      imageUrl: Each.image_url,
      name: Each.name,
    }))
    this.setState({packagesList: convertedData, isLoading: false})
  }

  render() {
    const {packagesList, isLoading} = this.state
    return (
      <div className="main-bg">
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </div>
        ) : (
          <>
            <h1 className="heading">Travel Guide</h1>
            <ul className="ul-list">
              {packagesList.map(EachBlog => (
                <LastBlog EachBlog={EachBlog} key={EachBlog.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TravelGuide
