import "../sign-in/SignIn.css"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from "../../actions/auth";
import { useLocation } from 'react-router-dom'
import "./table.css"

const UpdateUser = () => {
  const location = useLocation()
  const from  = location.state
  const history = useNavigate();
  
  const [postData, setPostData] = useState({
    name: from.name,
    email: from.email,


});
    
const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(from._id, postData))
    history("/UserDetailDashboard");
  };

  const onClose = () => {
    history("/UserDetailDashboard");
  }

  return (
      <>
      <div id="myModal" className="popup">
   
        <div className="modal-content">
          <div className="modal-header">
          <span className="close"><button className="close" onClick={onClose}>&times;</button></span>
            <h2 className='Sign-In'>Update User</h2>
              <form onSubmit = {handleSubmit} >
              <div className="form form-update-worker-css" style={{padding:'padding: 20px 110px !important;'}}>
                    <div className="form-body">
                        <div className="name" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="name">Name : </label>
                            <input style={{padding:'5px', marginLeft:'20px'}} 
                            className="form__input" 
                            type="text" 
                            name="name"
                            id="name" 
                            placeholder="Name"
                            value={postData.name}
                            onChange={(e) => setPostData( {...postData, name: e.target.value })}
                            />
                             </div>
                        <div className="email" style={{margin: '10px 0px'}}>
                            <label className="form__label" for="email">Email: </label>
                            <input style={{padding:'5px', marginLeft:'20px'}}
                            className="form__input"  
                            type="text" 
                            name="email" 
                            id="email"  
                            placeholder="email" 
                            value={postData.email} 
                            onChange={(e) => setPostData( {...postData, email: e.target.value })}
                        />
                             </div>
                
                    </div>
                    </div>
                <button style={{marginBottom:'15px'}} type="submit" class="login-btn" >Update</button>
               </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;

