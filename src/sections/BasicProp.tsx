
import Button from '../components/Button'
import { useState } from 'react'
function BasicProp() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1)
    }
    function handleDanger(){
        setCount(count>0?(count-1):0);
    }
    return (
        <div className='flex flex-col gap-4 mx-10 my-4 border border-trendy-pink-950 p-4 rounded-3xl bg-trendy-pink-200 ' >
            <div className='text-bold text-2xl text-trendy-pink-950 google-sans-rpe '>
                BasicProp
            </div>
            <div className='text-trendy-pink-950 google-sans-rpe text-md'>
                Props are arguments passed to React Components. They allow you to pass data from parent to child components.
            </div>
            <div className='text-trendy-pink-950 google-sans-rpe text-md border border-trendy-pink-950 p-5 rounded-lg bg-trendy-pink-50 flex flex-col gap-4'>
                <div>Different colors</div>
                <div className='flex gap-4'>
                    <Button label='Primary' onClick= {handleClick} color='primary'/>
                    <Button label='Secondary' onClick= {handleClick} color='secondary'/>
                    <Button label='Danger' onClick= {handleDanger} color='danger'/>
                </div>
            </div>
            <div className='text-trendy-pink-950 google-sans-rpe text-md border border-trendy-pink-950 p-5 rounded-lg bg-trendy-pink-50 flex flex-col gap-4'>
                <div>Different sizes</div>
                <div className='flex gap-4'>
                    <Button label='Small' onClick= {handleClick} color='primary' size='small'/>
                    <Button label='Medium' onClick= {handleClick} color='primary' size='med'/>
                    <Button label='Large' onClick= {handleClick} color='primary' size='large'/>
                </div>
            </div>
            <div className='text-trendy-pink-950 google-sans-rpe text-md border border-trendy-pink-950 p-5 rounded-lg bg-trendy-pink-50 flex flex-col gap-4'>
                <div>Disabled State</div>
                <div className='flex gap-4'>
                    <Button label='Enabled' onClick= {handleDanger} color='danger' />
                    <Button label='Disabled' onClick= {handleClick} color='danger' disable={true}/>
                </div>
            </div>
            <div className='text-2xl google-sans-rpe border bg-trendy-pink-800 text-white flex p-4 rounded-xl justify-center w-xl '>
                <div>Count: {count}</div>
            </div>
        </div>
    )
}

export default BasicProp