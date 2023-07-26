import './style.css'
import Pool from './Pool'
import Homepage from './Homepage'
import Yard from './Yard'
import Contact from './Contact'
import { Link, Route, Switch } from 'wouter';


export default function App() {


  return <>
    <div className="app">
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/pool" component={Pool} />
        <Route path="/yard" component={Yard} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>

  </>
}
