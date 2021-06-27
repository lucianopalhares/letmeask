import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'
import {Room} from './pages/Room'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>

      <ToastContainer />
    </BrowserRouter>
  )

}

export default App
