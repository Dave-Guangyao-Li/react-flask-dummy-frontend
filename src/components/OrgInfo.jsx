import { withAuthInfo } from '@propelauth/react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

async function fetchOrgInfo(orgId, accessToken) {
  //   console.log(orgId, accessToken)
  const response = await fetch(`/org/${orgId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
  console.log('response: ', response)
  if (response.ok) {
    return response.json()
  } else {
    return { status: response.status }
  }
}

function OrgInfo({ orgHelper, accessToken }) {
  const { orgName } = useParams()
  const orgId = orgHelper.getOrgByName(orgName).orgId

  const [response, setResponse] = useState(null)
  //   console.log(response)
  useEffect(() => {
    fetchOrgInfo(orgId, accessToken).then(setResponse)
  }, [orgId, accessToken])

  return (
    <div>
      <p>{response ? JSON.stringify(response) : 'Loading...'}</p>
    </div>
  )
}

export default withAuthInfo(OrgInfo)
