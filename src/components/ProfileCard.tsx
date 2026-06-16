
interface ActionDet{
    label: string,
    onClick: ()=> void,
    className: string
}
interface User{
    name: string,
    email: string,
    avatar: string,
    role: string,
    status: string,
    stats: {
        Posts: string,
        Followers: string,
        Following: string
    }
}
interface Theme{
    backgroundColor: string,
    textColor: string,
    avatarBg: string,
    badgeBg: string
}
interface Action{
    primary: ActionDet,
    secondary: ActionDet
}

interface ProfileCardProps{
    user:User,
    theme:Theme,
    action:Action
}

function ProfileCard(prop: ProfileCardProps) {

  return (
    <div className={`container flex flex-col ${prop.theme.backgroundColor} rounded-lg p-5`}>
        <div className=" top flex flex-row">
            <span className={`${prop.theme.avatarBg} rounded-[50%] text-4xl  w-[4rem] h-[4rem] flex flex-row justify-center items-center`}>{prop.user.avatar}</span>
            <div className={`{${prop.theme.textColor} px-4 flex flex-col gap-1`}>
                <div className={`{ ${prop.theme.textColor} font-bold`}>{prop.user.name}</div>
                <div className={`{ ${prop.theme.textColor} `}>{prop.user.email}</div>
                <div className="flex flex-row gap-4">
                    <div className={`${prop.theme.badgeBg} rounded-lg p-1`}>{prop.user.role}</div>
                    <div className={`${prop.theme.badgeBg} rounded-lg p-1`}>{prop.user.status}</div>
                </div>
            </div>
        </div>
        <div className="pb-[0.5rem]"></div>
        <hr className="border-gray-300 "></hr>
        <div className="bottom flex flex-row gap-4 p-2 justify-around">
            {Object.entries(prop.user.stats).map(([key, value])=>(
                <div>
                    <div className="text-center font-extrabold text-2xl">
                        {value}
                    </div>
                    <div className={`text-center ${prop.theme.textColor} text-sm`}>
                        {key}
                    </div>
                </div>
            ))}
        </div>
        <div className="btns flex flex-row gap-4 ">
            <button onClick={prop.action.primary.onClick} className={`${prop.action.primary.className} rounded-2xl px-4 py-2 w-full`}>{prop.action.primary.label}</button>
            <button onClick={prop.action.secondary.onClick} className={`${prop.action.secondary.className} rounded-2xl px-4 py-2 w-full`}>{prop.action.secondary.label}</button>
        </div>
    </div>
  )
}

export default ProfileCard