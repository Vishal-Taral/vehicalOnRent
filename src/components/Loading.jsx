import React from 'react';
import loadingAnimation from '../assets/loadingAnimation.gif';

const Loading = ({actionTitle}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-400 bg-opacity-50 z-50">
            <div className="flex flex-col justify-center items-center bg-white w-full h-full">
                <img 
                    src={loadingAnimation}
                    alt="Loading..."
                    className="w-80 h-80"
                />
                <p className="mt-2 text-2xl md:text-5xl font-extrabold text-center pb-6 mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text italic">{actionTitle}</p>
            </div>
        </div>
    );
};

export default Loading;
