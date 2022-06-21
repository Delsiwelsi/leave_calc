



function calculateD() {
    let hours = document.getElementById("h").value;
    let per_day = (parseFloat(hours) /52) /5;
    document.getElementById("p_d").value = per_day;
}
h.addEventListener ("input", calculateD);
    


function calculateF() {
    let hours = document.getElementById("h").value; 
    let per_day = document.getElementById("p_d").value;
    let per_fortnight = per_day * hours;
    document.getElementById("p_f").value = per_fortnight;
}
h.addEventListener ("input", calculateF);