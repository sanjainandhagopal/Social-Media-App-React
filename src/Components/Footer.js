import React from 'react'

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer>Copyright &copy; {year}</footer>
  )
}

export default Footer