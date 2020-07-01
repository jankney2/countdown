let target=new Date(2021, 4, 1)



console.log(target, 'tar')



setInterval(() => {
    let now=new Date().getTime()    
    let diff=target-now

    let day=Math.floor((diff / (1000 * 60 * 60 * 24)) );
    let hour=Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let min=Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60 ))
    let sec=Math.floor((diff % (1000 * 60)) / (1000))


    let disp=document.getElementById('dateDisp')


    disp.innerText=`${day} days, ${hour} hours, and ${min} min, and ${sec} seconds until the start of Summer 2021`

}, 1000);