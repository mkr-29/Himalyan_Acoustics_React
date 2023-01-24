import React from 'react';
import './FromOwner.css'
import OwnerImg from './Assets/owner.svg'
import OwnerSign from './Assets/Signature.svg'

function FromOwner() {
    return (
        <div class="from-owner">

            <span class="from_owner_orn">‘</span>


            <div class="from_owner_body">


                <div class="owner-img">
                    <img src={OwnerImg} class="owner-pic" alt="Owner" />
                </div>


                <div class="owner-quote">

                    <h1 class="owner_fro">From the Owner</h1>
                    <p class="owner_frqu">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo<br />empor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad<br />minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu<br />ip ex ea
                        commodo consequolor in reprehende<br />dolor sit amet, consectetur adipiscing elit, sed do eiusmod t<br />empor
                        incididunt ut labore et dolore maa. Ut enim ad<br />minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliqu<br />ip ex ea commodo consequat. Duis aute irure dolor i
                    </p>

                    <div class="owner-signature">
                        <img src={OwnerSign} alt="" />
                    </div>

                    <p>Mr. First Name and Last Name</p>
                </div>

            </div>

        </div>
    )
}

export default FromOwner