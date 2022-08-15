import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Notify = ({message ,show1 , handleClick1 , variant}) => {

  
    const [position, setPosition] = useState('top-start');
    return (
      <div>
      {show1 === true?
<ToastContainer position="top-end" className="p-3">
      <Toast onClose={handleClick1} show1={show1} position={position} delay={3000} autohide 

      bg={variant}

      >
      <Toast.Header position={position}>
        <strong className="me-auto">Results</strong>
        <small>0 mins ago</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
    </ToastContainer>
     :
     <div className="container">
     
</div>
}
    </div>
     );
}
 
export default Notify;