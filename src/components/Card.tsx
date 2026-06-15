import type{ ReactNode } from 'react';
interface CardProps {
    color: string;
    title: string;
    children?: ReactNode;
}
function Card(prop: CardProps) {
    const colorOptions: Record<string, string> = {
        primary: "border-trendy-pink-950 bg-trendy-pink-50",
        red: "border-red-400 bg-red-50",
        green: "border-green-400 bg-green-50",
        blue: "border-blue-400 bg-blue-50"
    }
  return (
    <div className={`border-l-4 ${colorOptions[prop.color]}  rounded-lg flex flex-col p-4 justify-around `}>
        <h1 className='font-bold text-lg pb-2'>{prop.title}</h1>
        {prop.children}
    </div>
  )
}

export default Card