import { withRequiredAuthInfo } from '@propelauth/react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div>
      <Link to='/user_info'>Click Here to see user info</Link>
      <Link to='/auth'>
        Click Here to see an authenticated request to the backend
      </Link>
      <Link to='/orgs'>Click Here to see org info</Link>
    </div>
  )
}

export default withRequiredAuthInfo(Home)
