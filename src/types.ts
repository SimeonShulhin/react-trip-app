export interface Activity {
  id: number
  name: string
  description: string
  photo_url: string
  coords: {
    lat: number
    lng: number
  }
}

export interface TripDay {
  id: number
  title: string
  activities: Activity[]
}

export interface TripData {
  trip_title: string
  days: TripDay[]
}
