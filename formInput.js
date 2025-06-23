function test(){
    //retrive data
    const numPpl = document.getElementById("number").value;
    //alert(numPpl);//make the alert say something ligit
    const gymDraft=document.getElementById("number2").value;
    const timeTurnHour=document.getElementById("hoursDropdown").value;
    const timeTurnMin=document.getElementById("minutesDropdown").value;
    const timeReminderHour=document.getElementById("houDropdown").value;
    const timeReminderMin=document.getElementById("minDropdown").value;
    const notiF=document.getElementById("dropdownDefaultButton").textContent;

    //convert both hours to minutes 
    const turnMinutes = (parseInt(timeTurnHour) ) * 60 + (parseInt(timeTurnMin));
    const reminderMinutes = (parseInt(timeReminderHour)) * 60 + (parseInt(timeReminderMin));
    //alert(numPpl + gymDraft + timeTurn + timeReminder + notiF);
    //gonna generate a random code to be stored and shared

    //splice it for short better, maybe make a link later 
    const code =crypto.randomUUID().replaceAll("-", "");//.slice(0, 12);// generate a random uuid

    //const uuid=localStorage.setItem("uniqCode", code);

    const draftData={ //same name for short form
        code,
        numPpl,
        gymDraft,
        timeTurnHour,
        timeTurnMin,
        timeReminderHour,
        timeReminderMin,
        notiF
    };

    localStorage.setItem("draftee", JSON.stringify(draftData));

    window.location.href = `codeEnterSheet.html?code=${code}`;


  
}

document.querySelector('form').addEventListener("submit", function(e){
    e.preventDefault();
    test();
});

