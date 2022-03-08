import React, {useState} from 'react';
import { useAddress } from '../../Context/AddressContext/AddressContext';
import AddressModal from '../AddressModal/AddressModal';
import './DisplayAddress.css';

function DisplayAddress({ useraddress, selected }) {

  const [showmodal, setshowmodal] = useState(false)

  const { onselect, ondeleteaddress, oneditaddress } = useAddress()

  let {id, name, address, city} = useraddress

  return (

    <div class={`single-address__container container--relative border--${selected ? 'secondary' :'grey' }`}>
      <div class="single-address--select container__flex--center">
        { selected ? <span onClick={()=>onselect(id)}>
            <i class="fas fa-check-circle text--large clr--secondary"></i>
          </span> : 
          <span onClick={()=>onselect(id)}>
            <i class="far fa-circle select--circle text--large clr--secondary"></i>
            <i class="fas fa-check-circle text--large clr--secondary nextcircle"></i>
          </span> }
      </div>
      <div class="single-adress--content padding--medium">
        <div class="container__flex margin-bottom--medium">
          <p onClick={()=>onselect(id)}><span class="text--bold margin-right--small">{name}:</span>{`${address}, ${city}`}</p>
        </div>
        <div>
          <button onClick={()=> setshowmodal(true)} class="btn btn--primary border--grey margin-right--small">Edit</button>
          <button onClick={()=> ondeleteaddress(id)} class="btn btn--secondary">Delete</button>
        </div>
      </div>
      <AddressModal editmode={true} onsubmit={oneditaddress} useraddress={useraddress} showmodal={showmodal} closeModal={()=>setshowmodal(false)} />
    </div>
  )
}

export default DisplayAddress