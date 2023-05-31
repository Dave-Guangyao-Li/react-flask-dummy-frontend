// import { blogPosts } from './data.js'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function fetchBlogPostInfo() {
  return fetch('/blogs', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      return { status: response.status }
    }
  })
}

function BlogPostInfo() {
  const [response, setResponse] = useState(null)
  useEffect(() => {
    fetchBlogPostInfo().then(setResponse)
  }, [])

  return (
    <span>
      <h2>Server Response BlogPostInfo</h2>
      <pre>{response ? JSON.stringify(response, null, 2) : 'Loading...'}</pre>
    </span>
  )
}
export default BlogPostInfo
