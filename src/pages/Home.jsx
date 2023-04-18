import React, { useState } from "react";
import { appointmentData } from "../helper/data";
import { doctorData } from "../helper/data";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  const [doctors, setDoctors] = useState(doctorData);

  return (
    <main className="text-center mt-2">
      <h1 className="mt-5 mb-5 text-danger display-3">🍀CLOVER HOSPITAL</h1>
      

      <Doctors
        appointments={appointments}
        doctors={doctors}
        setAppointments={setAppointments}
      />

      <AppointmentList appointments={appointments} setAppointments={setAppointments} />
    </main>
  );
};

export default Home;
