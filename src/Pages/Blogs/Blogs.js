import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            "question": "How will you improve the performance of a React Application?",
            "answer": "React application, including pre-optimization techniques, includes component state local where necessary, memoizing components to prevent unnecessary re-renders,  using dynamic import code-splitting in React, windowing or list virtualization in React, and lazy loading images in React"
        },
        {
            "question": "What are the different ways to manage a state in a React Application?",
            "answer": "There are four main types of state we need to properly manage in our React apps which includes Local state, Global state, Server state, URL state. Local (UI) state is managed in one or another component and Local state is most often managed using the useState hook. Global state is managed across multiple components and is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Data that comes from an external server that must be integrated with our UI state. Data that exists on our URLs, including the pathname and query parameters"
        },
        {
            "question": "How does prototypical inheritance work?",
            "answer": "The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties."
        },
        {
            "question": "Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?",
            "answer": ""
        },
        {
            "question": "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
            "answer": "First of all, create an empty variable, then initialize it with 1. In a loop traverse through each element (or get each element from user) multiply each element to product and lastly print that product in console."
        },
        {
            "question": "What is a unit test? Why should write unit tests?",
            "answer": "Unit testing involves individual components testing of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output. The main objective of unit testing is to ensure that each individual part is working well and as it's supposed to work. The entire system will only be able to work well if the individual parts are working well. Unit testing is performed by the software developers themselves. Sometimes, independent software testers also perform these tests."
        }
    ]
    return (
        <div>
            <h1 className="text-primary text-center text-4xl font-bold my-12 underline uppercase">Blogs</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16 mt-16'>
                {
                    blogs.map(blog => <div class="card mx-auto w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">{blog.question}</h2>
                            <h3>{blog.answer}</h3>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;