import React from 'react'
import Card from './Card'
import pizza1 from '../assets/pizza1.png'
import pizza2 from '../assets/pizza2.png'
import pizza3 from '../assets/pizza3.png'

const PopularDishes = () => {

    const menu = [
        {
            id:1,
            pizza: pizza1,
            name: "Hawaiian Pizza",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laudantium hic voluptas.",
            rating: 4
        },
        {
            id:2,
            pizza: pizza2,
            name: "Neapolitan Pizza",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laudantium hic voluptas.",
            rating: 4
        },
        {
            id:3,
            pizza: pizza3,
            name: "Margherita Pizza",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laudantium hic voluptas.",
            rating: 4.5
        },
    ]

    return (
        <div className='px-5 py-10 bg-gray-800 lg:px-0 lg:py-20' id='menu'>
            <div className='mx-auto text-center max-w-7xl'>
                <h1 className='text-3xl font-bold text-red-500 lg:text-4xl'>Popular Dishes</h1>
                <p className='pt-2 text-sm text-white lg:text-xl'>Check out our most popular and highly-rated dishes.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-11 gap-7'>
                    {
                        menu.map((item)=>{
                            return <Card key={item.id} menu={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularDishes
