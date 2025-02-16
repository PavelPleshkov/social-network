import s from './Posts.module.css'
import Post from './Post/Post'

function Posts() {
  return (
    <div className={s.posts}>
      <h3>Posts</h3>
      <div>
        <div>
          <textarea placeholder='New post'></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Hi! How are you?' likesCount='15'/>
        <Post message="It's my first post!" likesCount='23'/>
      </div>
    </div>
  )
}

export default Posts