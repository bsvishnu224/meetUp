import User from '../../context'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]
class Register extends Component {
  render() {
    return (
      <User.Consumer>
        {value => {
          const {
            name,
            errorMsg,
            onChangeName,
            onChangeTopic,
            onSubmitButton,
            status,
          } = value

          const onchangeName = event => {
            onChangeName(event.target.value)
          }

          const onchangeTopic = event => {
            onChangeTopic(event.target.value)
          }

          const onClickButton = event => {
            event.preventDefault()
            const {history} = this.props
            if (name !== '') {
              
              status()
              history.replace('/')
            } else {
              onSubmitButton()
            }
          }

          return (
            <div>
              <Header />
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <h1>Let us join</h1>
              <form>
                <label htmlFor="name">NAME</label>
                <input
                  value={name}
                  id="name"
                  onChange={onchangeName}
                  type="text"
                />
                <label htmlFor="topic">TOPICS</label>
                <select id="topic" onChange={onchangeTopic}>
                  {topicsList.map(each => (
                    <option value={each.id}>{each.displayText}</option>
                  ))}
                </select>
                <button onClick={onClickButton}>Register Now</button>
              </form>
              {errorMsg ? <p>Please enter your name</p> : null}
            </div>
          )
        }}
      </User.Consumer>
    )
  }
}

export default Register
