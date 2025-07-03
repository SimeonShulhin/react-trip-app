import ActivityCard from './ActivityCard'
import type { TripDay, Activity } from '../types'

interface Props {
  days: TripDay[]
  activeDayIndex: number
  setActiveDayIndex: (index: number) => void
  onHover: (id: number | null) => void
}

const Sidebar = ({ days, activeDayIndex, setActiveDayIndex, onHover }: Props) => {
  return (
    <div className="sidebar">
      <ul>
        {days.map((day, idx) => (
          <li
            key={day.id}
            className={idx === activeDayIndex ? 'active' : ''}
            onClick={() => setActiveDayIndex(idx)}
          >
            День {idx + 1}: {day.title}
          </li>
        ))}
      </ul>

      <div className="activities">
        {days[activeDayIndex].activities.map((activity: Activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onHover={onHover}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
