import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from '../Profile/Posts/Posts'

function Profile() {
  return (
    <div className={s.profile}>
        <ProfileInfo />
        <Posts />
    </div>
  )
}

export default Profile