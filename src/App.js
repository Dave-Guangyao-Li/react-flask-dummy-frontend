import './App.css';
import { useLogoutFunction, useRedirectFunctions, withAuthInfo } from '@propelauth/react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import UserInfo from './components/UserInfo';
import AuthenticatedRequest from './components/AuthenticatedRequest';
import ListOfOrgs from './components/ListOfOrgs';
import OrgInfo from './components/OrgInfo';
const App = withAuthInfo(({ isLoggedIn }) => {
  const logoutFn = useLogoutFunction()
  const { redirectToSignupPage, redirectToLoginPage } = useRedirectFunctions();

  if (isLoggedIn) {
    return <div>
      <p>The User is logged in</p>
      <button onClick={() => logoutFn()}>
        Click here to log out
      </button>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/auth" element={<AuthenticatedRequest />} />
        <Route path="/orgs" element={<ListOfOrgs />} />
        <Route path="/org/:orgName" element={<OrgInfo />} />

      </Routes>
    </div>
  } else {
    return <div>
      To get started, please log in as test user.
      <br />
      <button onClick={() => redirectToSignupPage()}>
        Sign up
      </button>
      <button onClick={() => redirectToLoginPage()}>
        Log in
      </button>
    </div>
  }
})

export default App;
