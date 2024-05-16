import { useState } from 'react';
import React from 'react';
import {ChildForm} from '../children/ChildForm'
import Children from './Children';

function ListChildren() {
    // let [ListChildren, setChild] = useState

    return (
        
            <div className='bg-light p-5 text-center'>
            <div className="container">
                <h1 className='mb-5'>Our Children</h1>
                <div className="row">
                 <Children  image="./images/floor2.jpg"  name="soso" desc = "child in classA"/>
                 <Children  image="./images/floor2.jpg"  name="maro" desc = "child in classC"/>
                 <Children  image="./images/floor3.jpg"  name="hajora" desc = "child in classB"/>
                 <Children  image="./images/floor3.jpg"  name="nona" desc = "child in classC"/>
                 <Children  image="./images/floor2.jpg"  name="toto" desc = "child in classC"/>
                 <Children  image="./images/floor2.jpg"  name="hossam" desc = "child in classA"/>
                 <Children  image="./images/floor2.jpg"  name="kareem" desc = "child in classB"/>
                 </div>
            </div>
        </div>
    )
}

export default ListChildren;
