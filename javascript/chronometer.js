class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=0
  }
  startClick(printTimeFunc) {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime)
      this.currentTime+=1;
      printTimeFunc();
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime%60
  }
  twoDigitsNumber() {
    return (`0`+this.currentTime).slice(-2)}
  //   if(this.currentTime<10){
  //     return `0`+this.currentTime.toString()
  //   } else 
  //   return this.currentTime.toString()
  // }
  stopClick() {
    clearInterval(this.intervalId);
    }
  resetClick() {
    this.currentTime = 0;
    }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds())

  }
}
