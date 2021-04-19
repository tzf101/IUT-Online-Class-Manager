import React, {useState} from "react";
import Carousel from "./Carousel";
import External from "./External";
import Footer from "./Footer";
import Header from "./Header";
import links from "./classDetails";
function App() {
    setInterval(updateHours, 1000);

    setInterval(updateMinutes, 1000);

    setInterval(UpdateIndex, 10000);

    let date = new Date();
    const week = date.getDay();
    const startingHours = date.getHours();
    const startingMinutes = date.getMinutes();
    const [hours, setHours] = useState(startingHours);
    const [minutes, setMinutes] = useState(startingMinutes);
    const [index, setIndex] = useState(0); 

    function updateHours(){
        const newHours = new Date().getHours();
        setHours(newHours);
    }

    function updateMinutes(){
        const newMinutes = new Date().getMinutes();
        setMinutes(newMinutes);
    }

    function UpdateIndex(){
        for (let i = 0; i < 7; i++) {
            if((hours*100+minutes) < links[week][i].end) setIndex(i);
        } 
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
