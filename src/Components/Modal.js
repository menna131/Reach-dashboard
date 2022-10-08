import React, { useState } from 'react';
import './AddUserModel.css';

const Modal = () => {
 const [modal, setModal] = useState(false);
 const toggleModal = () => {
    setModal(!modal);
 }
  return (
    <div>
        <button onClick={toggleModal}>Add User</button>
        {modal && (
            <div className='modal'>
            <div className='overlay' onClick={toggleModal}></div>
            <div className='modal-content'>
                <h2>Add User</h2>
                <form className='model' action="#">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    </select>
                
                    <input type="submit" value="Submit"/>
                </form>
                <button className='close-modal' onClick={toggleModal}>
                    CLOSE
                </button>
            </div>
        </div>
        )}
    </div>
  )
}

export default Modal
