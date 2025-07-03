import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map';
import type { TripData, TripDay } from './types';

function App() {
  const [tripData, setTripData] = useState<TripData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState<TripDay | null>(null);
  const [hoveredActivityId, setHoveredActivityId] = useState<number | null>(null);

  useEffect(() => {
    const loadTripData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      fetch('/mock-trip.json')
        .then((res) => res.json())
        .then((data) => {
          setActiveDay(data.days[0]);
          setTripData(data);
        });
      setLoading(false);
    };

    loadTripData();
  }, []);

  const handleDayClick = (day: TripDay) => {
    setActiveDay(day);
    setHoveredActivityId(null);
  };

  const handleActivityHover = (activityId: number) => {
    setHoveredActivityId(activityId);
  };

  const handleActivityLeave = () => {
    setHoveredActivityId(null);
  };

  if (loading) {
    return (
      <div className='loading'>
        <div className='spinner'></div>
        <div>Завантаження маршруту...</div>
      </div>
    );
  }

  if (!tripData) {
    return (
      <div className='loading'>
        <div>Помилка завантаження даних</div>
      </div>
    );
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <h1 className='trip-title'>{tripData.trip_title}</h1>

        <div className='days-list'>
          {tripData.days.map((day) => (
            <div
              key={day.id}
              className={`day-item ${activeDay?.id === day.id ? 'active' : ''}`}
              onClick={() => handleDayClick(day)}>
              <div className='day-title'>{day.title}</div>
            </div>
          ))}
        </div>

        {activeDay && (
          <div className='activities-section'>
            <h2 className='activities-title'>Заплановані активності</h2>
            {activeDay.activities.map((activity) => (
              <div
                key={activity.id}
                className={`activity-item ${
                  hoveredActivityId === activity.id ? 'highlighted' : ''
                }`}
                onMouseEnter={() => handleActivityHover(activity.id)}
                onMouseLeave={handleActivityLeave}>
                <img
                  className='activity-image'
                  src={activity.photo_url}
                  alt={activity.name}
                  onError={(e) => {
                    e.currentTarget.src = './src/assets/image-not-found.png';
                  }}
                />
                <div className='activity-info'>
                  <div className='activity-name'>{activity.name}</div>
                  <div className='activity-description'>{activity.description}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='map-container'>
        <div className='map-title'>{activeDay ? activeDay.title : 'Карта маршруту'}</div>
        <Map
          activeDay={activeDay}
          hoveredActivityId={hoveredActivityId}
          onHover={handleActivityHover}
          onLeave={handleActivityLeave}
        />
      </div>
    </div>
  );
}

export default App;
