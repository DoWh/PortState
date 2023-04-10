import React from "react";

function AlertWrongPort({ error }){

    if (error) {
        return (
            <img
                className="cursor-pointer w-5 ml-2 absolute left-24" 
                src="/img/error1.png"
                alt="alert error"
                onClick={()=>{console.log('click')}}
            />
        )
    }
    //  else {
    //     return (
    //         <div className="w-5 ml-2"/>
    //     )
    // }
    return null;
    
    // return (
    //     <div class="absolute top-0 right-0 flex p-6 m-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
    //         <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    //         <span class="sr-only">Info</span>
    //         <div>
    //             <span class="font-medium">Wrong port!</span> server already online.
    //         </div>
    //     </div>
    // )
}

export default AlertWrongPort;
