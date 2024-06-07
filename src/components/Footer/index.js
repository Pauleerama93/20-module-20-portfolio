import React from 'react';


function Footer(){
    const icons = [
        {
            name: "fa-brands fa-github",
            links: "htttp://github.com"
        },
        {
            name: "fa-brands fa-linkedin",
            links: "https://linkedin.com/"
        }
    ]

    const LinkStyle = {
        textDecoration: "none", 
        color: "black", 
        cursor:"pointer",
        margin: "0 3px"
    }

    const FooterStyle = {
        height: "50px", 
        backgroundColor: "green", 
        display: "grid", 
        alignItems: "center", 
        justifyContent: "center", 
        gridGap: "15px"
    }

    let year = new Date().getFullYear();
    
    return (
        <footer style={FooterStyle}>

           <section style={{display: "grid", gridTemplateColumns: "max-content 1fr 1fr", gridGap: "20px"}}>

            <span style={{paddingRight: "15px"}}>Ⓒ {new Date().getFullYear()}</span>
           
            {icons.map(icon => {
                return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={LinkStyle}><i className={icon.name}></i></a>
            })}

            </section>

        </footer>
    )
}

export default Footer;