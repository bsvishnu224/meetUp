import Header from '../Header'
import {Link} from 'react-router-dom'
import User from '../../context'

const Home = () => {
  return (
    <User.Consumer>
      {value => {
        const {name, topic, isRegisterd} = value
        return isRegisterd ? (
          <div>
            <Header />
            <div>
              <h1>Hello {name}</h1>
              <p>Welcome to {topic}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          </div>
        ) : (
          <div>
            <Header />
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button>Register</button>
              </Link>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          </div>
        )
      }}
    </User.Consumer>
  )
}

export default Home
