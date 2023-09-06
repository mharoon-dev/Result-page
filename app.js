const input = document.getElementById("input")

function searchBtn() {
    if (input.value == "133749") {
        window.location = "./result page/results/result1.html"
    } else if (input.value == "130474" ) {
        window.location = "./result page/results/result 2.html"
    } else if (input.value == "128" ) {
        window.location = "./result page/results/result 3.html"
    } else if (input.value == "133750" ) {
        window.location = "./result page/results/result 4.html"
    } else {
        alert("Write the correct roll number")
    }
}