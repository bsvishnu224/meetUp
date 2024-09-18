import User from '../../context'
import Header from '../Header'

const Welcome = () => {
  return (
    <User.Consumer>
      {value => {
        const {name, topic} = value
        console.log(name)
        console.log(topic)
        const a = name
        console.log(a)

        return (
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
        )
      }}
    </User.Consumer>
  )
}
export default Welcome
