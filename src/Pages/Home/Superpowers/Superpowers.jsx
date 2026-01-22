import React from 'react';
import { ArrowRight } from 'lucide-react';

const Superpowers = () => {
    return (
        <section className="bg-[#26262B]  text-white border-t border-white pt-[100px] w-[1180px] mx-auto">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <h2 className="text-[36px] tracking-tight md:text-5xl">
                    What you get on Setapp.
                </h2>
                <p className="max-w-xs text-[18px] text-gray-400">
                    With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <div className="col-span-1 flex flex-col overflow-hidden rounded-[2.5rem] bg-[#d97c94] pt-8 px-8 md:col-span-2 ">
                    <div className="mb-8">
                        <div className="mb-4 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md">
                                <img src="https://i.ibb.co.com/YBjqr1yG/2ea3dc225416273459df81ca06ad426d29a3cb56.png" alt="Mac" />
                            </div>
                            <h3 className="text-2xl font-bold">Keep your Mac clean</h3>
                        </div>
                        <p className="text-white/90">Remove junk, scan for malware, wipe email attachments</p>
                    </div>
                    <div className="mt-auto self-center w-full max-w-4xl shadow-2xl">
                        <img
                            src="https://i.ibb.co.com/YF8XhRF6/8a5203ae86e579ee7c833ad32903a8952c6f32f6.png"
                            alt="CleanMyMac UI"
                            className="rounded-t-2xl border-x border-t border-white/20"
                        />
                    </div>
                </div>

                <div className="flex flex-col rounded-[2.5rem] bg-[#f2f1eb] p-8 text-black lg:p-10">
                    <div className="mb-8 overflow-hidden rounded-xl">
                        <img
                            src="https://i.ibb.co.com/TMkJQHfF/5ecec2c860e197b0c252693fa559e428bb28dd4a.png"
                            alt="Code Editor"
                            className="w-full shadow-lg"
                        />
                    </div>
                    <div className="mt-auto">
                        <div className="mb-3 h-10 w-10 rounded-lg bg-blue-500/10">
                            <img src="https://i.ibb.co.com/qYTYfQG5/5c27d428a3e97ddc13f8ebcef94454f36d2aab18.png" alt="code" />
                        </div>
                        <h3 className="text-2xl font-bold">Write code</h3>
                        <p className="text-gray-600">Create applications in more than 25 languages</p>
                    </div>
                </div>

                <div className="flex flex-col rounded-[2.5rem] bg-[#3d4e73] p-8 lg:p-10">
                    <div className="mb-6">
                        <div>
                            <img src="https://i.ibb.co.com/Z9FmKW1/daecfd6fc447d2a6b62fc72cbb5af2c7ac6bee48.png" alt="" className='w-12'/>
                            <h3 className="text-2xl font-bold text-white">Join meetings in a click</h3>
                            <p className="text-blue-100/70 text-sm">Quickly access links to your meetings from menu bar</p>
                        </div>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-2xl ">
                        <img
                            src="https://i.ibb.co.com/fzP5N3sP/bbd80a807180e55dbcc9d6024b7149e4b93f276f.png"
                            alt="Meeting App UI"
                            className="w-full shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <a href="#" className="flex items-center gap-2 text-lg font-medium text-gray-400 hover:text-white transition-colors">
                    <ArrowRight size={20} /> View all superpowers 
                </a>
            </div>
        </section>
    );
};

export default Superpowers;