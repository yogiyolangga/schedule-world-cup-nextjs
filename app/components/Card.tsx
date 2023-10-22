import React from "react";
import moment from "moment"

interface Props {
    match?: Match
    isToday?: boolean     
}

interface TeamProps {
    team?: Team
}

interface VersusProps {
    date?: string    
}

const Team = ({team}:TeamProps) => {
    return (
        <div className="flex flex-col w-1/2 items-center justify-center">
            <img alt={team?.name} src={`https://api.fifa.com/api/v3/picture/flags-sq-5/${team?.country}`} className="w-[90px] h-[60px] border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-xl" />
            <p className="font-bold text-lg mt-2 text-center">{team?.name}</p>
            <p className="font-bold text-2xl text-center">{team?.goals}</p>
        </div>
    )
}

const Versus = ({date}:VersusProps) => {
    const isFinish = moment(date).isBefore(moment())
    return (
        <div className="grid relative h-full py-3">
            <span className="absolute font-bold text-2xl place-self-center">VS</span>
            <span className="text-sm place-self-end bg-black rounded-full text-white px-3 py-1">{isFinish ? "Selesai" : moment(date).format('LT')}</span>
        </div>
    )
}

export default function Card ({match}:Props) {
    return (
        <div className="flex flex-row aspect-video border-[3px] border-black shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-xl transition-all">
            <Team team={match?.home_team} />
            <Versus date={match?.datetime} />
            <Team team={match?.away_team} />
        </div>
    )
}