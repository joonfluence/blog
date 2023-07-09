import React from 'react'

const NoData = ({ component = 'posts' }) => {
  return <div>No {component} found.</div>
}

export default NoData
