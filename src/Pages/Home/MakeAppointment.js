import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-2xl text-white'>Make an appointment today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti, nihil dolorem mollitia natus et asperiores distinctio facilis nesciunt in nemo, consequuntur officiis a expedita odit quas aspernatur minima doloremque.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;