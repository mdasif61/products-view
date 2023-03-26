import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Headers/Header'
import Cart from './components/Carts/Cart'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cart></Cart>
    </div>
  )
}

export default App
