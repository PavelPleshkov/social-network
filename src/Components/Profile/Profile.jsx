import s from './Profile.module.css'
import no_avatar from '../../images/avatar.png'
import banner from '../../images/profile_banner.webp'
import Posts from '../Profile/Posts/Posts'

function Profile() {
  return (
    <div className={s.profile}>
      <div>
        <img className={s.banner} src={banner} alt='profile poster' />
      </div>
      <div className={s.container}>
        <div>
          <img className={s.avatar} src={no_avatar} alt='avatar' />
          <div>
            Description
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile