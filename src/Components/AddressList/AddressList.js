import React from 'react';
import { useAddress } from '../../Context/AddressContext/AddressContext';
import DisplayAddress from '../DisplayAddress/DisplayAddress';
import Loader from '../Loader/Loader';
import './AddressList.css';

function AddressList() {

  const { addressList, selected, isloading } = useAddress()
   
  return (
    <div class="container__flex--center margin-tb--medium">
      <div class="container--100 padding--medium">
        <p class="text--center text--large">Address List</p>
        { isloading && <Loader />}
        <div class="addresslist__container">
          {addressList?.map((item)=> {
            return <DisplayAddress key={item.id} useraddress={item} selected={item.id===selected} />
          })}
        </div>
      </div>
    </div>
  )
}

export default AddressList