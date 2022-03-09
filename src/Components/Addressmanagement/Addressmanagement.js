import React, { useState } from 'react'
import AddressList from '../AddressList/AddressList';
import AddressModal from '../AddressModal/AddressModal';
import { useAddress } from '../../Context/AddressContext/AddressContext';

function Addressmanagement() {
  const [showmodal, setshowmodal] = useState(false)
  const { onaddaddress } = useAddress()

  return (
    <div class="container--80 padding--medium">
      <h2 class="text--center margin-tb--medium">Address Management</h2>
      <div class="container__flex--center margin-tb--medium">
        <button class="btn btn--secondary btn--icon" onClick={()=>setshowmodal(true)}><span><i class="fas fa-plus"></i></span>Add New Address</button>
      </div>
      <AddressList />
      <AddressModal onsubmit={onaddaddress} showmodal={showmodal} closeModal={()=>setshowmodal(false)} />
    </div>
  )
}

export default Addressmanagement