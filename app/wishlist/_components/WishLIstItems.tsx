import React from 'react'
import { WishListActionButtons } from '../page'
import Card from '@/components/Home/Card'

const WishLIstItems = () => {
  return (
    <>
    <div className="w-full flex items-center justify-between">
          <h1 className="text-Button title-20-regular">WishList(3)</h1>
            <WishListActionButtons>Move All To Bag</WishListActionButtons>
        </div>
        <div className="flex gap-4">
          {Array(5)
            .fill(0)
            .map((ele, i) => (
              <Card key={i} isInWishList={true} />
            ))}
        </div>
    </>
  )
}

export default WishLIstItems
