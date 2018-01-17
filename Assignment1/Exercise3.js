function isWeekend()
{
    const todayDate=new Date();
    const day=todayDate.getDay();
    let arr=["weekend","weekday","weekday","weekday","weekday","weekday","weekend"];
    return arr[day];
}

console.log(isWeekend());