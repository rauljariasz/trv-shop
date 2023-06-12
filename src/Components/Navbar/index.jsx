import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
  const { count } = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white">
      {/* Left */}
      <ul className="flex items-center gap-3">
        <li className="font-bold text-lg">
          <NavLink to='/'>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Others
          </NavLink>
        </li>
      </ul>

      {/* Right */}
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          raul@example.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Sign In
          </NavLink>
        </li>
        <li className="flex gap-1 items-center">
          <ShoppingCartIcon className='h-6 w-6 text-black' />
          <span>
            {count}
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar