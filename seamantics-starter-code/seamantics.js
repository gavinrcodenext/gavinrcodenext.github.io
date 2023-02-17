function calculate() {
    // !!!!!!!!!!!!!!!!!! STEP 5 !!!!!!!!!!!!!!!!!!
    // Get the no. of seahorses from the user input and store it in a variable
    // Get the no. of starfish from the user input and store it in a variable
    // Get the no. of other beings from the user input and store it in a variable
    var num_octopus = document.getElementById("octopus").value
    var num_seahorse = document.getElementById("seahorse").value
    var num_starfish = document.getElementById("starfish").value
    var num_other = document.getElementById("other").value
    // !!!!!!!!!!!!!!!!!! STEP 6 !!!!!!!!!!!!!!!!!!
    // Calculate the total no. of water-blades needed and store it in a variable
    var total = num_octopus8 + num_seahorse*2 + num_starfish*5 + num_other*4
    // !!!!!!!!!!!!!!!!!! STEP 7 !!!!!!!!!!!!!!!!!!
    // Embed the result in the modal text body.
    document.getElementById("result").innerText = "Request " + total + "seablades"
}

// !!!!!!!!!!!!!!!!!! STEP 8 !!!!!!!!!!!!!!!!!!
// Call the function defined above when the user clicks the button to get the total no. of water-blades needed
document.getElementById("calculate").addEventListener("click", calculate)


