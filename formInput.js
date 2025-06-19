function test(){
    //retrive data
    const numPpl = document.getElementById("number").value;
    //alert(numPpl);//make the alert say something ligit
    const gymDraft=document.getElementById("number2").value;
    const timeTurn=document.getElementById("time").value;
    const timeReminder=document.getElementById("time2").value;
    const notiF=document.getElementById("dropdownDefaultButton").textContent;

    //alert(numPpl + gymDraft + timeTurn + timeReminder + notiF);
    //gonna generate a random code to be stored and shared

    const code =crypto.randomUUID().replaceAll("-", "");// generate a random uuid

    //const uuid=localStorage.setItem("uniqCode", code);

    /*/storing data local
    gonna make one whole thing 
    const ppl= localStorage.setItem("numPpl", numPpl);
    const gym= localStorage.setItem("gymDraft", gymDraft);
    const turn= localStorage.setItem("timeTurn", timeTurn);
    const rem= localStorage.setItem("timeReminder", timeReminder);
    const not= localStorage.setItem("notiF", notiF);*/

    const draftData={ //same name for short form
        code,
        numPpl,
        gymDraft,
        timeTurn,
        timeReminder,
        notiF
    };

    localStorage.setItem(code, JSON.stringify(draftData));

    window.location.href = `codeEnterSheet.html?code=${code}`;


    //to splie and get unique id to use as code for user to share
    //let uuid = crypto.randomUUID().replaceAll("-", "").slice(0, 12);
    //or make it a link they can share
}

document.querySelector('form').addEventListener("submit", function(e){
    e.preventDefault();
    test();
});


