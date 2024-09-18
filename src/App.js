import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Welcome from './components/Welcome'
import User from './context'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {
    name: '',
    isRegisterd: false,
    errorMsg: false,
    topic: 'ARTS_AND_CULTURE',
  }
  onChangeName = value => {
    this.setState({name: value})
  }
  onChangeTopic = value => {
    this.setState({topic: value})
  }
  onSubmitButton = () => {
    this.setState({errorMsg: true})
  }
  status=()=>{
    this.setState({isRegisterd:true})
  }

  render() {
    const {name, topic, errorMsg, isRegisterd} = this.state
    console.log(name)
    console.log(topic)
    return (
      <User.Provider
        value={{
          name,
          isRegisterd,
          topic,
          errorMsg,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          onSubmitButton: this.onSubmitButton,
          status: this.status,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/welcome" component={Welcome} />
          <Route component={NotFound} />
        </Switch>
      </User.Provider>
    )
  }
}

export default App
