import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

function SignIn() {
  const { account } = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')

  // Acc
  const acc = localStorage.getItem('account')
  const parsedAcc = JSON.parse(acc)
  // Has an Acc
  const noAccountInLocalStorage = parsedAcc ? Object.keys(parsedAcc).length === 0 : true
  const noAccInLocalState = account ? Object.keys(account).length === 0 : true
  const hasUserAnAccount = !noAccInLocalState || !noAccountInLocalStorage

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
          <button className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2" disabled={!hasUserAnAccount}>
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
      <div>
        TODO!!
      </div>
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
