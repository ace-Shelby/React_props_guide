
import './App.css'
import BasicProp from './sections/BasicProp'
import ChildrenProp from './sections/ChildrenProp'
import ComplexProp from './sections/ComplexProp'
import Navbar from './components/Navbar'
import ThemeProp from './sections/ThemeProp'
import RefProp from './sections/RefProp'

function App() {
  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div>
        <div className="text-4xl font-extrabold mb-4 google-sans-rpei flex justify-center text-center text-trendy-pink-800 italic">#A comprehensive guide to React props</div>
        <BasicProp />
        <ChildrenProp />
        <ComplexProp />
        <RefProp />
        <ThemeProp />
      </div>
    </div>
  )
}

export default App
