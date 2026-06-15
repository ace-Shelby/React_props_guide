import Button from '../components/Button'
import Card from '../components/Card'
import { useState } from 'react'
import Container from '../components/Container'

function ChildrenProp() {
  const [btnColor, setBtnColor] = useState("primary")
  function handleClick(){
    if(btnColor === 'primary'){
      setBtnColor("danger")
    }else{
      setBtnColor('primary')
    }
  }
  return (
        <div className='flex flex-col gap-4 mx-10 my-4 border border-trendy-pink-950 p-4 rounded-3xl bg-trendy-pink-200 ' >
            <div className='text-bold text-2xl text-trendy-pink-950 google-sans-rpe '>
                ChildrenProp
            </div>
            <div className='text-trendy-pink-950 google-sans-rpe text-md'>
                The Children prop allows you to pass JSX elements or components as children to other components, enabling component composition.
            </div>
            <div className=' text-trendy-pink-950'>

                <div className='font-bold pb-4'>Card component with children: </div>
                <Container format='grid'>
                  <Card color='red' title='Warning'>
                    <p>
                      Your trial period ends in 5 days. Please upgrade your account to continue using all features.
                    </p>
                  </Card>
                  <Card color={'blue'} title='Quick Actions'>
                    <Button color={btnColor} label='Change Color' onClick={handleClick}/>
                  </Card>
                  <Card color='primary' title='User Profile'>
                    <div><span className='font-bold'>Name:</span> <span className='text-gray-500'>Thomas Shelby</span></div>
                    <div><span className='font-bold'>Gang:</span> <span className='text-gray-500'>Peaky Blinders</span></div>
                  </Card>
                  <Card color='green' title='Write Anything'>
                    <textarea className='border border-green-500 rounded-xl p-2' placeholder='By the order of peaky fookin blinders...'></textarea>
                  </Card>
                </Container>
            </div>
        </div>
    )
}

export default ChildrenProp