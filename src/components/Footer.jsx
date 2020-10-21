import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();
    return (<footer>
             <p>Copyright {currentYear} by Joshua Corona</p> 
             </footer>
        );
 
}
export default Footer;