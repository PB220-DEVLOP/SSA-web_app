import React from 'react'
import { FcAcceptDatabase,FcDataProtection,FcDeleteDatabase ,FcHighPriority} from "react-icons/fc"

function ItemCard({title,amount, icon}) {
    let IconComponent;
    // Check the value of the 'icon' prop and set the 'IconComponent' accordingly
    if (icon === 'pass') {
      IconComponent = FcAcceptDatabase;

    } else if (icon === 'attend') {
      IconComponent = FcDataProtection;

    } else if (icon === 'fail') {
      IconComponent = FcDeleteDatabase;

    } else {
      // Default icon when 'icon' prop is undefined or doesn't match any specific icon
      IconComponent = FcHighPriority;
    }
  return (
    <div className={`px-3 py-2 w-[45%] sm:w-[20%] bg-white  md:w-auto gap-4  flex items-center justify-between  shadow-md rounded-md md:p-4`}>
        <div className=''>
        <IconComponent className="text-[50px]" />
        </div>
            <div className="flex flex-col items-center">
                <span className='tex-md md:text-2xl'>{title}</span>
                <span className='tex-md md:text-xl'>{amount}</span>
            </div>
    </div>
  )
}

export default ItemCard