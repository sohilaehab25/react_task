import React from 'react'
import Slider from './Slider'
import ListClasses from '../classes/ListAllclasses'

export function Home() {
    return (
        <>

            <div className='bg-primary'>
                <Slider/>
                <ListClasses/>
            </div>
        </>
    )
}
