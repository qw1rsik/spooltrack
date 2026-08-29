import Sidebar from './components/sidebar'
import TitleBar from './components/titlebar'

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TitleBar />
        {/* здесь будет основной контент справа */}
      </div>
    </div>
  )
}

export default App;