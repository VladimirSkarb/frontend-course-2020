(()=>{var e=document.querySelector("[data-score]"),t=document.querySelector("[data-cube]"),r=document.querySelector("[data-cube-score]"),n=document.querySelector("[data-key]"),s=document.querySelector("[data-progress-bar]"),i=document.querySelector("[data-game-start-btn]"),a=document.querySelector("[data-game-stop-btn]"),o=document.querySelector("[data-game-restart-btn]"),c=new(function(){function e(e,t,r,n,s){this.scoreElement=e,this.cubeScoreElement=t,this.keyElement=r,this.cubeElement=n,this.progressBarElement=s,this.score=100,this.interval=2e3,this.intervalId=null,this.intervalEventDelay=10,this.currentEventTime=0,this.wasRun=!1,this.subscribeOnKeyPress()}return e.prototype.start=function(){this.wasRun=!0,null==this.intervalId&&(this.startKeysInterval(),e.generateKey(),this.currentEventTime=0)},e.prototype.startKeysInterval=function(){this.intervalId=window.setInterval(e.intervalEvent,this.intervalEventDelay,this)},e.prototype.stopKeysInterval=function(){window.clearInterval(this.intervalId),this.intervalId=null},e.prototype.stopGame=function(){if(!this.wasRun)return this.start(),void(this.wasRun=!0);this.stopKeysInterval()},e.intervalEvent=function(t){t.currentEventTime+=t.intervalEventDelay,t.updateProgressBar(),t.currentEventTime>t.interval&&(t.addScore(e.generateNumber(-10,-15)),t.resetEvent())},e.prototype.updateProgressBar=function(){this.progressBarElement.style.width=String(100-this.currentEventTime/this.interval*100)+"%"},e.prototype.setScore=function(e){this.scoreElement.innerHTML=e.toString();var t=String(100+e/2)+"px";this.cubeElement.style.width=t,this.cubeElement.style.height=t,e>200&&(alert("victory"),this.restartGame()),e<0&&(alert("loss"),this.restartGame())},e.prototype.restartGame=function(){if(!this.wasRun)return this.start(),void(this.wasRun=!0);this.stopKeysInterval(),this.setScore(this.score),this.resetEvent(),this.cubeScoreElement.innerHTML=""},e.prototype.setKey=function(t){if(this.intervalId){if(t.toUpperCase()===n.innerHTML){var r=e.generateNumber(5,10);this.addScore(r)}else this.addScore(e.generateNumber(-20,-25));this.resetEvent()}},e.prototype.resetEvent=function(){this.currentEventTime=0,this.updateProgressBar(),e.generateKey()},e.prototype.addScore=function(e){var t=Number.parseInt(this.scoreElement.innerHTML);this.cubeScoreElement.innerHTML=e.toString(),this.setScore(t+e)},e.prototype.subscribeOnKeyPress=function(){var e=this;document.addEventListener("keypress",(function(t){e.setKey(t.key)}))},e.generateKey=function(){var t="A".charCodeAt(0),r="Z".charCodeAt(0),s=e.generateNumber(t,r);n.innerHTML=String.fromCharCode(s)},e.generateNumber=function(e,t){return Math.floor(Math.random()*Math.floor(t-e))+e},e}())(e,r,n,t,s);i.addEventListener("click",(function(){return c.start()})),a.addEventListener("click",(function(){return c.stopGame()})),o.addEventListener("click",(function(){return c.restartGame()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsic2NvcmVFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3ViZUVsZW1lbnQiLCJjdWJlU2NvcmVFbGVtZW50Iiwia2V5RWxlbWVudCIsInByb2dyZXNzQmFyRWxlbWVudCIsInN0YXJ0QnV0dG9uRWxlbWVudCIsInN0b3BCdXR0b25FbGVtZW50IiwicmVzdGFydEJ1dHRvbkVsZW1lbnQiLCJnYW1lIiwic2NvcmUiLCJpbnRlcnZhbCIsImludGVydmFsSWQiLCJpbnRlcnZhbEV2ZW50RGVsYXkiLCJjdXJyZW50RXZlbnRUaW1lIiwid2FzUnVuIiwidGhpcyIsInN1YnNjcmliZU9uS2V5UHJlc3MiLCJzdGFydCIsInN0YXJ0S2V5c0ludGVydmFsIiwiR2FtZSIsImdlbmVyYXRlS2V5Iiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJpbnRlcnZhbEV2ZW50Iiwic3RvcEtleXNJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdG9wR2FtZSIsImN1cnJlbnQiLCJ1cGRhdGVQcm9ncmVzc0JhciIsImFkZFNjb3JlIiwiZ2VuZXJhdGVOdW1iZXIiLCJyZXNldEV2ZW50Iiwic3R5bGUiLCJ3aWR0aCIsIlN0cmluZyIsInNldFNjb3JlIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJjdWJlU2l6ZSIsImhlaWdodCIsImFsZXJ0IiwicmVzdGFydEdhbWUiLCJzZXRLZXkiLCJrZXkiLCJ0b1VwcGVyQ2FzZSIsImN1cnJlbnRTY29yZSIsIk51bWJlciIsInBhcnNlSW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYUNvZGUiLCJjaGFyQ29kZUF0IiwiekNvZGUiLCJnZW5lcmF0ZWRDb2RlIiwiZnJvbUNoYXJDb2RlIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiTUFBQSxJQUFNQSxFQUFlQyxTQUFTQyxjQUFjLGdC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QyxFQUFLUCxPQUFPTyxFQUFNTixTQUlYLEVBQUF2QixZQUFmLFdBQ0ksSUFBSThCLEVBQWdCLElBQUlDLFdBQVcsR0FDL0JDLEVBQWdCLElBQUlELFdBQVcsR0FDL0JFLEVBQXdCbEMsRUFBS1csZUFBZW9CLEVBQU9FLEdBQ3ZEakQsRUFBV2lDLFVBQVlGLE9BQU9vQixhQUFhRCxJQUdoQyxFQUFBdkIsZUFBZixTQUE4QnlCLEVBQWFDLEdBQ3ZDLE9BQU9DLEtBQUtDLE1BQU1ELEtBQUtFLFNBQVdGLEtBQUtDLE1BQU1GLEVBQU1ELElBQVFBLEdBRW5FLEVBaElBLEdBa0lhLENBQVN6RCxFQUFjSSxFQUFrQkMsRUFBWUYsRUFBYUcsR0FFL0VDLEVBQW1CMkMsaUJBQWlCLFNBQVMsV0FBTSxPQUFBeEMsRUFBS1MsV0FDeERYLEVBQWtCMEMsaUJBQWlCLFNBQVMsV0FBTSxPQUFBeEMsRUFBS2tCLGNBQ3ZEbkIsRUFBcUJ5QyxpQkFBaUIsU0FBUyxXQUFNLE9BQUF4QyxFQUFLaUMsa0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2NvcmVdJykgYXMgSFRNTEhlYWRpbmdFbGVtZW50O1xuY29uc3QgY3ViZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jdWJlXScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgY3ViZVNjb3JlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWN1YmUtc2NvcmVdJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBrZXlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta2V5XScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgcHJvZ3Jlc3NCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZ3Jlc3MtYmFyXScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3Qgc3RhcnRCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZ2FtZS1zdGFydC1idG5dJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBzdG9wQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWdhbWUtc3RvcC1idG5dJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCByZXN0YXJ0QnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWdhbWUtcmVzdGFydC1idG5dJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbmNsYXNzIEdhbWUge1xuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDEwMDtcbiAgICBwcml2YXRlIGludGVydmFsOiBudW1iZXIgPSAyMDAwO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDogbnVtYmVyID0gbnVsbDtcbiAgICBwcml2YXRlIGludGVydmFsRXZlbnREZWxheTogbnVtYmVyID0gMTA7XG4gICAgcHJpdmF0ZSBjdXJyZW50RXZlbnRUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgd2FzUnVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzY29yZUVsZW1lbnQ6IEhUTUxIZWFkaW5nRWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBjdWJlU2NvcmVFbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBrZXlFbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBjdWJlRWxlbWVudDogSFRNTERpdkVsZW1lbnQsXG4gICAgICAgIHByaXZhdGUgcHJvZ3Jlc3NCYXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVPbktleVByZXNzKCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMud2FzUnVuID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0S2V5c0ludGVydmFsKCk7XG4gICAgICAgIEdhbWUuZ2VuZXJhdGVLZXkoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RXZlbnRUaW1lID0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0S2V5c0ludGVydmFsKCkge1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoR2FtZS5pbnRlcnZhbEV2ZW50LCB0aGlzLmludGVydmFsRXZlbnREZWxheSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wS2V5c0ludGVydmFsKCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIH1cblxuICAgIHN0b3BHYW1lKCkge1xuICAgICAgICBpZiAoIXRoaXMud2FzUnVuKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLndhc1J1biA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wS2V5c0ludGVydmFsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW50ZXJ2YWxFdmVudChjdXJyZW50OiBHYW1lKSB7XG4gICAgICAgIGN1cnJlbnQuY3VycmVudEV2ZW50VGltZSArPSBjdXJyZW50LmludGVydmFsRXZlbnREZWxheTtcbiAgICAgICAgY3VycmVudC51cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICBpZiAoY3VycmVudC5jdXJyZW50RXZlbnRUaW1lID4gY3VycmVudC5pbnRlcnZhbCkge1xuICAgICAgICAgICAgY3VycmVudC5hZGRTY29yZShHYW1lLmdlbmVyYXRlTnVtYmVyKC0xMCwgLTE1KSk7XG4gICAgICAgICAgICBjdXJyZW50LnJlc2V0RXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJFbGVtZW50LnN0eWxlLndpZHRoID0gU3RyaW5nKDEwMCAtIHRoaXMuY3VycmVudEV2ZW50VGltZSAvIHRoaXMuaW50ZXJ2YWwgKiAxMDApICsgJyUnO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U2NvcmUoc2NvcmU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjb3JlRWxlbWVudC5pbm5lckhUTUwgPSBzY29yZS50b1N0cmluZygpO1xuICAgICAgICBsZXQgY3ViZVNpemU6IHN0cmluZyA9IFN0cmluZygxMDAgKyBzY29yZSAvIDIpICsgJ3B4JztcbiAgICAgICAgdGhpcy5jdWJlRWxlbWVudC5zdHlsZS53aWR0aCA9IGN1YmVTaXplO1xuICAgICAgICB0aGlzLmN1YmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGN1YmVTaXplO1xuICAgICAgICBpZiAoc2NvcmUgPiAyMDApIHtcbiAgICAgICAgICAgIGFsZXJ0KCd2aWN0b3J5Jyk7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjb3JlIDwgMCkge1xuICAgICAgICAgICAgYWxlcnQoJ2xvc3MnKTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICBpZiAoIXRoaXMud2FzUnVuKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLndhc1J1biA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wS2V5c0ludGVydmFsKCk7XG4gICAgICAgIHRoaXMuc2V0U2NvcmUodGhpcy5zY29yZSk7XG4gICAgICAgIHRoaXMucmVzZXRFdmVudCgpO1xuICAgICAgICB0aGlzLmN1YmVTY29yZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVydmFsSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LnRvVXBwZXJDYXNlKCkgPT09IGtleUVsZW1lbnQuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICBsZXQgc2NvcmU6IG51bWJlciA9IEdhbWUuZ2VuZXJhdGVOdW1iZXIoNSwgMTApO1xuICAgICAgICAgICAgdGhpcy5hZGRTY29yZShzY29yZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZFNjb3JlKEdhbWUuZ2VuZXJhdGVOdW1iZXIoLTIwLCAtMjUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0RXZlbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0RXZlbnQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEV2ZW50VGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgR2FtZS5nZW5lcmF0ZUtleSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU2NvcmUoc2NvcmU6IG51bWJlcikge1xuICAgICAgICBsZXQgY3VycmVudFNjb3JlOiBudW1iZXIgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5zY29yZUVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgICAgICAgdGhpcy5jdWJlU2NvcmVFbGVtZW50LmlubmVySFRNTCA9IHNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuc2V0U2NvcmUoY3VycmVudFNjb3JlICsgc2NvcmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlT25LZXlQcmVzcygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0S2V5KGV2ZW50LmtleSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUtleSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFDb2RlOiBudW1iZXIgPSAnQScuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgbGV0IHpDb2RlOiBudW1iZXIgPSAnWicuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgbGV0IGdlbmVyYXRlZENvZGU6IG51bWJlciA9IEdhbWUuZ2VuZXJhdGVOdW1iZXIoYUNvZGUsIHpDb2RlKTtcbiAgICAgICAga2V5RWxlbWVudC5pbm5lckhUTUwgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGdlbmVyYXRlZENvZGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cbn1cblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKHNjb3JlRWxlbWVudCwgY3ViZVNjb3JlRWxlbWVudCwga2V5RWxlbWVudCwgY3ViZUVsZW1lbnQsIHByb2dyZXNzQmFyRWxlbWVudCk7XG5cbnN0YXJ0QnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWUuc3RhcnQoKSk7XG5zdG9wQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWUuc3RvcEdhbWUoKSk7XG5yZXN0YXJ0QnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWUucmVzdGFydEdhbWUoKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9