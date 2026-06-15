

interface ButtonProps {
    label: string;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'danger' | string;
    size?: 'small' | 'med' | 'large';
    disable?: boolean;
}
function Button(prop: ButtonProps) {
  return (
    <button className={`border 
                    border-trendy-pink-950
                    rounded-lg
                    px-4 py-2 
                    text-md font-medium google-sans-rpe 
                    active:scale-95
                    ${prop.color === 'primary' ? 'bg-blue-400 text-white  hover:bg-blue-500' : prop.color === 'secondary' ? 'bg-trendy-pink-300 text-white  hover:bg-trendy-pink-500' : prop.color === 'danger' ? 'bg-red-400 text-white  hover:bg-red-500' : 'bg-gray-200 text-gray-800'}  
                    ${prop.disable?'opacity-50 cursor-not-allowed':'cursor-pointer'}
                    ${prop.size === 'small' ? 'text-sm py-1 px-1': prop.size === 'large' ? 'text-2xl px-20 ':''}`} 
            onClick={prop.onClick} disabled={prop.disable}>
        {prop.label}
    </button>
  )
}

export default Button