/*onsole.log(JSON.parse(window.localStorage.getItem('draftee')));//to see in console
const data=JSON.parse(localStorage.getItem('draftee'));
//later potentially save all - this overwrite only stores current one
const draftArray= JSON.parse(localStorage.getItem('person')) || [];
const drafteeData=JSON.parse(localStorage.getItem("draftee"));
draftArray.push(drafteeData);
localStorage.setItem("person", JSON.stringify(draftArray));
*/

const data=JSON.parse(localStorage.getItem("draftee"));
//only doing this for code bec it needs to be displayed
if (data) {
  document.getElementById("codeDisplay").textContent = ` ${data.code}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("draftee"));
  if (data) {
    //only to display code 
    document.getElementById("codeDisplay").textContent = ` ${data.code}`;


    // 3. Do something like this:
    const playerContainer = document.createElement("div");
    for (let i = 0; i < Number(data.numPpl); i++) {
      const playerBox = document.createElement("div");
      playerBox.textContent = `Player ${i + 1}`;
      playerContainer.appendChild(playerBox);
    }
    document.body.appendChild(playerContainer);

   
  }
});
