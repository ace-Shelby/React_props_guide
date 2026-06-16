// Card.tsx — A reusable card component that demonstrates the `children` prop.
//
// LEARNING POINTS:
// - `children?: ReactNode` lets this component wrap ANY JSX content
// - Record<string, string> is a TypeScript utility type for key-value objects
// - This component doesn't know what its children will be — that's the power of composition!
// - useTheme() gives access to dark mode state from ANYWHERE in the tree

import type { ReactNode } from 'react';
import { useTheme } from '../sections/ThemeToggler';

interface CardProps {
    color: string;           // Maps to a color preset (e.g., 'primary', 'red')
    title: string;           // Header text for the card
    children?: ReactNode;    // Whatever JSX is placed between <Card>...</Card>
}

function Card(prop: CardProps) {
    const { isDark } = useTheme();

    // Separate color maps for light and dark mode
    // Each color key maps to different Tailwind classes depending on theme
    const lightColors: Record<string, string> = {
        primary: "border-trendy-pink-950 bg-trendy-pink-50 text-trendy-pink-950",
        red: "border-red-400 bg-red-50 text-red-900",
        green: "border-green-400 bg-green-50 text-green-900",
        blue: "border-blue-400 bg-blue-50 text-blue-900"
    }

    const darkColors: Record<string, string> = {
        primary: "border-trendy-pink-600 bg-gray-800 text-gray-100",
        red: "border-red-500 bg-gray-800 text-red-200",
        green: "border-green-500 bg-gray-800 text-green-200",
        blue: "border-blue-500 bg-gray-800 text-blue-200"
    }

    const colorOptions = isDark ? darkColors : lightColors;

    return (
        <div className={`border-l-4 ${colorOptions[prop.color]} rounded-lg flex flex-col p-4 justify-around transition-colors duration-300`}>
            <h3 className='font-bold text-lg pb-2'>{prop.title}</h3>
            {/* children renders whatever the parent puts between the opening and closing tags */}
            {prop.children}
        </div>
    )
}

export default Card