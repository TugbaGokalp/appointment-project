import React from 'react'
import { Container } from 'react-bootstrap'

const AppointmentList = ({appointments}) => {
  return (
    <Container className='p-2'>
      <h3 className='display-6 mb-2'>Appointment List</h3>
      {!appointments.length && <img src='./img/appointment.jpg' width="50%" alt='appointment-img'/>}
        
    </Container>
  )
}

export default AppointmentList