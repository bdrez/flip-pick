
const data=JSON.parse(localStorage.getItem("draftee"));
if (data) {
  document.getElementById("codeDisplay").textContent = ` ${data.code}`;
  document.getElementById("playersInfo").textContent = ` ${data.numPpl}`;
  document.getElementById("timeTurnInfo").textContent = ` ${data.timeTurn}`;
  document.getElementById("reminderInfo").textContent = ` ${data.timeReminder}`;
  document.getElementById("notificationInfo").textContent = `Notify by: ${data.notiF}`;
  
}
