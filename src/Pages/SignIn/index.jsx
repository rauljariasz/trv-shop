import { useContext, useState, useRef } from "react"
import { Link, Navigate } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

function SignIn() {
  const { account, setSignOut, setAccount } = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  // Acc
  const acc = localStorage.getItem('account')
  const parsedAcc = JSON.parse(acc)
  // Has an Acc
  const noAccountInLocalStorage = parsedAcc ? Object.keys(parsedAcc).length === 0 : true
  const noAccInLocalState = account ? Object.keys(account).length === 0 : true
  const hasUserAnAccount = !noAccInLocalState || !noAccountInLocalStorage

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    setSignOut(false)

    return <Navigate replace to={'/'} />
  }

  const createAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    const newData = data
    setAccount(newData)
    handleSignIn()
  }


  const renderLogIn = () => {
    return (
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAcc?.email}</span>
        </p>
        
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>{parsedAcc?.password}</span>
        </p>
        <Link to='/'>
          <button className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2" disabled={!hasUserAnAccount} onClick={() => handleSignIn()}>
            Log In
          </button>
        </Link>
        <div className='text-center'>
          <a className='font-light text-xs underline underline-offset-4' href='/'>forgot my password</a>
        </div>
        <button className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3' disabled={hasUserAnAccount} onClick={() => setView('create-user-info')}>
          Sign Up
        </button>
      </div>
    )
  }
  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-sm'>Your name:</label>
          <input type="text" 
            id="name"
            name="name"
            defaultValue={parsedAcc?.name}
            placeholder="Raul"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">Your email:</label>
          <input type="email" 
            id="email"
            name="email"
            defaultValue={parsedAcc?.email}
            placeholder="raul@example.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">Your password:</label>
          <input type="text" 
            id="password"
            name="password"
            defaultValue={parsedAcc?.password}
            placeholder="********"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to='/'>
          <button className="bg-black text-white w-full rounded-lg py-3" onClick={() => createAccount()}>
            Create
          </button>
        </Link>
      </form>
    )
  }
  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

  return (
    <>
      <h1 className='font-medium text-xl text-center mb-6 w-80'>Welcome</h1>
      {renderView()}
    </>
  )
}

export default SignIn
