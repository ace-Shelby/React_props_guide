
// BasicProp.tsx — Demonstrates the most fundamental React concept: passing props.
//
// KEY CONCEPTS:
// 1. Props are read-only arguments passed from parent → child
// 2. You define prop types with a TypeScript interface
// 3. Props can be strings, numbers, booleans, or functions (like onClick)
// 4. Default values can be set with the `?` optional marker + fallback

import Button from '../components/Button'
import { useState } from 'react'
import { useTheme } from './ThemeToggler'
import { IconPalette, IconRuler, IconBan } from '../components/Icons'

function BasicProp() {
    // useState hook — lets a component "remember" data between renders.
    // count starts at 0, and setCount is the updater function.
    const [count, setCount] = useState(0);
    const { isDark } = useTheme();

    function handleClick() {
        setCount(count + 1)
    }
    function handleDanger() {
        setCount(count > 0 ? (count - 1) : 0);
    }

    return (
        <section id="basic-prop" className="scroll-mt-16">
            <div className={`section-card flex flex-col gap-5 mx-3 sm:mx-6 md:mx-10 my-3 sm:my-4 border p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors duration-300 google-sans-rpe ${
                isDark
                    ? "bg-gray-900 border-gray-700"
                    : "bg-trendy-pink-200 border-trendy-pink-950"
            }`}>
                {/* Section Header */}
                <div className="flex items-center gap-3">
                    <span className={`concept-badge ${isDark ? "bg-trendy-pink-800 text-trendy-pink-200" : "bg-trendy-pink-800 text-white"}`}>
                        01
                    </span>
                    <h2 className={`font-bold text-2xl ${isDark ? "text-trendy-pink-300" : "text-trendy-pink-950"}`}>
                        Basic Props
                    </h2>
                </div>

                {/* What You'll Learn */}
                <p className={`text-[0.95rem] leading-relaxed ${isDark ? "text-gray-300" : "text-trendy-pink-950"}`}>
                    Props are arguments passed to React components. They allow you to pass data from parent to child components — making components reusable with different data.
                </p>

                {/* Syntax Code Snippet */}
                <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
                    <span className="code-comment">{"// Define what props your component accepts"}</span>{"\n"}
                    <span className="code-keyword">interface</span> <span className="code-type">ButtonProps</span> {"{"}{"\n"}
                    {"  "}<span className="code-type">label</span><span className="code-punctuation">:</span> <span className="code-type">string</span><span className="code-punctuation">;</span>{"     "}
                    <span className="code-comment">{"// required prop"}</span>{"\n"}
                    {"  "}<span className="code-type">color</span><span className="code-punctuation">?:</span> <span className="code-type">string</span><span className="code-punctuation">;</span>{"    "}
                    <span className="code-comment">{"// optional prop (? makes it optional)"}</span>{"\n"}
                    {"}"}{"\n\n"}
                    <span className="code-comment">{"// Use the prop in a component"}</span>{"\n"}
                    <span className="code-keyword">function</span> <span className="code-function">Button</span>(<span className="code-type">props</span><span className="code-punctuation">:</span> <span className="code-type">ButtonProps</span>) {"{"}{"\n"}
                    {"  "}<span className="code-keyword">return</span> <span className="code-punctuation">{"<"}</span>button<span className="code-punctuation">{">"}</span>{"{"}props.label{"}"}<span className="code-punctuation">{"</"}</span>button<span className="code-punctuation">{">"}</span>{"\n"}
                    {"}"}
                </div>

                {/* Live Demo: Different Colors */}
                <div className={`demo-box border p-5 rounded-xl flex flex-col gap-3 ${
                    isDark
                        ? "border-gray-600 bg-gray-800/70 text-gray-200"
                        : "border-trendy-pink-300 bg-trendy-pink-50 text-trendy-pink-950"
                }`}>
                    <div className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wide opacity-80">
                        <IconPalette size={16} />
                        <span>Try it — Different colors via props</span>
                    </div>
                    <div className='flex gap-4 flex-wrap'>
                        {/* Each Button receives different "color" prop values */}
                        <Button label='Primary' onClick={handleClick} color='primary' />
                        <Button label='Secondary' onClick={handleClick} color='secondary' />
                        <Button label='Danger' onClick={handleDanger} color='danger' />
                    </div>
                </div>

                {/* Live Demo: Different Sizes */}
                <div className={`demo-box border p-5 rounded-xl flex flex-col gap-3 ${
                    isDark
                        ? "border-gray-600 bg-gray-800/70 text-gray-200"
                        : "border-trendy-pink-300 bg-trendy-pink-50 text-trendy-pink-950"
                }`}>
                    <div className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wide opacity-80">
                        <IconRuler size={16} />
                        <span>Try it — Different sizes via props</span>
                    </div>
                    <div className='flex gap-4 items-center flex-wrap'>
                        <Button label='Small' onClick={handleClick} color='primary' size='small' />
                        <Button label='Medium' onClick={handleClick} color='primary' size='med' />
                        <Button label='Large' onClick={handleClick} color='primary' size='large' />
                    </div>
                </div>

                {/* Live Demo: Disabled State */}
                <div className={`demo-box border p-5 rounded-xl flex flex-col gap-3 ${
                    isDark
                        ? "border-gray-600 bg-gray-800/70 text-gray-200"
                        : "border-trendy-pink-300 bg-trendy-pink-50 text-trendy-pink-950"
                }`}>
                    <div className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wide opacity-80">
                        <IconBan size={16} />
                        <span>Try it — Disabled state via boolean prop</span>
                    </div>
                    <div className='flex gap-4 flex-wrap'>
                        <Button label='Enabled' onClick={handleDanger} color='danger' />
                        <Button label='Disabled' onClick={handleClick} color='danger' disable={true} />
                    </div>
                </div>

                {/* Counter Display */}
                <div className={`text-2xl google-sans-rpe flex p-4 rounded-xl justify-center w-full max-w-xl transition-colors duration-300 ${
                    isDark
                        ? "bg-trendy-pink-900 text-trendy-pink-200 border border-trendy-pink-700"
                        : "bg-trendy-pink-800 text-white"
                }`}>
                    <div>Count: {count}</div>
                </div>
            </div>
        </section>
    )
}

export default BasicProp