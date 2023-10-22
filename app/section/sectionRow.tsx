import React from 'react';
import moment from "moment";
import Card from '../components/Card';

interface Props {
    matches? : Match[],
    date : string
}

const DateTitle = ({date}:Props) => {
    const day = moment(date).format("dddd");
    const _date = moment(date).format("Do MMM YYYY");
    const isToday = moment(date).isSame(moment(),"day")
    return (
        <div>
            <span className='font-bold'>{isToday ? "Hari ini" : day} </span>
            <span>{_date}</span>
        </div>
    )
}
export default function SectioRow ({matches, date} : Props) {
    return (
        <div className='py-10'>
            <DateTitle date={date} />
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
                {matches?.map((match,index) => (
                    <Card key={index} match={match} />
                ))}
            </div>
        </div>
    )
}