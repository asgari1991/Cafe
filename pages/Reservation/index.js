import React from 'react'
import PageHeader from '../components/modules/PageHeader/PageHeader'
import ReservationDetails from '../components/templates/Reservation/ReservationDetails'

const Reservation = () => {
  return (
    <>
    <PageHeader route={"Reservation"}/>
    <ReservationDetails/>
    </>
  )
}

export default Reservation