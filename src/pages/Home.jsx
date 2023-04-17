import React, { useState } from 'react'
import { appointmentData } from '../helper/data'
import { doctorData } from '../helper/data'
import Doctors from '../components/Doctors';

const Home = () => {
const [appointments, setAppointments] = useState(appointmentData)
const [doctors, setDoctors] = useState(doctorData)
    
  return (
    <main className='text-center mt-2'>
        <h1 className='mt-5 text-danger'>🏥TUGBA HOSPITAL</h1>
        <h2>Our Doctors</h2>

<Doctors appointments={appointments} doctors={doctors} setAppointments={setAppointments}/>
    </main>
  )
}

export default Home