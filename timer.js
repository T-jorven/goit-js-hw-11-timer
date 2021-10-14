const refs = {
    daysField: document.querySelector('span[data-value="days"]'),
    hoursField: document.querySelector('span[data-value="hours"]'),
    minsField: document.querySelector('span[data-value="mins"]'),
    secsField: document.querySelector('span[data-value="secs"]'),
}


class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }




    start() {
        let startTime = this.targetDate.getTime();
        const TIMER = 1000;
        
        setInterval(() => {
            if (startTime <= Date.now()) {
                return;

            } else {
                const currentTime = Date.now();
                const RemainingTime = startTime - currentTime;
                const countdown = this.getTimeComponents(RemainingTime);
            
                this.updateClockFace(countdown);   
        }}, TIMER)};
        

    
    updateClockFace({ days, hours, mins, secs }) {
                refs.daysField.textContent = `${days}`;
                refs.hoursField.textContent = `${hours}`;
                refs.minsField.textContent = `${mins}`;
                refs.secsField.textContent = `${secs}`;
    }
     pad(value) {
    return String(value).padStart(2, '0')
}

  
    //Counter
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 45 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}
 
const countDownTimerNew = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2025'),
});

countDownTimerNew.start();