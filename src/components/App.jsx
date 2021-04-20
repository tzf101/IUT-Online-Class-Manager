import React, {useState} from "react";
import Carousel from "./Carousel";
import External from "./External";
import Footer from "./Footer";
import Header from "./Header";
import links from "./classDetails";
import findIndex from "./getIndex"
function App() {
    const date = new Date();
    const week = date.getDay();
    const [index, setIndex] = useState(0);

    setTimeout(UpdateIndex, 1000);

    function UpdateIndex(){
        let idx = findIndex();
        setIndex(idx);
    }
    
    
    return (
        <div>
            <Header />
            <Carousel
                currentClassName={links[week][index].class}
                currentClassTime={links[week][index].duration}
                currentClassLink={links[week][index].link}
                currentButtonText={links[week][index].buttonText}

                upcomingClassName={links[week][index+1].class}
                upcomingClassTime={links[week][index+1].duration}
                upcomingClassLink={links[week][index+1].link}
                upcomingButtonText={links[week][index+1].buttonText}

                upcomingClassName2={links[week][index+2].class}
                upcomingClassTime2={links[week][index+2].duration}
                upcomingClassLink2={links[week][index+2].link}
                upcomingButtonText2={links[week][index+2].buttonText}
            />
            <External />
            <Footer />
        </div>
    );
}

export default App;
