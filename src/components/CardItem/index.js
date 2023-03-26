import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, imgUrl, description, className} = cardDetails
  return (
    <li className={className}>
      <div className="card">
        <h1 className="card-head">{title}</h1>
        <p className="card-para">{description}</p>
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Card
