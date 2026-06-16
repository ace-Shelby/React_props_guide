// Button.tsx — A reusable button component that accepts props for customization.
//
// LEARNING POINTS:
// - The interface defines which props the component accepts
// - Optional props use `?` (e.g., size?: ...) — they don't have to be passed
// - Union types like 'primary' | 'secondary' restrict values to specific strings
// - Conditional className logic applies different Tailwind classes based on prop values

interface ButtonProps {
    label: string;                                     // Required: the button text
    onClick: () => void;                               // Required: callback when clicked
    color?: 'primary' | 'secondary' | 'danger' | string;  // Optional: visual style
    size?: 'small' | 'med' | 'large';                 // Optional: size variant
    disable?: boolean;                                 // Optional: disabled state
}

function Button(prop: ButtonProps) {
    // Build className dynamically based on prop values
    // This pattern is very common in React component libraries
    return (
        <button className={`border 
                    border-trendy-pink-950
                    rounded-lg
                    px-4 py-2 
                    text-md font-medium google-sans-rpe 
                    active:scale-95 transition-transform duration-100
                    ${prop.color === 'primary' ? 'bg-blue-400 text-white  hover:bg-blue-500' : prop.color === 'secondary' ? 'bg-trendy-pink-300 text-white  hover:bg-trendy-pink-500' : prop.color === 'danger' ? 'bg-red-400 text-white  hover:bg-red-500' : 'bg-gray-200 text-gray-800'}  
                    ${prop.disable ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    ${prop.size === 'small' ? 'text-sm py-1 px-2' : prop.size === 'large' ? 'text-2xl px-20 ' : ''}`}
                onClick={prop.onClick} disabled={prop.disable}>
            {prop.label}
        </button>
    )
}

export default Button