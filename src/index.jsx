import './style.css'
import ReactDOM from 'react-dom/client'
import { useKeyboardControls, Sky } from '@react-three/drei'
import Pool from './Pool'
import Homepage from './Homepage'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Router, Route, Switch, Link } from 'wouter';
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(


    <Router>
      <App />
    </Router>
)
