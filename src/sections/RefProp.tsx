//make separate file for this function(component) if you know Redux or Zustand
import { forwardRef, useRef } from 'react';
import type { ForwardedRef } from 'react';
import Button from '../components/Button';
interface CustomInputProp {
    title: string,
}
const CustomInput = forwardRef<HTMLInputElement, CustomInputProp>((prop, ref) => {
    return(
        <div
        className={`p-4 bg-trendy-pink-50 rounded-lg border border-trendy-pink-600 flex flex-col gap-4`}>
            <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold'>{prop.title}</label>
                <input
                ref={ref}
                className='w-lg border border-trendy-pink-600 rounded-lg p-2 text-sm'
                placeholder='Write something' />
            </div>
        </div>
    )
});



function RefProp() {
    const firstRef = useRef<HTMLInputElement>(null);
    const secondRef = useRef<HTMLInputElement>(null);

    function focusFirst(){
        firstRef.current?.focus();
    }
    function getFirst(){
        if(firstRef.current){
            alert(`Input value: ${firstRef.current.value}`)
        }
    }
    function focusSecond(){
        secondRef.current?.focus();
    }
    function clearSec(){
        if(firstRef.current){
            firstRef.current.value = "";
            firstRef.current.focus();
        }
    }

    return (
        <div className='flex flex-col gap-4 mx-10 my-4 border border-trendy-pink-950 p-4 rounded-3xl bg-trendy-pink-200 ' >
            <div className='text-bold text-2xl text-trendy-pink-950 google-sans-rpe '>
                RefProp
            </div>
            <div className='text-trendy-pink-950 google-sans-rpe text-md'>
                Refs provide a way to access DOM nodes or React elements directly. Use ' forwardRef ' to pass refs to child component.
            </div>
            <CustomInput title='First Input' ref={firstRef} />
            <CustomInput title='Second Input' ref={secondRef}/>
            <div className='flex flex-row gap-4'>
                <Button label='Focus first Input' onClick={focusFirst} color='primary'></Button>
                <Button label='Focus Second Input' onClick={focusSecond} color='primary'></Button>
                <Button label='Get First Input Value' onClick={getFirst} color='secondary'></Button>
                <Button label='Clear First Input' onClick={clearSec} color='danger'></Button>
            </div>
        </div>
    )
}

export default RefProp