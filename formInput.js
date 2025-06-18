function test(){
    //retrive data
    const numPpl = document.getElementById("number").value;
    //alert(numPpl);//make the alert say something ligit
    const gymDraft=document.getElementById("number2").value;
    const timeTurn=document.getElementById("time").value;
    const timeReminder=document.getElementById("time2").value;
    const notiF=document.getElementById("dropdown").value;

    //alert(numPpl + gymDraft + timeTurn + timeReminder + notiF);

    //storing data local
    var ppl= localStorage.setItem("numPpl", numPpl);
    var gym= localStorage.setItem("gymDraft", gymDraft);
    var turn= localStorage.setItem("timeTurn", timeTurn);
    var rem= localStorage.setItem("timeReminder", timeReminder);
    var not= localStorage.setItem("notiF", notiF);

    //gonna generate a random code to be stored and shared

    const code =crypto.randomUUID().replaceAll("-", "");// generate a random uuid

    //to splie and get unique id to use as code for user to share
    //let uuid = crypto.randomUUID().replaceAll("-", "").slice(0, 12);
    //or make it a link they can share


    var uniq=localStorage.setItem("uniqCode", uuid);



}
