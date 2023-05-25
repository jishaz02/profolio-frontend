 import React, {useState} from 'react'
 import {data, categories} from '../Data/data'
import { Link } from 'react-router-dom'
 
 const Topics = () => {
    const [topics, setopics] = useState(data)
   return (
         <div className="bg-[url('assets/images/meshgradient.png')]"> 
         <p className=' text-white font-semibold text-2xl px-5 py-5'>All Topics</p>
     <div className='flex flex-col justify-start items-start p-6'>
       
        {
            categories.map((category) => {
                const {id, name} = category
                return (
                    <div key={id}>
                        <h1 className='text-center text-2xl font-medium opacity-95 p-4 text-white'>{name}</h1>
                        <div className=' grid grid-cols-2 lg:grid-cols-3 gap-14 w-auto h-auto'>
                        {
                            topics.map((item, index) => { 
                                if(item.categoryid === id){
                                    return (
                                        <Link to="/topicinfo">
                                        <div key={index} className=' border shadow-lg hover:scale-105 rounded-lg duration-300 flex flex-col justify-center items-center'>
                                            <img src={item.image} alt={item.name}
                                            className=' w-full h-[260px] object-cover rounded-t-lg'
                                            />
                                            <div className=' flex justify-between px-2 py-4'>
                                                <p className=' font-medium text-white  '>{item.name}</p>
                                                
                                            </div>
                                            </div>
                                        </Link>
                                    )
                                }
                        })
                        }
                        </div>
        </div>
                )
            })
        }
    </div>
    </div>
     
   )
 }
 
 export default Topics
 