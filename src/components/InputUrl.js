import { useState } from 'react';
import Result from './Result';
import Notify from './Notify';
const InputUrl = () => {
    
    const [url, SetUrl] = useState('');
    const [saveurl, Setsaveurl] = useState('');
    const apiurl = 'https://api.shrtco.de/v2/shorten?url=' + url;
    const [show, setShow] = useState(null);
    const [show1, setShow1] = useState(false);
    const [message, SetMessage] = useState('');
    const [variant, SetVariant] = useState('');

  const apiCall = () => {
    var requestOptions = {
      method: 'GET',
    };

    fetch(apiurl, requestOptions)
      .then((response) => response.json())
      .then((result) => 

      {

      console.log(result)  
    if ( result["error_code"] === 1)
    {
     
        SetMessage("Enter a url please")
        SetVariant("danger");
        setShow1(true);
    }
    else if ( result["error_code"] === 2)
    {
     
        SetMessage("This is not a valid url")
        SetVariant("secondary");
        setShow1(true);
    }

    else {
        SetMessage("Url shortener successfully")
        setShow1(true);
        SetVariant("primary");
        Setsaveurl(result.result["full_short_link3"])
        setShow(true);
    }

      
      }
      )

      .then(() => 
      {
        SetUrl("");
      }
      )
      .catch((error) => console.log('error', error));
  };


  const handleClick = () => 
  {
    setShow(false);
  }


  const handleClick1 = () => 
  {
    setShow1(false);
  }


    return ( 
        
        <>
        <Notify message={message} show1={show1} handleClick1 = {handleClick1} variant = {variant}></Notify>
        <div className='p-3 m-0 border-0'>
            <h1 className='text-center mb-4'>Mystery url shortner</h1>

            <div className='d-flex justify-content-center '>
                <div className='p-3 m-0 border rounded bg-black border-dark w-50'>

                    <label class="form-label text-white">Paste the URL to be shortened</label>
                    <input class="form-control justify-center"

                        type="url"
                        placeholder="Enter the url"
                        onChange={(e) => SetUrl(e.target.value)}
                        value={url} />
                    <div className='mt-3'>
                        <button href="#" onClick={apiCall} class="btn btn-primary">Shorten It</button>
                    </div>
                </div>
            </div>
            <a href={saveurl} target="_blank"></a>
        </div><Result saveurl = {saveurl} show={show} handleClick={handleClick}></Result></>

     );
}
 
export default InputUrl;