import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid'


const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } = useContext(ShoppingCartContext)

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon onClick={() => closeCheckoutSideMenu()} className='h-6 w-6 text-black cursor-pointer' />
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;