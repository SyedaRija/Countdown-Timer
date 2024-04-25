const endDate = "26 April 2024 09:00 PM";
document.getElementById("end-date").innerText= endDate;

const inputs = document.querySelectorAll("input") ;


function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    inputs[0].value = Math.floor(diff / 24 /3600);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 3600) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
clock();

setInterval(() => {
    clock()
}, 1000);




/**
 * 1 day = 24 hrs
 * 1 hrs = 60 mins
 * 60 mins = 3600 sec
 */