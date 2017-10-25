export type Bookable = {
  label: string,
  value: string,
}

export type Booking = {
  studio: string,
  start: string, // these times should actually be Moments
  end: string,
  bookable: Bookable,
}
