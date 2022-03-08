import React, {useState} from 'react';
import './AddressModal.css';

function AddressModal({ editmode, showmodal, closeModal, onsubmit, useraddress}) {
  const [name, setname] = useState(useraddress?.name || "")
  const [address, setaddress] = useState(useraddress?.address || "")
  const [city, setcity] = useState(useraddress?.city || "")

  const resetaddress = ()=>{
    setname(useraddress?.name || "")
    setaddress(useraddress?.address || "")
    setcity(useraddress?.city || "")
  }

  const handlesubmit = () => {
    let newobj = { name, address, city}
    if (useraddress?.id){
      newobj['id']=useraddress.id
    }

    onsubmit(newobj)
    
    if(!editmode){
      resetaddress()
    }
    
    closeModal()
  }

  const handlecloseModal = () => {
    resetaddress()
    closeModal()
  }

  return (
    <div className={`modal__overlay address__modal ${showmodal ? '' : 'hide'}`}>
      <div class="modal__container">
          <div class="modal__header container__flex margin--medium">
              <h3 class="text--large">{editmode ? 'Edit' : 'Add'} Address</h3>
              <i class="fas fa-times modal__close" onClick={handlecloseModal}></i>
          </div>
          <div class="modal__body margin-bottom--large">
              <div class="padding-right--small">
                <div class="form-element--column">
                    <label class="form-label form-label--required">Enter Name</label>
                    <input type="text" class="form-field" value={name} onChange={(e)=> setname(e.target.value)} placeholder="Enter Name"/>
                </div>
                <div class="form-element--column">
                    <label class="form-label form-label--required">Enter Address</label>
                    <input type="text" class="form-field" value={address} onChange={(e)=> setaddress(e.target.value)} placeholder="Enter Address"/>
                </div>
                <div class="form-element--column">
                    <label class="form-label form-label--required">Enter City</label>
                    <input type="text" class="form-field" value={city} onChange={(e)=> setcity(e.target.value)} placeholder="Enter City"/>
                </div>
              </div>
          </div>
          <div class="modal__actions">
              <button onClick={handlesubmit} class="btn btn--primary border--grey">Submit</button>
              <button onClick={handlecloseModal} class="btn btn--secondary">Cancel</button>
          </div>
      </div>
    </div>
  )
}

export default AddressModal

