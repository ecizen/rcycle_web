'use client'
import './style.css'
import Image from "next/image";
import images from "../constant/data-image";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Container from "@/components/ui/container";

const SignIn  = () => {
    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        setShow(!show);
    }
    
    return (
        <Container>
        <main className=" overflow-hidden">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 min-h-screen">
                <div className="w-full max-h-full overflow-y-hidden  flex flex-col items-center lg:justify-center">
                    <div className="lg:block hidden w-full">
                        <h1 className="text-lg font-bold">Logo</h1>
                    </div>
                    <div className="  lg:max-w-sm max-w-none w-full">
                        <div className='mobile_background px-8 flex flex-col justify-center rounded-b-3xl'>
                            <div className="lg:hidden w-full">
                            <h1 className="text-lg text-white  font-bold">Logo</h1>
                            </div>
                            <h1 className="text-xl font-semibold lg:text-black text-white mt-12">Get Started Now</h1>
                            <p className="text-sm lg:text-gray-500 text-white mb-6">Mulai sekarang dan jaga bumi sekarang</p>
                        </div>
                       <div className='p-8'>
                       <div className="space-y-3 mb-6 flex flex-col relative">
                            <Label>Username</Label>
                            <Image src={images.userIcon} alt="user" className="absolute inset-x-2 inset-y-5"/>
                            <Input name="username" type="username" placeholder="username or email" 
                            className="rounded-xl placeholder:text-gray-300 border-[#D9FDF9] px-12"/>
                        </div> 
                       <div className="space-y-3 mb-4 flex flex-col relative">
                            <Label >Password</Label>
                            <Image src={images.lockIcon} alt="user" className="absolute inset-x-2 inset-y-5"/>
                            <Input name="password" type={`${show ? 'text' : 'password'}`} placeholder="password 8 caracters" 
                            className="rounded-xl placeholder:text-gray-300 border-[#D9FDF9] px-12"/>
                            <button 
                            onClick={handleClick}
                            className="absolute right-3 inset-y-6 text-sm text-gray-500">{`${show ? 'Hide': 'Show'}`}</button>
                        </div>
                        <div className="flex justify-end">
                         <a href="#" className="text-sm font-semibold text-[#31D3AC] text-end">forget password?</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox className="border-slate-900"/>
                            <label className="text-sm text-slate-700">Accept terms and conditions</label>
                        </div> 
                        <div className="mt-8 mb-4">
                            <button className="text-sm font-semibold text-white rounded-md w-full h-12 bg-gradient-to-r from-cyan-400 to-teal-400">Sign up</button>
                        </div>
                        <div className="flex justify-center text-sm font-medium text-slate-500">
                            Or continue with
                        </div>
                        <button className="mt-6 mb-4 rounded-md border border-slate-400 w-full h-12 flex items-center gap-2 text-xs font-semibold justify-center">
                            <Image src={images.googleIcon} alt="google"/>
                             Sign in with Google
                        </button>
                        <div className="flex justify-center">
                            <p className="text-sm text-gray-400">Do you have'nt account?<span className="font-semibold text-teal-400"><a href="#">Sign up</a></span></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full p-4 max-h-screen lg:block hidden overflow-hidden ">
                    <div className="right flex flex-col justify-end px-8">
                        <h1 className='text-5xl text-white font-bold flex flex-wrap mb-4'>Find out how your contribution makes a difference.</h1>
                        <p className='text-sm text-slate-200 max-w-sm'>If you don't have an account, register now to start your recycling journey! Let's protect the earth together!</p>
                        <div className='flex justify-center'>
                        <Image src={images.ilustator} alt='ui' width={300}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </Container>
    )
}

export default SignIn;