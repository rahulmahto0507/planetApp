import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="app-container">
      <h1 className="main-heading">PLANETS</h1>
      <ul className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(item => (
            <PlanetItem key={item.id} planetListsDetails={item} />
          ))}
        </Slider>
      </ul>
    </div>
  )
}
export default PlanetSlider
