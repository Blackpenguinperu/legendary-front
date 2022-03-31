import React, { useState } from 'react'


const Hoome = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const onFormSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:9000/api/users/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    const userData = await response.json()
    console.log(userData)
  }
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input value={loginData.email} type="email" placeholder="email" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
        <input value={loginData.password} type="password" placeholder="password" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Hoome