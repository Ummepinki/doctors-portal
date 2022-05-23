import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis nobis iusto aspernatur alias libero autem voluptatibus accusantium eaque repellendus recusandae voluptate, dolorem facere ipsam rem architecto, tempora cumque sunt cum doloribus culpa in voluptatum! Esse voluptatem voluptatum nostrum non.</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;