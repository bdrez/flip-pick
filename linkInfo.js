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
