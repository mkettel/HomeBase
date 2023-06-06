import './style.css'
import ReactDOM from 'react-dom'
import Pool from './Pool'
import Homepage from './Homepage'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { Route, Routes, Link } from 'react-router-dom'
import { Link, Route, Switch } from 'wouter';


export default function App() {


  return <>
    <div className="app">
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/pool" component={Pool} />
      </Switch>
    </div>

  </>
}
