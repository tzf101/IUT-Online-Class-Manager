import React, {useState} from "react";
import Carousel from "./Carousel";
import External from "./External";
import Footer from "./Footer";
import Header from "./Header";
import links from "./classDetails";
function App() {
    
    return (
        <div>
            <Header />
            <Carousel
                currentClassName={links[0].class}
                currentClassTime={links[0].start}
                currentClassLink={links[0].link}
                
                upcomingClassName={links[2].class}
                upcomingClassTime={links[2].start}
                upcomingClassLink={links[2].link}

                upcomingClassName2={links[3].class}
                upcomingClassTime2={links[3].start}
                upcomingClassLink2={links[3].link}
            />
            <External />
            <Footer />
        </div>
    );
}

export default App;
