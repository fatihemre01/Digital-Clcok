const hourDiv = document.getElementById("hour")
const minuteDiv = document.getElementById("minute")
const secondsDiv = document.getElementById("seconds");
const startClock = document.getElementById("start-clock")
const pauseClock = document.getElementById("pause-clock")
const resetClock = document.getElementById("reset-clock")
let [hour,minute,second] = [1,12,56];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
let x;


startClock.addEventListener
("click", () => {
    startClock.disabled = true
    timer()
    x = setInterval(timer, 1000)
})

function timer() {
    //check if the timer is done, if yes then return(break)
    if(hour == 0 && minute == 0 && second == 0) {
        clearInterval(x)
        return
    }
    
    //when second hits to 0
    if(second == 0){
        if(hour == 0 && minute == 0){
            clearInterval(x)
            return
        }

        //second == 0
        else{

            if(hour > 0 && minute == 0){
                hour--
                minute = 60
                second = 60
            }

            else if(minute >= 0) {
                minute--
                second = 60
            }

        }
    }
    second--

    let h = hour < 10 ? "0" + hour: hour
    let m = minute < 10 ? "0" + minute: minute
    let s = second < 10 ? "0" + second: second

    hourDiv.innerHTML = h
    minuteDiv.innerHTML = m
    secondsDiv.innerHTML = s
}


pauseClock.addEventListener
("click", ()=>{
    startClock.disabled = false
    clearInterval(x)
})


resetClock.addEventListener
("click", ()=> {
    startClock.disabled = false
    location.reload()
})