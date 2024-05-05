import {Route, Switch} from 'react-router-dom'

import Contact from './components/Contact'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => {
  ;<div className="app-container">
    <div className="responsive-container">
      <Header />
    </div>
    <div className="app-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
}

export default App
