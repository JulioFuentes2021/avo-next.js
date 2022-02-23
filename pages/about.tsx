import React from 'react'

const About = () => {
  const t = process.env.DB_HOST
  console.log(t)

  return (
    <div>This is the About {t}</div>
  )
}

export default About