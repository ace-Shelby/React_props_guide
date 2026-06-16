// ThemeToggler.tsx — Demonstrates React Context API for global state management.
//
// KEY CONCEPTS:
// 1. createContext() creates a "channel" to pass data through the component tree
// 2. A Provider component wraps the tree and provides the context value
// 3. useContext() (or a custom hook) lets any child read the context value
// 4. Custom hooks (like useTheme) abstract away context access for cleaner code
// 5. This avoids "prop drilling" — passing props through many intermediate components

import React, { createContext, useContext, useState } from "react"
import { IconSun, IconMoon, IconLightbulb, IconPalette } from "../components/Icons"

// --- Step 1: Define the shape of our context ---
interface ThemeContextType {
  theme: string
  themeToggler: () => void
  isDark: boolean
}

// --- Step 2: Create the context with a default value ---
// The default is used when a component calls useTheme() outside of a ThemeProvider.
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  themeToggler: () => {},
  isDark: false
});

// --- Step 3: Create a Provider component ---
// This wraps the component tree and provides the real context values.
interface ThemeProp {
  children?: React.ReactNode
}

export function ThemeProvider(prop: ThemeProp) {
  const [theme, setTheme] = useState("light");

  function themeToggler() {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  // The `value` object is what all children will receive via useTheme()
  const value: ThemeContextType = {
    theme,
    themeToggler,
    isDark: theme === "dark"
  }

  return (
    <ThemeContext.Provider value={value}>{prop.children}</ThemeContext.Provider>
  )
}

// --- Step 4: Create a custom hook for clean access ---
// Instead of useContext(ThemeContext) everywhere, components just call useTheme()
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context;
}

// --- Demo components below ---

// ThemeToggleButton: A toggle switch that calls themeToggler() from context
function ThemeToggleButton() {
  const { themeToggler, isDark } = useTheme();
  return (
    <button
      onClick={themeToggler}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 cursor-pointer ${isDark ? "bg-blue-500" : "bg-gray-300"}`}
    >
      <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${isDark ? "transform translate-x-8" : ""}`}>
        {isDark ? <IconMoon size={14} /> : <IconSun size={14} />}
      </div>
    </button>
  )
}

