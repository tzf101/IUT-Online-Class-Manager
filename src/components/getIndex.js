function findIndex(){
    let date = new Date();
    let week = date.getDay();
    let Time = date.getHours()*100 + date.getMinutes();

    switch(week){
        case 0: //Sunday
            if(Time < 2359) return 0;
            break;
        case 1: //Monday
            if(Time < 1150) return 0;
            else if(Time < 1300) return 1;
            else if(Time < 1430) return 2;
            else return 3;
        case 2: //Tuesday
            if(Time < 1040) return 0;
            else if(Time < 1150) return 1;
            else if(Time < 1300) return 2;
            else if(Time < 1540) return 3;
            else return 4;
        case 3: //Wednesday
            if(Time < 1150) return 0;
            else if(Time < 1300) return 2;
            else if(Time < 1430) return 3;
            else return 4;
        case 4: //Thursday
            if(Time < 1040) return 0;
            else if(Time < 1300) return 1;
            else if(Time < 1650) return 2;
            else return 3;
        case 5: //Friday
            if(Time < 1150) return 0;
            else if(Time < 1300) return 2;
            else if(Time < 1430) return 3;
            else if(Time < 1650) return 4;
            else return 5;
        case 6:
            if(Time < 2359) return 0;
            break;
        default:
            return 0;
    }
}

export default findIndex;