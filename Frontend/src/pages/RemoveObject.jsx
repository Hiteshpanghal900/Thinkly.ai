import React, { useState } from "react";
import { Sparkles, Scissors } from "lucide-react";

const RemoveObject = () => {
    
    const [input, setInput] = useState()
    const [object, setObject] = useState('')

    const onSubmitHandler = async(e) =>{
        e.preventDefault()
    }

     return (
        <div className="h-full p-6 flex items-start text-slate-700 gap-4">
            {/* Left Col */}
            <form onSubmit={onSubmitHandler} className="w-full p-4 max-w-lg bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-6 text-[#4A7AFF]"/>
                    <h1 className="text-xl font-medium">Object Removal</h1>
                </div>

                {/* Image input */}
                <p className="mt-6 text-sm font-semibold">Upload Image</p>
                <input onChange={(e) => setInput(e.target.files[0])} type="file" accept="image/*" className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600 cursor-pointer" required />
                <br />

                {/* Object to remove input */}
                <p className="mt-6 text-sm font-semibold">Describe object to remove</p>
                <textarea onChange={(e) => setObject(e.target.value)} value={object} rows={4} placeholder="e.g., car in background, tree from the image" className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600" required></textarea>
                <p className="text-xs text-gray-600">Be specific about what you want to remove</p>

                
                <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
                    <Scissors className="w-5" />
                    Remove Object
                </button>
            </form>

            {/* Right col */}
            <div className="w-full max-w-lg p-4 rounded-lg bg-white flex flex-col border border-gray-200 min-h-90 max-h-96">
                <div className="flex items-center gap-3">
                    <Scissors className="w-5 h-5 text-[#4A7AFF]" />
                    <h1 className="text-xl font-semibold">Processed Image</h1>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <Scissors className="w-9 h-9" />
                        <p>Upload an image and click "Remove Object" to get started</p>
                    </div>
                </div>
            </div>
            <br />
            
        </div>
    )
}

export default RemoveObject