'use client'

import { useState } from "react";
import {motion} from "framer-motion"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import {useRouter} from "next/navigation";
import Link from "next/link";
import SignUP from "./signUP";


function SignIN() {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const router = useRouter()


  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <motion.div
          initial={{opacity: 0,y: -20}}
          animate = {{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">VTU Fest Sign-IN</h1>
            <p className="text-muted-foreground">Enter your Credentials</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="string">Username</Label>
              <Input
                id="username"
                type="string"
                placeholder="Enter your username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Password</Label>
              <div className="relative">
                <Input
                id="phone"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                />
              </div>
            </div> 
            
            <Button type="submit" className="w-full" onClick={ async ()=>{
              const response = await axios.post("http://localhost:3000/api/login",{
              username,
              password
            })
            if (response.data.success) {
              // Navigate to the login page after signup
              router.push('/');
            } else {
              console.error('Signup failed');
            }
            }}>

              Sign IN
            </Button>

          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"/>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Not yet Registered ?</span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
            
            <Link href={"/signup"}>
            <Button type="submit" className="w-full" >
              
              Sign UP
            </Button>
            </Link>
            </div>

          </div>
        </div>


      </motion.div>
    </div>
  );
}

export default SignIN