// ThemedCard: Shows how any deeply-nested component can read theme without prop drilling
function ThemedCard(prop: { title: string, children: React.ReactNode }) {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? "bg-gray-700 text-white" : "bg-white text-gray-800"} rounded-2xl p-4 flex gap-4 items-center transition-colors duration-300`}>
      <h3 className="font-semibold">{prop.title}</h3>
      <div>{prop.children}</div>
    </div>
  )
}

// --- The main section component ---
function ThemeToggler() {
  const { isDark } = useTheme();

  return (
    <section id="theme-prop" className="scroll-mt-16">
      <div className={`section-card flex flex-col gap-5 mx-3 sm:mx-6 md:mx-10 my-3 sm:my-4 border p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors duration-300 google-sans-rpe ${
        isDark
          ? "bg-gray-900 border-gray-700"
          : "bg-trendy-pink-200 border-trendy-pink-950"
      }`}>
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className={`concept-badge ${isDark ? "bg-trendy-pink-800 text-trendy-pink-200" : "bg-trendy-pink-800 text-white"}`}>
            05
          </span>
          <h2 className={`font-bold text-2xl ${isDark ? "text-trendy-pink-300" : "text-trendy-pink-950"}`}>
            Theme Context (Global Props)
          </h2>
        </div>

        {/* Explanation */}
        <p className={`text-[0.95rem] leading-relaxed ${isDark ? "text-gray-300" : "text-trendy-pink-950"}`}>
          Context lets you pass data to <strong>any component</strong> in the tree without manually threading props through every level. This solves the <strong>"prop drilling" problem</strong> — when intermediate components pass props they don't use just to forward them deeper.
        </p>

        {/* Prop Drilling Explanation */}
        <div className={`flex items-start gap-2.5 text-sm p-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-400 border border-gray-700" : "bg-trendy-pink-50 text-trendy-pink-700 border border-trendy-pink-300"}`}>
          <IconLightbulb size={18} className="shrink-0 mt-0.5" />
          <span><strong>What is prop drilling?</strong> Imagine App passes <code className={`font-mono text-xs px-1 py-0.5 rounded ${isDark ? "bg-gray-700" : "bg-black/10"}`}>theme</code> to Layout, Layout passes it to Sidebar, Sidebar passes it to Button — even though Layout and Sidebar don't use it themselves. Context eliminates this chain entirely.</span>
        </div>

        {/* Step 1: Create a Context */}
        <div>
          <h3 className={`font-bold text-sm uppercase tracking-wide mb-2 ${isDark ? "text-gray-400" : "text-trendy-pink-700"}`}>
            Step 1 — Create a Context
          </h3>
          <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
            <span className="code-comment">{"// createContext() creates a \"channel\" for data"}</span>{"\n"}
            <span className="code-comment">{"// The argument is the default value (used if no Provider is found)"}</span>{"\n\n"}
            <span className="code-keyword">interface</span> <span className="code-type">ThemeContextType</span> {"{"}{"\n"}
            {"  "}<span className="code-type">theme</span><span className="code-punctuation">:</span> <span className="code-type">string</span>{"          "}
            <span className="code-comment">{"// current theme name"}</span>{"\n"}
            {"  "}<span className="code-type">themeToggler</span><span className="code-punctuation">:</span> <span className="code-punctuation">()</span> <span className="code-punctuation">{"=>"}</span> <span className="code-type">void</span>{"  "}
            <span className="code-comment">{"// function to switch themes"}</span>{"\n"}
            {"  "}<span className="code-type">isDark</span><span className="code-punctuation">:</span> <span className="code-type">boolean</span>{"        "}
            <span className="code-comment">{"// convenience boolean"}</span>{"\n"}
            {"}"}{"\n\n"}
            <span className="code-keyword">const</span> ThemeContext <span className="code-punctuation">=</span> <span className="code-function">createContext</span><span className="code-punctuation">{"<"}</span><span className="code-type">ThemeContextType</span><span className="code-punctuation">{">"}</span>(defaultValue)
          </div>
        </div>

        {/* Step 2: Build the Provider */}
        <div>
          <h3 className={`font-bold text-sm uppercase tracking-wide mb-2 ${isDark ? "text-gray-400" : "text-trendy-pink-700"}`}>
            Step 2 — Build a Provider component
          </h3>
          <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
            <span className="code-comment">{"// The Provider wraps your component tree and supplies the real values"}</span>{"\n"}
            <span className="code-comment">{"// Any component inside this wrapper can access the context"}</span>{"\n\n"}
            <span className="code-keyword">function</span> <span className="code-function">ThemeProvider</span>{"({ children }) {"}{"\n"}
            {"  "}<span className="code-keyword">const</span> [theme, setTheme] <span className="code-punctuation">=</span> <span className="code-function">useState</span>(<span className="code-string">"light"</span>){"\n\n"}
            {"  "}<span className="code-keyword">function</span> <span className="code-function">themeToggler</span>() {"{"}{"\n"}
            {"    "}<span className="code-function">setTheme</span>(prev <span className="code-punctuation">{"=>"}</span> prev <span className="code-punctuation">===</span> <span className="code-string">"light"</span> <span className="code-punctuation">?</span> <span className="code-string">"dark"</span> <span className="code-punctuation">:</span> <span className="code-string">"light"</span>){"\n"}
            {"  }"}{"\n\n"}
            {"  "}<span className="code-comment">{"// value = what all children will receive"}</span>{"\n"}
            {"  "}<span className="code-keyword">const</span> value <span className="code-punctuation">=</span> {"{"} theme, themeToggler, isDark<span className="code-punctuation">:</span> theme <span className="code-punctuation">===</span> <span className="code-string">"dark"</span> {"}"}{"\n\n"}
            {"  "}<span className="code-keyword">return</span> ({"\n"}
            {"    "}<span className="code-punctuation">{"<"}</span><span className="code-function">ThemeContext.Provider</span> <span className="code-type">value</span><span className="code-punctuation">=</span>{"{"}value{"}"}<span className="code-punctuation">{">"}</span>{"\n"}
            {"      "}{"{"}children{"}"}{"\n"}
            {"    "}<span className="code-punctuation">{"</"}</span><span className="code-function">ThemeContext.Provider</span><span className="code-punctuation">{">"}</span>{"\n"}
            {"  )"}{"\n"}
            {"}"}
          </div>
        </div>

        {/* Step 3: Custom Hook */}
        <div>
          <h3 className={`font-bold text-sm uppercase tracking-wide mb-2 ${isDark ? "text-gray-400" : "text-trendy-pink-700"}`}>
            Step 3 — Create a custom hook for clean access
          </h3>
          <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
            <span className="code-comment">{"// Instead of writing useContext(ThemeContext) everywhere,"}</span>{"\n"}
            <span className="code-comment">{"// wrap it in a custom hook for cleaner code + error handling"}</span>{"\n\n"}
            <span className="code-keyword">function</span> <span className="code-function">useTheme</span>() {"{"}{"\n"}
            {"  "}<span className="code-keyword">const</span> context <span className="code-punctuation">=</span> <span className="code-function">useContext</span>(ThemeContext){"\n"}
            {"  "}<span className="code-keyword">if</span> (!context) {"{"}{"\n"}
            {"    "}<span className="code-keyword">throw</span> <span className="code-keyword">new</span> <span className="code-function">Error</span>(<span className="code-string">"useTheme must be used within ThemeProvider"</span>){"\n"}
            {"  }"}{"\n"}
            {"  "}<span className="code-keyword">return</span> context{"  "}
            <span className="code-comment">{"// { theme, themeToggler, isDark }"}</span>{"\n"}
            {"}"}
          </div>
        </div>

        {/* Step 4: Consume it */}
        <div>
          <h3 className={`font-bold text-sm uppercase tracking-wide mb-2 ${isDark ? "text-gray-400" : "text-trendy-pink-700"}`}>
            Step 4 — Consume it anywhere in the tree
          </h3>
          <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
            <span className="code-comment">{"// Any component inside <ThemeProvider> can call useTheme()"}</span>{"\n"}
            <span className="code-comment">{"// No matter how deeply nested — no props needed!"}</span>{"\n\n"}
            <span className="code-keyword">function</span> <span className="code-function">Navbar</span>() {"{"}{"\n"}
            {"  "}<span className="code-keyword">const</span> {"{"} isDark {"}"} <span className="code-punctuation">=</span> <span className="code-function">useTheme</span>(){"  "}
            <span className="code-comment">{"// reads from nearest Provider"}</span>{"\n"}
            {"  "}<span className="code-keyword">return</span> <span className="code-punctuation">{"<"}</span>nav className<span className="code-punctuation">=</span>{"{"}isDark <span className="code-punctuation">?</span> <span className="code-string">"dark-nav"</span> <span className="code-punctuation">:</span> <span className="code-string">"light-nav"</span>{"}"} <span className="code-punctuation">{"/>"}</span>{"\n"}
            {"}"}{"\n\n"}
            <span className="code-keyword">function</span> <span className="code-function">ToggleBtn</span>() {"{"}{"\n"}
            {"  "}<span className="code-keyword">const</span> {"{"} themeToggler {"}"} <span className="code-punctuation">=</span> <span className="code-function">useTheme</span>(){"  "}
            <span className="code-comment">{"// same context, different component"}</span>{"\n"}
            {"  "}<span className="code-keyword">return</span> <span className="code-punctuation">{"<"}</span>button <span className="code-type">onClick</span><span className="code-punctuation">=</span>{"{"}themeToggler{"}"}<span className="code-punctuation">{">"}</span>Toggle<span className="code-punctuation">{"</"}</span>button<span className="code-punctuation">{">"}</span>{"\n"}
            {"}"}
          </div>
        </div>

        {/* Context vs Props comparison */}
        <div className={`flex items-start gap-2.5 text-sm p-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-400 border border-gray-700" : "bg-trendy-pink-50 text-trendy-pink-700 border border-trendy-pink-300"}`}>
          <IconLightbulb size={18} className="shrink-0 mt-0.5" />
          <span><strong>Context vs Props:</strong> Use props when data flows one or two levels deep. Use context when many components at different nesting depths need the same data — like themes, auth state, or language preferences.</span>
        </div>

        {/* Live Demo */}
        <div className={`flex items-center gap-2 font-semibold text-sm uppercase tracking-wide opacity-80 ${isDark ? "text-gray-200" : ""}`}>
          <IconPalette size={16} />
          <span>Try it — Toggle the theme (it affects the entire page)</span>
        </div>
        <ThemedCard title="Day or Night">
          <ThemeToggleButton />
        </ThemedCard>

        {/* What just happened callout */}
        <div className={`flex items-start gap-2.5 text-sm p-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-400 border border-gray-700" : "bg-trendy-pink-50 text-trendy-pink-700 border border-trendy-pink-300"}`}>
          <IconLightbulb size={18} className="shrink-0 mt-0.5" />
          <span><strong>What just happened:</strong> The toggle button called <code className={`font-mono text-xs px-1 py-0.5 rounded ${isDark ? "bg-gray-700" : "bg-black/10"}`}>themeToggler()</code> from context, which updated state in the Provider. React re-rendered every component that calls <code className={`font-mono text-xs px-1 py-0.5 rounded ${isDark ? "bg-gray-700" : "bg-black/10"}`}>useTheme()</code> — the navbar, this section, and the page background — all without any direct prop passing.</span>
        </div>
      </div>
    </section>
  )
}

export default ThemeToggler
