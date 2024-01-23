/* eslint-disable react/prop-types */

import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props

    return (
        <div className="flex justify-between items-center border border-black w-80 p-4  rounded-lg mb-4">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span>01.02.23</span>
                    <span className="font-bold text-gray-400">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
                <span className="font-bold text-2xl text-green-500">${totalPrice}</span>
                </p>
                
            </div>
        </div>
        )}

export default OrdersCard