// HowToLearn.tsx — A guide section teaching beginners how to use this resource effectively.
// This is NOT about a React concept — it's about the learning process itself.

import { useTheme } from './ThemeToggler'
import { IconGitFork, IconBookOpen, IconWrench, IconHammer, IconSearch, IconPencil, IconRocket, IconFolder, IconLightbulb, IconGraduationCap } from '../components/Icons'
import type { ReactNode } from 'react'

function HowToLearn() {
    const { isDark } = useTheme();

    const steps: { icon: ReactNode; title: string; description: string; code?: string; highlight?: string; exercises?: string[] }[] = [
        {
            icon: <IconGitFork size={22} />,
            title: "Fork & Clone the Repo",
            description: "Start by forking this project on GitHub, then clone it locally. This gives you your own copy to experiment with.",
            code: "git clone https://github.com/ace-Shelby/React_props_guide.git\ncd React_props_guide\nnpm install\nnpm run dev"
        },
        {
            icon: <IconBookOpen size={22} />,
            title: "Read the Code Top-to-Bottom",
            description: "Start with main.tsx, then App.tsx, then each section file. Every file has comments explaining what each line does and why.",
            highlight: "Follow the numbered sections (01 through 05) in order — each builds on the previous."
        },
        {
            icon: <IconWrench size={22} />,
            title: "Break Things On Purpose",
            description: "The best way to learn is to experiment! Try these exercises:",
            exercises: [
                "Remove a required prop and see the TypeScript error",
                "Add a new color variant to the Button component",
                "Create a new Card with a custom color",
                "Pass a different function as an onClick prop",
                "Try using useTheme() outside ThemeProvider — see what happens!"
            ]
        },
        {
            icon: <IconHammer size={22} />,
            title: "Build Your Own Component",
            description: "Create a new component in the components/ folder. Start simple:",
            exercises: [
                "A Badge component with label and color props",
                "An Alert component with type, message, and onDismiss props",
                "A Tooltip that uses children prop to wrap any element"
            ]
        },
        {
            icon: <IconSearch size={22} />,
            title: "Use Browser DevTools",
            description: "Install the React Developer Tools browser extension. It lets you inspect the component tree and see the actual prop values being passed in real time."
        },
        {
            icon: <IconPencil size={22} />,
            title: "Take Notes & Revisit",
            description: "Write down patterns you notice. Come back after a few days and try to rebuild a section from memory. If you get stuck, check the code — that's learning!"
        }
    ];

    return (
        <section id="how-to-learn" className="scroll-mt-16">
            <div className={`section-card flex flex-col gap-5 mx-3 sm:mx-6 md:mx-10 my-3 sm:my-4 border p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors duration-300 google-sans-rpe ${
                isDark
                    ? "bg-gray-900 border-gray-700"
                    : "bg-trendy-pink-200 border-trendy-pink-950"
            }`}>
                {/* Section Header */}
                <div className="flex items-center gap-3">
                    <span className={`concept-badge ${isDark ? "bg-emerald-800 text-emerald-200" : "bg-emerald-700 text-white"}`}>
                        <IconGraduationCap size={14} />
                    </span>
                    <h2 className={`font-bold text-2xl ${isDark ? "text-emerald-300" : "text-trendy-pink-950"}`}>
                        How to Learn from This Resource
                    </h2>
                </div>

                <p className={`text-[0.95rem] leading-relaxed ${isDark ? "text-gray-300" : "text-trendy-pink-950"}`}>
                    This project is designed to be <strong>learned by doing</strong>. Don't just read — fork it, break it, rebuild it. Here's a step-by-step learning path:
                </p>

                {/* Steps */}
                <div className="flex flex-col gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border transition-colors duration-300 ${
                                isDark
                                    ? "bg-gray-800/80 border-gray-700"
                                    : "bg-white/70 border-trendy-pink-300"
                            }`}
                        >
                            {/* Step icon + number */}
                            <div className="flex sm:flex-col items-center sm:items-center gap-2 pt-0.5">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${
                                    isDark
                                        ? "bg-emerald-900/60 text-emerald-400"
                                        : "bg-emerald-100 text-emerald-700"
                                }`}>
                                    {step.icon}
                                </div>
                                <span className={`text-[0.65rem] font-bold uppercase tracking-wider ${isDark ? "text-gray-500" : "text-trendy-pink-400"}`}>
                                    Step {index + 1}
                                </span>
                            </div>

                            {/* Step content */}
                            <div className="flex-1 flex flex-col gap-2.5">
                                <h3 className={`font-bold text-[1.05rem] leading-tight ${isDark ? "text-white" : "text-trendy-pink-900"}`}>
                                    {step.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                    {step.description}
                                </p>

                                {/* Code block (if present) */}
                                {step.code && (
                                    <div className={`code-snippet text-xs ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
                                        {step.code}
                                    </div>
                                )}

                                {/* Highlight tip (if present) */}
                                {step.highlight && (
                                    <div className={`flex items-start gap-2 text-sm px-3 py-2.5 rounded-lg border-l-4 ${
                                        isDark
                                            ? "bg-blue-950/50 border-blue-500 text-blue-300"
                                            : "bg-blue-50 border-blue-400 text-blue-800"
                                    }`}>
                                        <IconLightbulb size={16} className="shrink-0 mt-0.5" />
                                        <span>{step.highlight}</span>
                                    </div>
                                )}

                                {/* Exercise list (if present) */}
                                {step.exercises && (
                                    <ul className={`text-sm list-none flex flex-col gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                        {step.exercises.map((exercise, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className={`text-xs mt-0.5 min-w-[1.5rem] text-center py-0.5 rounded font-mono font-bold ${
                                                    isDark
                                                        ? "bg-emerald-900 text-emerald-300"
                                                        : "bg-emerald-100 text-emerald-700"
                                                }`}>
                                                    {i + 1}
                                                </span>
                                                <span className="leading-snug">{exercise}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* File Structure Guide */}
                <div className={`p-5 rounded-2xl border transition-colors duration-300 ${
                    isDark
                        ? "bg-gray-800/80 border-gray-700"
                        : "bg-white/70 border-trendy-pink-300"
                }`}>
                    <div className="flex items-center gap-2 mb-3">
                        <IconFolder size={18} className={isDark ? "text-gray-400" : "text-trendy-pink-700"} />
                        <h3 className={`font-bold text-[1.05rem] ${isDark ? "text-white" : "text-trendy-pink-900"}`}>
                            Where to Find Things
                        </h3>
                    </div>
                    <div className={`code-snippet text-xs ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
                        {"src/\n"}
                        {"├── main.tsx              ← Start here (entry point + ThemeProvider)\n"}
                        {"├── App.tsx               ← Main layout (uses all sections)\n"}
                        {"│\n"}
                        {"├── sections/             ← Each file teaches ONE concept\n"}
                        {"│   ├── BasicProp.tsx      ← 01: Simple string/function props\n"}
                        {"│   ├── ChildrenProp.tsx   ← 02: Component composition\n"}
                        {"│   ├── ComplexProp.tsx     ← 03: Nested objects & callbacks\n"}
                        {"│   ├── RefProp.tsx         ← 04: forwardRef & useRef\n"}
                        {"│   └── ThemeToggler.tsx    ← 05: Context API & custom hooks\n"}
                        {"│\n"}
                        {"└── components/            ← Reusable building blocks\n"}
                        {"    ├── Button.tsx          ← Props: label, color, size, onClick\n"}
                        {"    ├── Card.tsx            ← Props: color, title, children\n"}
                        {"    ├── Container.tsx       ← Props: format, children\n"}
                        {"    ├── Navbar.tsx          ← Smooth scroll navigation\n"}
                        {"    └── ProfileCard.tsx     ← Complex nested props example"}
                    </div>
                </div>

                {/* Motivational footer */}
                <div className={`text-center p-5 rounded-2xl border transition-colors duration-300 ${
                    isDark
                        ? "bg-gradient-to-r from-emerald-950 to-blue-950 border-gray-700 text-gray-200"
                        : "bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200 text-gray-800"
                }`}>
                    <div className={`flex justify-center mb-2 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
                        <IconRocket size={28} />
                    </div>
                    <div className="font-bold text-lg">You've Got This!</div>
                    <p className={`text-sm mt-1.5 leading-relaxed max-w-md mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        Props are the foundation of React. Once you master them, state management, hooks, and routing will feel much easier.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowToLearn
