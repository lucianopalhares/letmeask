import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'
import {Room} from './pages/Room'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>

      <ToastContainer />
    </BrowserRouter>
  )

}

export default App
