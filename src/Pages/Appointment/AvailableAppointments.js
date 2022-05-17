import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Loading from '../Shared/Loading';


const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://fierce-bastion-47234.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary font-bold text-center'> Available appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                refetch={refetch}
                setTreatment={setTreatment}>
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointments;