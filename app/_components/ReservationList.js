"use client";
import React from "react";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

const ReservationList = ({ bookings }) => {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
};

export default ReservationList;
