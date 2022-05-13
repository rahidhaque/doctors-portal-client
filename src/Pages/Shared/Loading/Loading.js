import React from 'react';
import loadingGif from '../../../assets/Loading.gif'

const Loading = () => {
    return (
        <div>
            <div class="h-screen flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-4 border-4 rounded-full" role="status">
                    <span><img src={loadingGif} alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;