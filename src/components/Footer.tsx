// Footer.tsx — Site footer with GitHub link and project info.

import { useTheme } from '../sections/ThemeToggler'
import { IconReact } from './Icons'

function Footer() {
    const { isDark } = useTheme();

    return (
        <footer className={`border-t transition-colors duration-300 ${
            isDark
                ? "bg-gray-950 border-gray-800 text-gray-400"
                : "bg-trendy-pink-100 border-trendy-pink-200 text-trendy-pink-700"
        }`}>
            <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

                {/* Branding */}
                <div className="flex items-center gap-2">
                    <IconReact className={isDark ? "text-trendy-pink-400" : "text-trendy-pink-700"} size={28} />
                    <span className={`font-bold text-xl google-sans-rpe ${isDark ? "text-gray-200" : "text-trendy-pink-900"}`}>
                        LearnProps
                    </span>
                </div>

                <p className={`text-sm text-center max-w-md leading-relaxed ${isDark ? "text-gray-500" : "text-trendy-pink-500"}`}>
                    An interactive guide to React props for beginners. Built with React 19, TypeScript, and Tailwind CSS v4.
                </p>

                {/* GitHub Link */}
                <a
                    href="https://github.com/ace-Shelby/React_props_guide.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        isDark
                            ? "border-gray-700 bg-gray-900 text-gray-300 hover:border-gray-500 hover:text-white"
                            : "border-trendy-pink-300 bg-white text-trendy-pink-800 hover:border-trendy-pink-500 hover:shadow-sm"
                    }`}
                >
                    {/* GitHub SVG icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View on GitHub</span>
                </a>

                {/* Divider */}
                <hr className={`w-full max-w-xs ${isDark ? "border-gray-800" : "border-trendy-pink-200"}`} />

                {/* Bottom line */}
                <div className={`text-xs ${isDark ? "text-gray-600" : "text-trendy-pink-400"}`}>
                    Made with React props and a lot of curiosity.
                </div>
            </div>
        </footer>
    )
}

export default Footer
