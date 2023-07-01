// Write your code here.
import './index.css'

const CardItem = props => {
  const {bannerDetails} = props
  const {title, description, imgUrl, className} = bannerDetails
  return (
    <li className={className}>
      <div className="banner-details">
        <h1 className="headerStyle">{title}</h1>
        <p className="description">{description}</p>
        <img className="logo" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
