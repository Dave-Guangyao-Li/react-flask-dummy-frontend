import './App.css';
import { withAuthInfo } from '@propelauth/react';

const App = withAuthInfo(({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div>
      The User is logged in
    </div>
  } else {
    return <div>
      The User is logged out
    </div>
  }
})

export default App;
