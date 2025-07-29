import React, { useState, useEffect } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";
import { Protect, useAuth } from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem'
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Home = () => {
    const [creations, setCreations] = useState([])
    const [loading,setLoading] = useState(true)
    const {getToken} = useAuth()

    const getDashboardData = async() => {
        try{
            const {data} = await axios.get('/api/user/get-user-creations', {
                headers: {Authorization: `Bearer ${await getToken()}`}
            })

            if(data.success){
                setCreations(data.creations)
            } else{
                toast.error(data.message)
            }
        } catch(error) {
            toast.error(data.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        getDashboardData()
    }, [])

    return (
        <div className="h-full p-6 overflow-y-scroll">
            <div className="flex justify-start gap-4 flex-wrap">
                {/* Total Creations Card */}
                <div className="flex justify-between items-center w-72 p-4 px-6 bg-white border border-gray-200 rounded-xl">
                    <div className="text-slate-600">
                        <p className="text-sm">Total Creations</p>
                        <h2 className="text-xl font-semibold">{creations.length}</h2>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] flex justify-center items-center">
                        <Sparkles className="w-5 text-white"/>
                    </div>
                </div>

                {/* Active Plan Card */}
                <div className="flex justify-between items-center w-72 p-4 px-6 bg-white border border-gray-200 rounded-xl">
                    <div className="text-slate-600">
                        <p className="text-sm">Active Plan</p>
                        <h2 className="text-xl font-semibold"><Protect plan="premium" fallback="Free">Premium</Protect></h2>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] flex justify-center items-center">
                        <Gem className="w-5 text-white"/>
                    </div>
                </div>
            </div>

            {
                loading ? (
                    <div className="flex justify-center items-center h-full">
                        <span className="animate-spin w-10 h-10 my-1 rounded-full border-3 border-primary border-t-transparent"></span>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <p className="mt-6 mb-4">Recent Creations</p>
                        {creations.map((item) => <CreationItem key={item.id} item={item}/>)}
                    </div>
                )
            }
            
        </div>
    )
}

export default Home