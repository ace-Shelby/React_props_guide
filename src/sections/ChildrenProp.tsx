// ChildrenProp.tsx — Demonstrates component composition using the `children` prop.
//
// KEY CONCEPTS:
// 1. `children` is a special prop that contains whatever JSX you put BETWEEN a component's tags
// 2. This enables "component composition" — building complex UIs from simple parts
// 3. Type it as `React.ReactNode` to accept any renderable content

import Button from '../components/Button'
import Card from '../components/Card'
import { useState } from 'react'
import Container from '../components/Container'
import { useTheme } from './ThemeToggler'
import { IconPuzzle } from '../components/Icons'

function ChildrenProp() {
    const [btnColor, setBtnColor] = useState("primary")
    const { isDark } = useTheme();

    function handleClick() {
        if (btnColor === 'primary') {
            setBtnColor("danger")
        } else {
            setBtnColor('primary')
        }
    }

    return (
        <section id="children-prop" className="scroll-mt-16">
            <div className={`section-card flex flex-col gap-5 mx-3 sm:mx-6 md:mx-10 my-3 sm:my-4 border p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors duration-300 google-sans-rpe ${
                isDark
                    ? "bg-gray-900 border-gray-700"
                    : "bg-trendy-pink-200 border-trendy-pink-950"
            }`}>
                {/* Section Header */}
                <div className="flex items-center gap-3">
                    <span className={`concept-badge ${isDark ? "bg-trendy-pink-800 text-trendy-pink-200" : "bg-trendy-pink-800 text-white"}`}>
                        02
                    </span>
                    <h2 className={`font-bold text-2xl ${isDark ? "text-trendy-pink-300" : "text-trendy-pink-950"}`}>
                        Children Props
                    </h2>
                </div>

                {/* Explanation */}
                <p className={`text-[0.95rem] leading-relaxed ${isDark ? "text-gray-300" : "text-trendy-pink-950"}`}>
                    The <code className={`font-mono text-sm px-1.5 py-0.5 rounded ${isDark ? "bg-gray-700" : "bg-black/10"}`}>children</code> prop allows you to pass JSX elements or components as children to other components, enabling <strong>component composition</strong> — building complex UIs from simple, reusable parts.
                </p>

                {/* Syntax Code Snippet */}
                <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
                    <span className="code-comment">{"// children is whatever you put BETWEEN the component's tags"}</span>{"\n"}
                    <span className="code-keyword">interface</span> <span className="code-type">CardProps</span> {"{"}{"\n"}
                    {"  "}<span className="code-type">children</span><span className="code-punctuation">:</span> <span className="code-type">React.ReactNode</span><span className="code-punctuation">;</span>{"  "}
                    <span className="code-comment">{"// accepts any JSX content"}</span>{"\n"}
                    {"}"}{"\n\n"}
                    <span className="code-comment">{"// Usage — everything between <Card> and </Card> becomes `children`"}</span>{"\n"}
                    <span className="code-punctuation">{"<"}</span><span className="code-function">Card</span><span className="code-punctuation">{">"}</span>{"\n"}
                    {"  "}<span className="code-punctuation">{"<"}</span>p<span className="code-punctuation">{">"}</span><span className="code-string">This paragraph is a child!</span><span className="code-punctuation">{"</"}</span>p<span className="code-punctuation">{">"}</span>{"\n"}
                    {"  "}<span className="code-punctuation">{"<"}</span><span className="code-function">Button</span> <span className="code-type">label</span><span className="code-punctuation">=</span><span className="code-string">"Click me"</span> <span className="code-punctuation">{"/>"}</span>{"\n"}
                    <span className="code-punctuation">{"</"}</span><span className="code-function">Card</span><span className="code-punctuation">{">"}</span>
                </div>

                {/* Live Demo */}
                <div className={isDark ? "text-gray-200" : "text-trendy-pink-950"}>
                    <div className='flex items-center gap-2 font-semibold text-sm uppercase tracking-wide opacity-80 pb-4'>
                        <IconPuzzle size={16} />
                        <span>Try it — Card component with different children</span>
                    </div>
                    <Container format='grid'>
                        {/* Each Card receives different children content */}
                        <Card color='red' title='Warning'>
                            <p>
                                Your trial period ends in 5 days. Please upgrade your account to continue using all features.
                            </p>
                        </Card>
                        <Card color={'blue'} title='Quick Actions'>
                            {/* A Button component as a child — components can be children too! */}
                            <Button color={btnColor} label='Change Color' onClick={handleClick} />
                        </Card>
                        <Card color='primary' title='User Profile'>
                            <div><span className='font-bold'>Name:</span> <span className={isDark ? "text-gray-400" : "text-gray-500"}>Thomas Shelby</span></div>
                            <div><span className='font-bold'>Gang:</span> <span className={isDark ? "text-gray-400" : "text-gray-500"}>Peaky Blinders</span></div>
                        </Card>
                        <Card color='green' title='Write Anything'>
                            <textarea className={`border rounded-xl p-2 w-full ${isDark ? "border-green-700 bg-gray-700 text-white" : "border-green-500 bg-white"}`} placeholder='By the order of peaky fookin blinders...'></textarea>
                        </Card>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default ChildrenProp