import './App.scss'
import MainContent from './components/organisms/MainContent'
import Sidebar from './components/organisms/Sidebar'

export default function App() {
    return (
        <div className="app">
            <Sidebar />
            <MainContent />
        </div>
    )
}
