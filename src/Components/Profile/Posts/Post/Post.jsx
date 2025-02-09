import s from './Post.module.css'
import avatarCat from '../../../../images/avatar-cat.png'


function Post(props) {
  return (
    <div className={s.post}>
      <img src={avatarCat} alt="post avatar" />
      {props.message}
      <div>{props.likes} likes</div>
    </div>
  )
}

export default Post