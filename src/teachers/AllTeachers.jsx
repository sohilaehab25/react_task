import React from 'react';
import TeacherInfo from './Teachersinfo';

function Teacher(props) {

    return (
        
            <div className='bg-light p-5 text-center'>
            <div className="container">
                <h1 className='mb-5'>Our Teachers</h1>
                <div className="row">
                 <TeacherInfo  image="./images/floor2.jpg"  name="sohila" desc = "teacher of classA"/>
                 <TeacherInfo  image="./images/floor2.jpg"  name="mariam" desc = "teacher of classC"/>
                 <TeacherInfo  image="./images/floor3.jpg"  name="hajar" desc = "teacher of classB"/>
                 <TeacherInfo  image="./images/image2.jpg"  name="nada" desc = "teacher of classC"/>
                 </div>
            </div>
        </div>
    )
}

export default Teacher;
