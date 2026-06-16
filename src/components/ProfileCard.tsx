// ProfileCard.tsx — A complex component that receives deeply nested object props.
//
// LEARNING POINTS:
// - Multiple interfaces describe the shape of each prop
// - This component receives: user data, theme config, and action callbacks
// - Object.entries() converts an object into [key, value] pairs for iteration
// - onClick callbacks let the child notify the parent when an action happens
// - useTheme() lets this component also adapt its own styling for dark mode

import { useTheme } from '../sections/ThemeToggler';

// --- Interfaces define the "contract" for each prop ---

interface ActionDet {
    label: string,
    onClick: () => void,       // A function passed from the parent
    className: string
}

interface User {
    name: string,
    email: string,
    avatar: string,            // Text initials used as the avatar (e.g. "PG")
    role: string,
    status: string,
    stats: {                   // Nested object — stats is an object inside User
        Posts: string,
        Followers: string,
        Following: string
    }
}

interface Theme {
    backgroundColor: string,   // Tailwind classes for the card background
    darkBackgroundColor: string, // Dark mode background classes
    textColor: string,
    darkTextColor: string,     // Dark mode text color
    avatarBg: string,
    darkAvatarBg: string,      // Dark mode avatar background
    badgeBg: string,
    darkBadgeBg: string        // Dark mode badge background
}

interface Action {
    primary: ActionDet,        // Two action buttons with different callbacks
    secondary: ActionDet
}

// The main props interface combines all the above
interface ProfileCardProps {
    user: User,
    theme: Theme,
    action: Action
}

function ProfileCard(prop: ProfileCardProps) {
    const { isDark } = useTheme();

    // Pick light or dark variants from the theme prop
    const bg = isDark ? prop.theme.darkBackgroundColor : prop.theme.backgroundColor;
    const textColor = isDark ? prop.theme.darkTextColor : prop.theme.textColor;
    const avatarBg = isDark ? prop.theme.darkAvatarBg : prop.theme.avatarBg;
    const badgeBg = isDark ? prop.theme.darkBadgeBg : prop.theme.badgeBg;

    return (
        <div className={`flex flex-col ${bg} rounded-lg p-5 transition-colors duration-300`}>
            {/* Top section: avatar + user info */}
            <div className="top flex flex-row">
                <span className={`${avatarBg} rounded-full text-lg font-bold w-14 h-14 flex flex-row justify-center items-center select-none`}>
                    {prop.user.avatar}
                </span>
                <div className={`${textColor} px-4 flex flex-col gap-1`}>
                    <div className={`${textColor} font-bold`}>{prop.user.name}</div>
                    <div className={textColor}>{prop.user.email}</div>
                    <div className="flex flex-row gap-2">
                        <div className={`${badgeBg} ${textColor} rounded-lg px-2 py-0.5 text-sm`}>{prop.user.role}</div>
                        <div className={`${badgeBg} ${textColor} rounded-lg px-2 py-0.5 text-sm`}>{prop.user.status}</div>
                    </div>
                </div>
            </div>

            <div className="py-2"></div>
            <hr className={isDark ? "border-gray-600" : "border-gray-300"} />

            {/* Stats section: uses Object.entries() to iterate over the stats object */}
            <div className="bottom flex flex-row gap-4 p-2 justify-around">
                {Object.entries(prop.user.stats).map(([key, value]) => (
                    <div key={key}>
                        <div className={`text-center font-extrabold text-2xl ${textColor}`}>
                            {value}
                        </div>
                        <div className={`text-center ${textColor} text-sm opacity-70`}>
                            {key}
                        </div>
                    </div>
                ))}
            </div>

            {/* Action buttons: onClick callbacks communicate back to the parent */}
            <div className="btns flex flex-row gap-4">
                <button
                    onClick={prop.action.primary.onClick}
                    className={`${prop.action.primary.className} rounded-2xl px-4 py-2 w-full transition-colors duration-200`}
                >
                    {prop.action.primary.label}
                </button>
                <button
                    onClick={prop.action.secondary.onClick}
                    className={`${prop.action.secondary.className} rounded-2xl px-4 py-2 w-full transition-colors duration-200`}
                >
                    {prop.action.secondary.label}
                </button>
            </div>
        </div>
    )
}

export default ProfileCard