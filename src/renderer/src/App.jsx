import Sidebar from './components/SideBar'
import TitleBar from './components/TitleBar'
import Home from './pages/Home'

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TitleBar />
        <Home />
      </div>
    </div>
  )
}

export default App;