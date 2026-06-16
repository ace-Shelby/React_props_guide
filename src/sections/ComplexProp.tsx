import Container from "../components/Container"
import ProfileCard from "../components/ProfileCard"
import Card from "../components/Card"
import { useState } from "react"

function ComplexProp() {

  const users = [
    {
      user:{
        name:"Polly Gray",
        email:"polly@peaky.com",
        avatar:"💃🏻",
        role:"Admin",
        status:"Active",
        stats:{
          Posts:"23",
          Followers:"222",
          Following:'111'
        }
      },
      theme:{
        backgroundColor:"bg-gradient-to-br from-amber-100 to-green-100",
        textColor:"text-gray-700",
        avatarBg:"bg-purple-300",
        badgeBg:"bg-purple-200"
      },
      actions:{
        primary:{
          label: "View Profile",
          onClick: ()=>setMsg("Viewing Alice's profile"),
          className: "text-white bg-purple-600 hover:bg-purple-700"
        },
        secondary:{
          label: "Message",
          onClick: ()=>setMsg("Opening message to Alice"),
          className: "text-white bg-blue-500 hover:bg-blue-600"
        }
      }
    },
    {
      user:{
        name:"Arthur Shelby",
        email:"arthur@peaky.com",
        avatar:"🕺🏻",
        role:"Developer",
        status:"Active",
        stats:{
          Posts:"3",
          Followers:"119",
          Following:'5'
        }
      },
      theme:{
        backgroundColor:"bg-gradient-to-br from-green-100 to-orange-100",
        textColor:"text-gray-800",
        avatarBg:"bg-green-300",
        badgeBg:"bg-green-200"
      },
      actions:{
        primary:{
          label: "View Profile",
          onClick: ()=>setMsg("Viewing Arthur's profile"),
          className: "text-white bg-green-600 hover:bg-green-700"
        },
        secondary:{
          label: "Message",
          onClick: ()=>setMsg("Opening message to Arthur"),
          className: "text-white bg-blue-500 hover:bg-blue-600"
        }
      }
    }
    
  ]
  const [msg, setMsg] =useState("Press button to see the message.");
  return (
        <div className='flex flex-col gap-4 mx-10 my-4 border border-trendy-pink-950 p-4 rounded-3xl bg-trendy-pink-200 google-sans-rpe' >
            <div className='text-bold text-2xl text-trendy-pink-950 google-sans-rpe '>
                ComplexProp
            </div>
            <div className='text-trendy-pink-950 google-sans-rpe text-md'>
                Complex props allow you to pass nested objects and functions, enabling sophisticated component configuration and interactions.
            </div>
            <div className="font-bold ">User Profile cards: </div>
            <Container format="grid">
              {
                users.map(u=>(
                  <ProfileCard user={u.user} theme={u.theme} action={u.actions}></ProfileCard>
                ))
              }
            </Container>
            <Card color="primary" title="Notification">
              {msg}
            </Card>
        </div>
    )
}

export default ComplexProp