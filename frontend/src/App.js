import React, { Component } from 'react';
import './App.css';
import AuthPage from './pages/Auth'
import EventsPage from './pages/Events'
import BookingsPage from './pages/Bookings'
import { BrowserRouter,Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Redirect from="/" to="/auth" exact/>
      <Route path="/auth" component={AuthPage}/>
      <Route path="/events" component={EventsPage}/>
      <Route path="/bookings" component={BookingsPage}/>
      </BrowserRouter>
    )
  }
}
export default App;