import './index.css'

const EventItem = props => {
  const {eventDetails, setEventActiveId, isActive} = props
  const {imageUrl, location, name, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setEventActiveId(id)
  }

  return (
    <li className="event-list">
      <button className="event-button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} className={eventImageClassName} alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
