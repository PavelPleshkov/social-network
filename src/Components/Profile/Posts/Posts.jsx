import s from './Posts.module.css'
import Post from './Post/Post'

function Posts() {
  return (
    <div className={s.posts}>
      Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi! How are you?' likesCount='15'/>
        <Post message="It's my first post!" likesCount='23'/>
      </div>
    </div>
  )
}

export default Posts