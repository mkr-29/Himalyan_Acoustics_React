import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <h1 class="footer_head">
                Himalayan
                <strong class="footer_head_r"> Acoustics </strong>
            </h1>
            <div class="flinks">
                <a onclick="scroll_to_top()" class="foot_link" href="http://" >
                    Home
                </a>
                <a onclick="smooth_scroll_to_id('prod_range');" class="foot_link" href="http://">
                    Products
                </a>
                <a onclick="smooth_scroll_to_id('why-us')" class="foot_link" href="http://">
                    About Us
                </a>
                <a onclick="smooth_scroll_to_id('con_us')" class="foot_link" href="http://">
                    Contact
                </a>
            </div>

            <div class="ser_off_socials con_socials footer-social_icons">
                <a href="http://"><img class="con_ic" src="Icons/icon _facebook_.svg" alt="" /></a>
                <a href="http://"><img class="con_ic" src="Icons/icon _linkedin.svg" alt="" /></a>
                <a href="http://"><img class="con_ic" src="Icons/icon _twitter.svg" alt="" /></a>
                <a href="http://"><img class="con_ic" src="Icons/icon _instagram.svg" alt="" /></a>
            </div>

            <div class="footer-contact">username@email.com | +91 452 482 5615</div>
            <div class="footer-copyright">
                © 2022 Himalyan Accounts (Kool Pack and Allied Industries) • All Rights
                Reserved
            </div>
        </footer>
    )
}

export default Footer