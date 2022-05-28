import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
// import { useParams } from 'react-router-dom';
import auth from '../Auth/firebase.init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [profile, setProfile] = useState({});
    const [isReload, setIsReload] = useState(false);
    const [user] = useAuthState(auth);
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [email, isReload]);

    const onSubmit = data => {

        const userInfo = {
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedin: data.linkedin
        }

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Information updated successfully!");
                    setIsReload(true);
                    reset();
                } else {
                    toast.error("Something went wrong! Please try again.")
                }
            });

    }

    return (
        <div>
            <h1 className="rounded-lg text-xl text-center underline">My Profile</h1>
            <div class="hero bg-base-100 container">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="card flex-shrink-0 w-full max-w-sm text-center lg:text-left mx-8">
                        <h3 class="text-3xl font-bold">Name: {user?.displayName}</h3>
                        <h3 class="text-2xl font-bold">Email: {user?.email}</h3>
                        <p class="py-6">Education: {profile.education ? profile.education : <hr />}</p>
                        <p class="py-6">Location: {profile.location ? profile.location : <hr />}</p>
                        <p class="py-6">Phone Number: {profile.phone ? profile.phone : <hr />}</p>
                        <p class="py-6">Linkedin Profile: {profile.linkedin ? profile.linkedin : <hr />}</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm bg-base-100 mx-8 mt-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Education"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Education is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("location", {
                                        required: {
                                            value: true,
                                            message: 'Location is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Linkedin Profile Link</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Linkedin Profile Link"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("linkedin", {
                                        required: {
                                            value: true,
                                            message: 'Linkedin Profile Link is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin?.message}</span>}
                                </label>
                            </div>
                            <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Add to Profile" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;