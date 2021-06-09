const day="Monday";
switch(day){
    case 'Monday': //day==monday
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code eg');
        break;
    case 'friday':
        console.log('record video');
        break;
    case 'saturday':
    case 'sunday':
        console.log('party');
        break;
    default:
        console.log('invalid day');
}

