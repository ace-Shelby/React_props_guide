// RefProp.tsx — Demonstrates passing refs to child components using forwardRef.
//
// KEY CONCEPTS:
// 1. useRef creates a mutable reference that persists across renders
// 2. Refs give direct access to DOM elements (focus, read values, etc.)
// 3. forwardRef lets you pass a ref from a parent into a child component
// 4. This is essential when a parent needs to control a child's DOM element

import { forwardRef, useRef } from 'react';
import Button from '../components/Button';
import { useTheme } from './ThemeToggler';
import { IconLink, IconLightbulb } from '../components/Icons';

// --- CustomInput: A child component that accepts a forwarded ref ---
// forwardRef<RefType, PropsType> wraps the component so the parent's ref
// gets attached to the <input> inside this component.
interface CustomInputProp {
    title: string,
}
const CustomInput = forwardRef<HTMLInputElement, CustomInputProp>((prop, ref) => {
    const { isDark } = useTheme();
    return (
        <div className={`p-4 rounded-lg border flex flex-col gap-4 ${
            isDark
                ? "bg-gray-800 border-gray-600"
                : "bg-trendy-pink-50 border-trendy-pink-600"
        }`}>
            <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold'>{prop.title}</label>
                <input
                    ref={ref}  // ← The forwarded ref attaches here
                    className={`w-full max-w-lg border rounded-lg p-2 text-sm ${
                        isDark
                            ? "border-gray-500 bg-gray-700 text-white placeholder-gray-400"
                            : "border-trendy-pink-600 bg-white"
                    }`}
                    placeholder='Write something'
                />
            </div>
        </div>
    )
});

