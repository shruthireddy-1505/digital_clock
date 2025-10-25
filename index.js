function createclock()
{
    const date=new Date();
    let hour=date.getHours();
    const temp=hour>=12?'PM' :'AM';
    hour=hour%12 || 12;
    hour=hour.toString().padStart(2,0);
    const mint=date.getMinutes().toString().padStart(2,0);
    const sec=date.getSeconds().toString().padStart(2,0);
    const overall_time=`${hour}:${mint}:${sec} ${temp}`;
    document.getElementById("clock").textContent=overall_time;
}
createclock();
setInterval(createclock,1000)



