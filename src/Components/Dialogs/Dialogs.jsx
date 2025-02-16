import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

function Dialog(props) {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

function Message(props) {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <Dialog id='1' name='User 1' />
        <Dialog id='2' name='User 2' />
        <Dialog id='3' name='User 3' />
        <Dialog id='4' name='User 4' />
        <Dialog id='5' name='User 5' />
        <Dialog id='6' name='User 6' />
      </div>
      <div className={s.messages}>
        <Message message='Hi!' />
        <Message message='How are you?' />
        <Message message='Yo!' />
      </div>
    </div>
  )
}

export default Dialogs