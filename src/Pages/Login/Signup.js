import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Signup = () => {
    let error;
    const navigate = useNavigate();
    const [
        signInWithGoogle,
        userGoogle,
        loadingGoogle,
        errorGoogle
    ] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        userEmailPass,
        loadingEmailPass,
        errorEmailPass,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        updateProfile,
        updating,
        updateError
    ] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (userGoogle) {
        navigate('/home');
    }

    if (userEmailPass) {
        navigate('/login');
    }

    if (errorGoogle) {
        error = <span class="label-text-alt text-red-500">{errorGoogle?.message}</span>;
    }
    if (errorEmailPass) {
        error = <span class="label-text-alt text-red-500">{errorEmailPass?.message}</span>;
    }

    if (updateError) {
        error = <span class="label-text-alt text-red-500">{updateError?.message}</span>;
    }

    if (loadingGoogle || loadingEmailPass || updating) {
        return <Loading></Loading>;
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title justify-center font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Please Provide a valid Email'
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-sm"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password Length should be greater than 5'
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className='my-2'>
                            {error}
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>
                    <small><span className='text-accent font-bold'>Already have an account?</span> <Link to='/login'>Sign In</Link></small>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-accent"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;