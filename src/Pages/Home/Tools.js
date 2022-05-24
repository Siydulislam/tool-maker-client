import React from 'react';
import Wrench from '../../Assets/Images/wrench.jpg';
import Chisel from '../../Assets/Images/chisel.jpg';
import Drill from '../../Assets/Images/drill.jpg';
import Hammer from '../../Assets/Images/hammer.jpg';
import Tool from './Tool';

const Tools = () => {
    const tools = [
        {
            _id: 1,
            name: "Wrench",
            description: "Very useful tool",
            image: Wrench
        },
        {
            _id: 1,
            name: "Chisel",
            description: "Very useful tool",
            image: Chisel
        },
        {
            _id: 1,
            name: "Drill Machine",
            description: "Very useful tool",
            image: Drill
        },
        {
            _id: 1,
            name: "Hammer",
            description: "Very useful tool",
            image: Hammer
        }
    ]
    return (
        <div>
            <h1 className="text-primary text-center text-4xl font-bold my-12 underline uppercase">Tools We Made</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;