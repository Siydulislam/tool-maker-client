import React from 'react';
import BannerImage from "../../Assets/Images/banner.jpg";

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse lg:px-24">
                <img src={BannerImage} class="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 class="text-5xl font-bold">Tool Maker- We Make it Better</h1>
                    <p class="py-6 text-xl">The manufacturing industries are industries transforming goods, that is, mainly manufacturing industries in their own right, but they also concern the repair and installation of industrial equipment and subcontracting operations for third parties.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;