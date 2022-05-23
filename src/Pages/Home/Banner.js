import React from 'react';
import BannerImage from "../../Assets/Images/banner.jpg";

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse lg:px-24">
                <img src={BannerImage} class="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;