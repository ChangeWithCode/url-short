import { useState } from 'react';
const Result = ({saveurl,show ,handleClick}) => {

    

    return ( 


        <div>
            {show === true?
                        <div className='p-3 m-0 border-0'>
                        <h1 className='text-center mb-4'>Here is your shortened url</h1>
                
                        <div className='d-flex justify-content-center '>
                          <div className='p-3 m-0 border rounded bg-black border-dark w-50'>
                
                            <p class="text-white text-center">{saveurl}</p>
                            <div className='mt-3'>
                              <a href={saveurl} 
                              onClick={handleClick}
                               target="_blank" class="btn btn-primary">Visit Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                

                        :
                        <div className="container">
                        
                 </div>
            }
        </div>
        

     );
}
 
export default Result;