class CountdownTimer{
  constructor({ selector,classUpdateValue, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this._refs = this._getRefs(selector,classUpdateValue);
    

    this.start();
  }
  _getRefs(root,classBlock) {
    const refs = {
      controls: document.querySelectorAll(`${root} .${classBlock}`)
    };
    return refs;
  }
  start() {
    const startTime = new Date(this.targetDate)
    const currentTime = Date.now();
    let deltaTime = currentTime - startTime;
    setInterval(() => {
      deltaTime = deltaTime - 1000;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
      const arr=[days,hours,mins,secs]
      

      this.updateClockFace(arr,this._refs.controls);
    }
    ,1000)
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 27 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  return {days,hours,mins,secs}
  }
   pad(value) {
  return String(value).padStart(2, '0');
  }
  updateClockFace(arr,blocks) {
  blocks.forEach((elem,index) => {
    elem.textContent = arr[index];
  });
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  classUpdateValue: 'value',
  targetDate: new Date('Jul 17, 2019'),
});