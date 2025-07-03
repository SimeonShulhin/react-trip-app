import type { Activity } from '../types'

interface Props {
  activity: Activity
  onHover: (id: number | null) => void
}

const ActivityCard = ({ activity, onHover }: Props) => {
  return (
    <div
      className="activity-card"
      onMouseEnter={() => onHover(activity.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img src={activity.photo_url} alt={activity.name} />
      <h4>{activity.name}</h4>
      <p>{activity.description}</p>
    </div>
  )
}

export default ActivityCard
