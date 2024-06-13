import React from "react";

import About from "../../pages/AboutPage";
import Portfolio from "../../pages/portfolio";
import Resume from "../../pages/resume";
import PageContent from "../PageContent";
function Page({ currentPage}) {
    const renderPage = () => {
        if(currentPage.name === "about"){
            return <About/>
        }else if(currentPage.name === "portfolio"){
            return <Portfolio/>
        }else if(currentPage.name === "resume"){
            return <Resume/>
        }
    }

    return <section>
       <PageContent>{renderPage()}</PageContent> 
    </section>
}
export default Page