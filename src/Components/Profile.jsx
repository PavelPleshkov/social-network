import s from './Profile.module.css'

function Profile() {
  return (
    <div className={s.profile}>
      <img className={s.headpic} src='https://cdn.pixabay.com/photo/2016/07/30/19/47/banner-1557834_1280.jpg' alt='profile header'/>
    </div>
  )
}

export default Profile