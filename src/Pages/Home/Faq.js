import React from 'react';

const Faq = () => {
    return (
        <div>
            <h1 className="text-primary text-center text-4xl font-bold my-12 underline uppercase">faq</h1>
            <div class="card shadow-2xl lg:w-6/12 sm:w-9/12 mx-auto p-6">
                <div tabindex="0" class="collapse collapse-arrow border border-base-200 bg-base-100 rounded-box my-2">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-200 bg-base-100 rounded-box my-2">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-200 bg-base-100 rounded-box my-2">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-200 bg-base-100 rounded-box my-2">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div class="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;