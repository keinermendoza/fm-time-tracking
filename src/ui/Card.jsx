import iconWrok from "/images/icon-work.svg"
import iconPlay from "/images/icon-play.svg"
import iconStudy from "/images/icon-study.svg"
import iconExercise from "/images/icon-exercise.svg"
import iconSocial from "/images/icon-social.svg"
import iconCare from "/images/icon-self-care.svg"

const timeLabels = {
    daily:"day",
    weekly:"week",
    monthly:"month"
}

const backgroundColors = {
    "Work": "bg-clr-red",
    "Play": "bg-clr-blue",
    "Study": "bg-clr-pink",
    "Exercise": "bg-clr-green",
    "Social": "bg-clr-violet",
    "Self Care": "bg-clr-orange",
}

const backgroundImages = {
    "Work": iconWrok,
    "Play": iconPlay,
    "Study": iconStudy,
    "Exercise": iconExercise,
    "Social": iconSocial,
    "Self Care": iconCare,
}

export default function Card({title, timeframes, selectedTime}) {
    return (
    <div className={`${backgroundColors[title]} overflow-hidden relative pt-9 rounded-2xl flex flex-col justify-end`}>
        <img className='absolute -top-1 right-5 hover:text-clr-white' src={backgroundImages[title]} alt="" />
        <div className="bg-clr-darkGray cursor-pointer hover:bg-[#34397b] z-10 rounded-2xl p-6 py-[1.85rem] flex flex-col gap-2 lg:gap-6">
            <div className="flex justify-between items-center">
                <h2 className="font-medium">{title}</h2>
                <button className='text-clr-gray hover:text-clr-white' aria-label="options">
                    <svg  width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" /></svg>
                </button>
            </div>
            <div className="font-light flex justify-between items-center lg:flex-col lg:gap-4 lg:items-start">
                <p className='text-white text-[2rem] lg:text-5xl'>
                    {timeframes[selectedTime].current}hrs
                </p>
                <p className='text-clr-gray text-sm font-normal'>
                    <span>Last {timeLabels[selectedTime]} - </span>
                    {timeframes[selectedTime].current}hrs
                </p>
            </div>
        </div>

    </div>
  )
}
