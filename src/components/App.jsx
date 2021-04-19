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

                upcomingClassName={links[week][index].class}
                upcomingClassTime={links[week][index].duration}
                upcomingClassLink={links[week][index].link}

                upcomingClassName2={links[week][index].class}
                upcomingClassTime2={links[week][index].duration}
                upcomingClassLink2={links[week][index].link}
            />
            <External />
            <Footer />
        </div>
    );
}

export default App;
