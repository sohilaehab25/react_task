import React from 'react';
import Classes from './Classes';

function ListClasses(props) {

    return (
        
            <div className='bg-light p-5 text-center'>
            <div className="container">
                <h1 className='mb-5'>Our Classes</h1>
                <div className="row">
                 <Classes  name="ClassA"/>
                 <Classes  name="ClassB"/>
                 <Classes  name="ClassC"/>
                 <Classes  name="ClassF"/>
                 </div>
            </div>
        </div>
    )
}

export default ListClasses;
