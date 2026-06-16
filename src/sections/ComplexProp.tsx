// ComplexProp.tsx — Demonstrates passing deeply nested objects and callback functions as props.
//
// KEY CONCEPTS:
// 1. Props can be complex nested objects (user → stats → Posts)
// 2. Functions (callbacks) can be passed as props for parent-child communication
// 3. TypeScript interfaces can be nested to describe complex data shapes
// 4. Array.map() renders lists of components from data arrays

import Container from "../components/Container"
import ProfileCard from "../components/ProfileCard"
import Card from "../components/Card"
import { useState } from "react"
import { useTheme } from "./ThemeToggler"
import { IconUsers } from "../components/Icons"

function ComplexProp() {
    const { isDark } = useTheme();

    // This array of user objects shows how complex, nested data structures
    // can be passed as props. Each user has: personal info, theme config, and action callbacks.
    // Notice: each theme now includes BOTH light and dark mode variants!
    const users = [
        {
            user: {
                name: "Polly Gray",
                email: "polly@peaky.com",
                avatar: "PG",
                role: "Admin",
                status: "Active",
                stats: {
                    Posts: "23",
                    Followers: "222",
                    Following: '111'
                }
            },
            theme: {
                // Light mode colors
                backgroundColor: "bg-gradient-to-br from-amber-100 to-green-100",
                textColor: "text-gray-700",
                avatarBg: "bg-purple-300",
                badgeBg: "bg-purple-200",
                // Dark mode colors
                darkBackgroundColor: "bg-gradient-to-br from-purple-950 to-gray-900",
                darkTextColor: "text-gray-200",
                darkAvatarBg: "bg-purple-700",
                darkBadgeBg: "bg-purple-900",
            },
            actions: {
                primary: {
                    label: "View Profile",
                    onClick: () => setMsg("Viewing Polly's profile"),
                    className: "text-white bg-purple-600 hover:bg-purple-700 cursor-pointer"
                },
                secondary: {
                    label: "Message",
                    onClick: () => setMsg("Opening message to Polly"),
                    className: "text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
                }
            }
        },
        {
            user: {
                name: "Arthur Shelby",
                email: "arthur@peaky.com",
                avatar: "AS",
                role: "Developer",
                status: "Active",
                stats: {
                    Posts: "3",
                    Followers: "119",
                    Following: '5'
                }
            },
            theme: {
                // Light mode colors
                backgroundColor: "bg-gradient-to-br from-green-100 to-orange-100",
                textColor: "text-gray-800",
                avatarBg: "bg-green-300",
                badgeBg: "bg-green-200",
                // Dark mode colors
                darkBackgroundColor: "bg-gradient-to-br from-green-950 to-gray-900",
                darkTextColor: "text-gray-200",
                darkAvatarBg: "bg-green-700",
                darkBadgeBg: "bg-green-900",
            },
            actions: {
                primary: {
                    label: "View Profile",
                    onClick: () => setMsg("Viewing Arthur's profile"),
                    className: "text-white bg-green-600 hover:bg-green-700 cursor-pointer"
                },
                secondary: {
                    label: "Message",
                    onClick: () => setMsg("Opening message to Arthur"),
                    className: "text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
                }
            }
        }
    ]

    const [msg, setMsg] = useState("Press a button on a profile card to see a message here.");

    return (
        <section id="complex-prop" className="scroll-mt-16">
            <div className={`section-card flex flex-col gap-5 mx-3 sm:mx-6 md:mx-10 my-3 sm:my-4 border p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors duration-300 google-sans-rpe ${
                isDark
                    ? "bg-gray-900 border-gray-700"
                    : "bg-trendy-pink-200 border-trendy-pink-950"
            }`}>
                {/* Section Header */}
                <div className="flex items-center gap-3">
                    <span className={`concept-badge ${isDark ? "bg-trendy-pink-800 text-trendy-pink-200" : "bg-trendy-pink-800 text-white"}`}>
                        03
                    </span>
                    <h2 className={`font-bold text-2xl ${isDark ? "text-trendy-pink-300" : "text-trendy-pink-950"}`}>
                        Complex Props
                    </h2>
                </div>

                {/* Explanation */}
                <p className={`text-[0.95rem] leading-relaxed ${isDark ? "text-gray-300" : "text-trendy-pink-950"}`}>
                    Complex props allow you to pass <strong>nested objects</strong> and <strong>callback functions</strong>, enabling sophisticated component configuration and parent-child communication.
                </p>

                {/* Syntax Code Snippet */}
                <div className={`code-snippet ${isDark ? "code-snippet-dark" : "code-snippet-light"}`}>
                    <span className="code-comment">{"// Nested interfaces describe complex prop shapes"}</span>{"\n"}
                    <span className="code-keyword">interface</span> <span className="code-type">User</span> {"{"}{"\n"}
                    {"  "}<span className="code-type">name</span><span className="code-punctuation">:</span> <span className="code-type">string</span><span className="code-punctuation">;</span>{"\n"}
                    {"  "}<span className="code-type">stats</span><span className="code-punctuation">:</span> {"{ "}<span className="code-type">posts</span><span className="code-punctuation">:</span> <span className="code-type">number</span>{" }"}<span className="code-punctuation">;</span>{"  "}
                    <span className="code-comment">{"// nested object"}</span>{"\n"}
                    {"}"}{"\n\n"}
                    <span className="code-comment">{"// Functions as props enable parent-child communication"}</span>{"\n"}
                    <span className="code-keyword">interface</span> <span className="code-type">Actions</span> {"{"}{"\n"}
                    {"  "}<span className="code-type">onView</span><span className="code-punctuation">:</span> <span className="code-punctuation">()</span> <span className="code-punctuation">{"=>"}</span> <span className="code-type">void</span><span className="code-punctuation">;</span>{"  "}
                    <span className="code-comment">{"// callback function prop"}</span>{"\n"}
                    {"}"}
                </div>

                {/* Live Demo */}
                <div className={`flex items-center gap-2 font-semibold text-sm uppercase tracking-wide opacity-80 ${isDark ? "text-gray-200" : ""}`}>
                    <IconUsers size={16} />
                    <span>Try it — User profile cards with complex props</span>
                </div>
                <Container format="grid">
                    {users.map((u, index) => (
                        <ProfileCard key={index} user={u.user} theme={u.theme} action={u.actions} />
                    ))}
                </Container>

                {/* Notification Card — shows the callback result */}
                <Card color="primary" title="Notification">
                    {msg}
                </Card>
            </div>
        </section>
    )
}

export default ComplexProp