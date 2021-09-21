import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderRegisteredView = () => (
    <div className="registrations-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-image"
        alt="registered"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderNoActiveRegistrationsView = () => (
    <p className="no-active-registration-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisterView = () => (
    <div className="registrations-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="yet-to-register-image"
        alt="yet to register"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yet-to-register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registrations-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registrations-closed-image"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveRegistrationsView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
