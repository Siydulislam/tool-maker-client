import React from 'react';

const Contact = () => {
    return (
        <div className="mt-12">
            <div class="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/qY4ykbp/banner.jpg)" }}>
                <div class="hero-overlay bg-opacity-90"></div>
                <div class="w-full max-w-sm bg-transparent">
                    <h1 className="text-primary text-center text-4xl underline uppercase font-bold">Contact</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-primary font-bold text-xl">Email</span>
                        </label>
                        <input type="text" placeholder="Email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-primary font-bold text-xl">Subject</span>
                        </label>
                        <input type="text" placeholder="Subject" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-primary font-bold text-xl">Message</span>
                        </label>
                        <textarea rows={6} type="text" placeholder="Your message" class="input input-bordered" />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;