// --- RefProp: The parent component that uses refs to control child inputs ---
function RefProp() {
    // Create refs — these will be attached to the CustomInput's <input> elements
    const firstRef = useRef<HTMLInputElement>(null);
    const secondRef = useRef<HTMLInputElement>(null);
    const { isDark } = useTheme();

    // These functions demonstrate the power of refs: direct DOM manipulation
    function focusFirst() {
        firstRef.current?.focus();
    }
    function getFirst() {
        if (firstRef.current) {
            alert(`Input value: ${firstRef.current.value}`)
        }
    }
    function focusSecond() {
        secondRef.current?.focus();
    }
    function clearFirst() {
        if (firstRef.current) {
            firstRef.current.value = "";
            firstRef.current.focus();
        }
    }

    return (
        <section id="ref-prop" className="scroll-mt-16">
            <div className={`section-card flex flex-col gap-5 mx-3 sm:mx-6 md:mx-10 my-3 sm:my-4 border p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors duration-300 google-sans-rpe ${
                isDark
                    ? "bg-gray-900 border-gray-700"
                    : "bg-trendy-pink-200 border-trendy-pink-950"
            }`}>
                {/* Section Header */}
                <div className="flex items-center gap-3">
                    <span className={`concept-badge ${isDark ? "bg-trendy-pink-800 text-trendy-pink-200" : "bg-trendy-pink-800 text-white"}`}>
                        04
                    </span>
                    <h2 className={`font-bold text-2xl ${isDark ? "text-trendy-pink-300" : "text-trendy-pink-950"}`}>
                        Ref Props
                    </h2>
                </div>

                {/* Explanation */}
                <p className={`text-[0.95rem] leading-relaxed ${isDark ? "text-gray-300" : "text-trendy-pink-950"}`}>
                    Refs provide a way to <strong>directly access DOM nodes</strong> from React. Unlike props and state, refs let you <strong>imperatively</strong> interact with an element — focus an input, read its value, scroll to it, or measure its size. Use <code className={`font-mono text-sm px-1.5 py-0.5 rounded ${isDark ? "bg-gray-700" : "bg-black/10"}`}>forwardRef</code> to pass refs from a parent into a child component.
                </p>

                {/* When to use Refs vs State */}
                <div className={`flex items-start gap-2.5 text-sm p-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-400 border border-gray-700" : "bg-trendy-pink-50 text-trendy-pink-700 border border-trendy-pink-300"}`}>
                    <IconLightbulb size={18} className="shrink-0 mt-0.5" />
                    <span><strong>When to use refs vs state:</strong> Use state when changing a value should re-render the UI. Use refs when you need to interact with the DOM without triggering a re-render — like focusing an input, playing a video, or measuring an element.</span>
                </div>

                {/* Step 1: useRef — Creating a ref */}
                <div>
                    <h3 className={`font-bold text-sm uppercase tracking-wide mb-2 ${isDark ? "text-gray-400" : "text-trendy-pink-700"}`}>
                        Step 1 — Create a ref with useRef
                    </h3>
                    <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
                        <span className="code-comment">{"// useRef creates a mutable object with a .current property"}</span>{"\n"}
                        <span className="code-comment">{"// It persists across renders and does NOT cause re-renders when changed"}</span>{"\n"}
                        <span className="code-keyword">const</span> inputRef <span className="code-punctuation">=</span> <span className="code-function">useRef</span><span className="code-punctuation">{"<"}</span><span className="code-type">HTMLInputElement</span><span className="code-punctuation">{">"}</span>(null){"\n\n"}
                        <span className="code-comment">{"// .current starts as null, and gets set when the element mounts"}</span>{"\n"}
                        inputRef.current{"  "}<span className="code-comment">{"// → null (before mount)"}</span>{"\n"}
                        inputRef.current{"  "}<span className="code-comment">{"// → <input> element (after mount)"}
                        </span>
                    </div>
                </div>

                {/* Step 2: Attaching a ref */}
                <div>
                    <h3 className={`font-bold text-sm uppercase tracking-wide mb-2 ${isDark ? "text-gray-400" : "text-trendy-pink-700"}`}>
                        Step 2 — Attach the ref to a DOM element
                    </h3>
                    <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
                        <span className="code-comment">{"// Pass the ref to any DOM element via the ref attribute"}</span>{"\n"}
                        <span className="code-punctuation">{"<"}</span>input <span className="code-type">ref</span><span className="code-punctuation">=</span>{"{"}inputRef{"}"} <span className="code-punctuation">{"/>"}</span>{"\n\n"}
                        <span className="code-comment">{"// Now you can control the element directly"}</span>{"\n"}
                        inputRef.current?.<span className="code-function">focus</span>(){"       "}
                        <span className="code-comment">{"// focus the input"}</span>{"\n"}
                        inputRef.current?.<span className="code-type">value</span>{"          "}
                        <span className="code-comment">{"// read the current value"}</span>{"\n"}
                        inputRef.current?.<span className="code-type">value</span> <span className="code-punctuation">=</span> <span className="code-string">""</span>{"   "}
                        <span className="code-comment">{"// clear the input"}
                        </span>
                    </div>
                </div>

                {/* Step 3: forwardRef */}
                <div>
                    <h3 className={`font-bold text-sm uppercase tracking-wide mb-2 ${isDark ? "text-gray-400" : "text-trendy-pink-700"}`}>
                        Step 3 — Forward a ref into a child component
                    </h3>
                    <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
                        <span className="code-comment">{"// Problem: You can't pass ref as a regular prop — React handles it specially"}</span>{"\n"}
                        <span className="code-comment">{"// Solution: Wrap your child component with forwardRef"}</span>{"\n\n"}
                        <span className="code-keyword">const</span> <span className="code-function">CustomInput</span> <span className="code-punctuation">=</span> <span className="code-function">forwardRef</span><span className="code-punctuation">{"<"}</span><span className="code-type">HTMLInputElement</span>, <span className="code-type">Props</span><span className="code-punctuation">{">"}</span>({"("}<span className="code-type">props</span>, <span className="code-type">ref</span>{")"} <span className="code-punctuation">{"=>"}</span> {"{"}{"\n"}
                        {"  "}<span className="code-keyword">return</span> <span className="code-punctuation">{"<"}</span>input <span className="code-type">ref</span><span className="code-punctuation">=</span>{"{"}ref{"}"} <span className="code-punctuation">{"/>"}</span>{"  "}
                        <span className="code-comment">{"// ref is now the SECOND argument"}</span>{"\n"}
                        {"})"}<span className="code-punctuation">;</span>{"\n\n"}
                        <span className="code-comment">{"// Parent creates the ref and passes it to the child"}</span>{"\n"}
                        <span className="code-keyword">const</span> myRef <span className="code-punctuation">=</span> <span className="code-function">useRef</span><span className="code-punctuation">{"<"}</span><span className="code-type">HTMLInputElement</span><span className="code-punctuation">{">"}</span>(null){"\n"}
                        <span className="code-punctuation">{"<"}</span><span className="code-function">CustomInput</span> <span className="code-type">ref</span><span className="code-punctuation">=</span>{"{"}myRef{"}"} <span className="code-punctuation">{"/>"}</span>{"\n"}
                        myRef.current?.<span className="code-function">focus</span>(){"  "}
                        <span className="code-comment">{"// parent can now control the child's input!"}</span>
                    </div>
                </div>

                {/* Common use cases callout */}
                <div className={`flex items-start gap-2.5 text-sm p-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-400 border border-gray-700" : "bg-trendy-pink-50 text-trendy-pink-700 border border-trendy-pink-300"}`}>
                    <IconLightbulb size={18} className="shrink-0 mt-0.5" />
                    <span><strong>Common use cases for refs:</strong> Focusing inputs on page load, scrolling to elements, integrating with non-React libraries (like a chart or map), measuring element sizes, and triggering animations.</span>
                </div>

                {/* Live Demo */}
                <div className={`flex items-center gap-2 font-semibold text-sm uppercase tracking-wide opacity-80 ${isDark ? "text-gray-200" : ""}`}>
                    <IconLink size={16} />
                    <span>Try it — Control child inputs from the parent via refs</span>
                </div>
                <CustomInput title='First Input' ref={firstRef} />
                <CustomInput title='Second Input' ref={secondRef} />
                <div className='flex flex-row gap-3 flex-wrap'>
                    <Button label='Focus First' onClick={focusFirst} color='primary' />
                    <Button label='Focus Second' onClick={focusSecond} color='primary' />
                    <Button label='Get First Value' onClick={getFirst} color='secondary' />
                    <Button label='Clear First' onClick={clearFirst} color='danger' />
                </div>
            </div>
        </section>
    )
}

export default RefProp