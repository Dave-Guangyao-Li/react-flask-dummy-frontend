import { withAuthInfo } from '@propelauth/react'

function UserInfo({ user }) {
  return (
    <span>
      <h2>User Info</h2>
      {user && user.pictureUrl && (
        <img src={user.pictureUrl} alt={'profile'} className='pictureUrl' />
      )}
      <pre>user: {JSON.stringify(user, null, 2)}</pre>

      <img src={user.pictureUrl} alt={'profile'} id='user_img' />
    </span>
  )
}

export default withAuthInfo(UserInfo)
