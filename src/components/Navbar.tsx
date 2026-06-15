
import ThemeProp from '../sections/ThemeProp'
import ChildrenProp from '../sections/ChildrenProp'
import ComplexProp from '../sections/ComplexProp'
import BasicProp from '../sections/BasicProp'
import RefProp from '../sections/RefProp'
function Navbar() {
    const components = [
        {id:1, label: "BasicProp"},
        {id:2, label: "RefProp"},
        {id:3, label: "ComplexProp"},
        {id:4, label: "ChildrenProp"},
        {id:5, label: "ThemeProp"}
    ]

  return (
    <div className="flex flex-row justify-between py-4 px-5 my-4 mx-5 text-lg text-trendy-pink-950 border border-trendy-pink-950 rounded-4xl bg-trendy-pink-200">
        <div className="font-bold text-2xl">LearnProps</div>
        <div className="flex flex-row gap-4">
            {components.map(component => (
                <button key={component.id} className=" rounded-lg p-1 hover:bg-trendy-pink-500 cursor-pointer hover:text-trendy-pink-50 transition-colors duration-200">
                    {component.label}
                </button>
            ))}
        </div>
    </div>

  )
}

export default Navbar