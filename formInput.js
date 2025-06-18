function test(){
    //retrive data
    var numPpl = document.getElementById("number").value;
    //alert(numPpl);//make the alert say something ligit
    var gymDraft=document.getElementById("number2").value;
    var timeTurn=document.getElementById("time").value;
    var timeReminder=document.getElementById("time2").value;
    var notiF=document.getElementById("dropdown").value;

    //alert(numPpl + gymDraft + timeTurn + timeReminder + notiF);

    //storing data local
    var ppl= localStorage.setItem("numPpl", numPpl);
    var gym= localStorage.setItem("gymDraft", gymDraft);
    var turn= localStorage.setItem("timeTurn", timeTurn);
    var rem= localStorage.setItem("timeReminder", timeReminder);
    var not= localStorage.setItem("notiF", notiF);

    //gonna generate a random code to be stored and shared

    var uuid =crypto.randomUUID();// generate a random uuid

    var uniq=localStorage.setItem("uniqCode", uuid);
}
