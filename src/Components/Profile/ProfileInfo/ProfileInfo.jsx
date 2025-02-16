import s from './ProfileInfo.module.css'
import no_avatar from '../../../images/avatar.png'
import banner from '../../../images/profile_banner.webp'

function ProfileInfo() {
  return (
    <div className='profileInfo'>
      <div>
        <img className={s.banner} src={banner} alt='profile poster' />
      </div>
      <div className={s.userInfo}>
        <img className={s.avatar} src={no_avatar} alt='avatar' />
        <div className={s.description}>
          Description
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;