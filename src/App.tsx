
import './App.css'
import BasicProp from './sections/BasicProp'
import ChildrenProp from './sections/ChildrenProp'
import ComplexProp from './sections/ComplexProp'
import Navbar from './components/Navbar'
import ThemeProp from './sections/ThemeToggler'
import RefProp from './sections/RefProp'
import { useTheme } from './sections/ThemeToggler'
import HowToLearn from './sections/HowToLearn'
import Footer from './components/Footer'
import { IconCube, IconPuzzle, IconLayers, IconLink, IconPalette, IconGraduationCap } from './components/Icons'

// App can now safely call useTheme() because ThemeProvider wraps it in main.tsx.
// This was the dark mode bug — useTheme() was previously called OUTSIDE ThemeProvider.
function App() {
  const { isDark } = useTheme();

  const roadmap = [
    { num: "01", label: "Basic Props", desc: "Pass strings, numbers & functions", icon: <IconCube size={16} /> },
    { num: "02", label: "Children Props", desc: "Component composition", icon: <IconPuzzle size={16} /> },
    { num: "03", label: "Complex Props", desc: "Nested objects & callbacks", icon: <IconLayers size={16} /> },
    { num: "04", label: "Ref Props", desc: "DOM access with forwardRef", icon: <IconLink size={16} /> },
    { num: "05", label: "Theme Context", desc: "Global state via Context API", icon: <IconPalette size={16} /> },
    { num: "06", label: "How to Learn", desc: "Make the most of this guide", icon: <IconGraduationCap size={16} /> },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-gray-950 text-gray-100" : "bg-trendy-pink-50 text-trendy-pink-950"}`}>
      
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="px-6 md:px-10 pt-8 pb-4">
        <h1 className={`text-3xl md:text-4xl font-extrabold mb-3 google-sans-rpei text-center leading-tight ${isDark ? "text-trendy-pink-300" : "text-trendy-pink-800"}`}>
          A Comprehensive Guide to React Props
        </h1>
        <p className={`text-center text-base md:text-lg google-sans-rpe max-w-2xl mx-auto leading-relaxed ${isDark ? "text-gray-400" : "text-trendy-pink-600"}`}>
          Learn how to pass data between components using props — the backbone of React's component architecture.
        </p>

        {/* Learning Roadmap */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {roadmap.map((item) => (
            <div
              key={item.num}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                isDark
                  ? "bg-gray-900/80 border-gray-700 text-gray-300 hover:border-gray-500"
                  : "bg-white border-trendy-pink-200 text-trendy-pink-800 hover:border-trendy-pink-400 hover:shadow-sm"
              }`}
            >
              <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${isDark ? "bg-trendy-pink-900/60 text-trendy-pink-300" : "bg-trendy-pink-100 text-trendy-pink-700"}`}>
                {item.icon}
              </span>
              <div>
                <div className="font-bold text-sm leading-tight">{item.label}</div>
                <div className={`text-xs mt-0.5 ${isDark ? "text-gray-500" : "text-trendy-pink-400"}`}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="pb-12">
        <BasicProp />
        <ChildrenProp />
        <ComplexProp />
        <RefProp />
        <ThemeProp />
        <HowToLearn />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
