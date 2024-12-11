function create(){
    let topic = document.getElementById('topic_input').value;
    let reason = document.getElementById('reasons_input').value;
    let vanue = document.getElementById('vanue_input').value;
    let date = document.getElementById('date_input').value;

    document.getElementById('title_show').innerHTML= topic;
    document.getElementById('reasons_show').innerHTML= reason;
    document.getElementById('vanue_show').innerHTML= vanue;
    document.getElementById('date_show').innerHTML = date;

    var x = document.getElementById("card");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}