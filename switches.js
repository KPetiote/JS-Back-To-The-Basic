const color = 'yellow';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;        
}

switch(new Date().getDay()){
    case 0:
        day = 'Monday';
        break;
    case 1:
        day = 'Tuesday';
        break;
    case 2:
        day = 'Wednesday';
        break;   
    case 3:
        day = 'Thursday';
        break;  
    case 4:
        day = 'Friday';
        break;  
    case 5:
        day = 'Saturday';
        break;  
    case 6:
        day = 'Sunday';
        break;  
}

console.log(`Today is ${day}`);