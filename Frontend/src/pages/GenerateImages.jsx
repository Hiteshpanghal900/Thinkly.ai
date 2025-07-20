import React, { useState } from "react";
import { Sparkles, EditIcon, Hash, ImageIcon } from "lucide-react";

const GenerateImages = () => {

    const imageStyle = ['Realistic', 'Ghibli Style', 'Anime Style', 'Fantasy Style', 'Portrait Style', 'Cartoon Style']
    
    const [selectedStyle, setSelectedStyle] = useState('Realistic')
    const [input, setInput] = useState('')
    const [publish, setPublish] = useState(false)

    const onSubmitHandler = async(e) =>{
        e.preventDefault()
    }

     return (
        <div className="h-full p-6 flex items-start text-slate-700 gap-4">
            {/* Left Col */}
            <form onSubmit={onSubmitHandler} className="w-full p-4 max-w-lg bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-6 text-[#00AD25]"/>
                    <h1 className="text-xl font-medium">AI Image Generator</h1>
                </div>

                <p className="mt-6 text-sm font-semibold">Describe Your Image</p>
                <textarea onChange={(e) => setInput(e.target.value)} value={input} rows={4} className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
                placeholder="Describe what you want to see in your image" required />

                <p className="mt-4 text-sm font-medium">Category</p>
                <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
                    {imageStyle.map((item, index) => (
                        <span onClick={() => setSelectedStyle(item)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedStyle === item ? 'bg-green-50 text-green-700' : 'text-gray-500 border-gray-300'}`} key={item}>{item}</span>
                    ))}
                </div>

                <div className="my-6 flex items-center gap-2">
                    <label className="relative cursor-pointer">
                        <input type="checkbox" onChange={(e) => setPublish(e.target.checked)} checked={publish} className="sr-only peer"/>

                        <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
                        <span className="absolute bg-white left-1 top-1 w-3 h-3 rounded-full transition peer-checked:translate-x-4"></span>
                    </label>

                    <p className="text-sm">Make this image Public</p>
                </div>
                <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
                    <ImageIcon className="w-5" />
                    Generate Image
                </button>
            </form>

            {/* Right col */}
            <div className="w-full max-w-lg p-4 rounded-lg bg-white flex flex-col border border-gray-200 min-h-90 max-h-96">
                <div className="flex items-center gap-3">
                    <ImageIcon className="w-5 h-5 text-[#00AD25]" />
                    <h1 className="text-xl font-semibold">Generated Image</h1>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <ImageIcon className="w-9 h-9" />
                        <p>Enter a topic and click "Generate Image" to get started</p>
                    </div>
                </div>
            </div>
            <br />
            
        </div>
    )
}

export default GenerateImages