
// Navbar.tsx — Top navigation bar with smooth-scroll links to each section.
// This component demonstrates: using arrays to render lists, onClick handlers, and consuming theme context.
// Responsive: collapses to a hamburger menu on mobile via a toggle state.

import { useState } from 'react'
import { useTheme } from '../sections/ThemeToggler'
import { IconReact, IconGraduationCap } from './Icons'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Each component maps to a section ID in the page (e.g., id="basic-prop")
    const components = [
        { id: "basic-prop", label: "Basic" },
        { id: "children-prop", label: "Children" },
        { id: "complex-prop", label: "Complex" },
        { id: "ref-prop", label: "Ref" },
        { id: "theme-prop", label: "Theme" },
        { id: "how-to-learn", label: "Learn" }
    ]

    // Smooth-scroll to the section when a nav button is clicked
    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMenuOpen(false); // close mobile menu after clicking
    }

    // Read the current theme so the navbar can adapt its colors
    const { isDark } = useTheme();

    return (
        <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
            isDark
                ? "bg-gray-950/80 text-gray-100 border-gray-800"
                : "bg-trendy-pink-50/80 text-trendy-pink-950 border-trendy-pink-200"
        }`}>
            {/* Top bar: logo + hamburger */}
            <div className="flex flex-row justify-between items-center py-3 px-4 sm:px-6">
                <div className="flex items-center gap-2 font-bold text-lg sm:text-xl google-sans-rpe">
                    <IconReact className={isDark ? "text-trendy-pink-400" : "text-trendy-pink-700"} size={22} />
                    <span>LearnProps</span>
                </div>

                {/* Desktop nav links — hidden on mobile */}
                <div className="hidden md:flex flex-row gap-1">
                    {components.map((component, i) => (
                        <button
                            key={component.id}
                            id={`nav-${component.id}`}
                            onClick={() => scrollToSection(component.id)}
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200 text-sm font-medium google-sans-rpe ${
                                isDark
                                    ? "hover:bg-gray-800 hover:text-trendy-pink-300"
                                    : "hover:bg-trendy-pink-100 hover:text-trendy-pink-700"
                            }`}
                        >
                            {i === components.length - 1 && <IconGraduationCap size={14} />}
                            {component.label}
                        </button>
                    ))}
                </div>

                {/* Mobile hamburger button — visible only on small screens */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`md:hidden flex flex-col gap-1 p-2 rounded-lg cursor-pointer transition-colors ${
                        isDark ? "hover:bg-gray-800" : "hover:bg-trendy-pink-100"
                    }`}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`block w-5 h-0.5 rounded transition-all duration-200 ${isDark ? "bg-gray-300" : "bg-trendy-pink-800"} ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`block w-5 h-0.5 rounded transition-all duration-200 ${isDark ? "bg-gray-300" : "bg-trendy-pink-800"} ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 rounded transition-all duration-200 ${isDark ? "bg-gray-300" : "bg-trendy-pink-800"} ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className={`md:hidden flex flex-col gap-1 px-4 pb-3 border-t ${
                    isDark ? "border-gray-800" : "border-trendy-pink-200"
                }`}>
                    {components.map((component, i) => (
                        <button
                            key={component.id}
                            onClick={() => scrollToSection(component.id)}
                            className={`flex items-center gap-2 rounded-lg px-3 py-2.5 cursor-pointer transition-all duration-200 text-sm font-medium google-sans-rpe text-left ${
                                isDark
                                    ? "hover:bg-gray-800 hover:text-trendy-pink-300"
                                    : "hover:bg-trendy-pink-100 hover:text-trendy-pink-700"
                            }`}
                        >
                            {i === components.length - 1 && <IconGraduationCap size={14} />}
                            {component.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar