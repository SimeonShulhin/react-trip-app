// components/Map.tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import type { TripDay } from '../types';

type Props = {
  activeDay: TripDay | null;
  hoveredActivityId: number | null;
  onHover: (id: number) => void;
  onLeave: () => void;
};

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 48.3794,
  lng: 31.1656,
};

const Map = ({ activeDay, hoveredActivityId, onHover, onLeave }: Props) => {
  const apiKey = import.meta.env.VITE_Maps_API_KEY;

  const center = activeDay?.activities[0]
    ? {
        lat: activeDay.activities[0].coords.lat,
        lng: activeDay.activities[0].coords.lng,
      }
    : defaultCenter;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {activeDay?.activities.map((activity) => (
          <Marker
            key={activity.id}
            position={{ lat: activity.coords.lat, lng: activity.coords.lng }}
            animation={
              hoveredActivityId === activity.id ? window.google.maps.Animation.BOUNCE : undefined
            }
            onMouseOver={() => onHover(activity.id)}
            onMouseOut={onLeave}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
