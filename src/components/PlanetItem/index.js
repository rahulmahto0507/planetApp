import './index.css'

const PlanetItem = props => {
  const {planetListsDetails} = props
  const {name, imageUrl, description} = planetListsDetails
  return (
    <li className="list">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default PlanetItem
