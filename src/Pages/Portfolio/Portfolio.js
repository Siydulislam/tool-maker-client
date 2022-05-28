import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            "name": "Burger Builder",
            "img": "https://i.ibb.co/Hq7CbBB/burger-builder.png",
            "site": "https://burger-builder-c6780.firebaseapp.com/"
        },
        {
            "name": "Book Shelf",
            "img": "https://i.ibb.co/4MNwBTG/book-shelf.png",
            "site": "https://book-depo-7075a.firebaseapp.com/"
        },
        {
            "name": "Creative Agency",
            "img": "https://i.ibb.co/RbcVWKz/creative-agency.png",
            "site": "https://creative-agency-eba73.firebaseapp.com/"
        }
    ]
    return (
        <div>
            <h1 className="text-primary text-center text-4xl font-bold my-12 underline uppercase">Projects</h1>
            <h1 className="text-center m-16 text-xl text-primary">Hello, My name is Siydul Islam, but my nearest one call me Sojib. I have completed my graduation from Rajshahi University, situated in the northern part of Bangladesh, in Chemistry. Basically, I am a self-taught learner which will encourage me to explore new things. Being a human, I like to communicate with others, and to understand them. Likewise, I have interested in programming language to communicate with the machine. I have been learning programming language especially Javascript for sixteen months, started as web development. Among popular technologies, I have comfortable with HTML, CSS, Bootstrap, Tailwind, Javascript, ReactJS, NodeJS, ExpressJS, MongoDB etc.. <br />email: siydulislam333@gmail.com</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16 mt-16'>
                {
                    projects.map(project => <div class="card mx-auto w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={project.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{project.name}</h2>
                            <div class="card-actions justify-end text-primary">
                                <a href={project.site} alt={project.name}>Live Link</a>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Portfolio;