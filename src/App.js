import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import CartContext from './context/CartContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  onChangeTheme = activeLanguage => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <CartContext.Provider
        value={{isDarkTheme, onChangeTheme: this.changeLanguage}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
