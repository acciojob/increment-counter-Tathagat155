//your JS code here. If required.
// Get elements
    const counterPara = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    // Add click event
    incrementBtn.addEventListener("click", function() {
      let currentValue = parseInt(counterPara.textContent);

      // Alert the un-incremented value
      alert(currentValue);

      // Increment the value
      counterPara.textContent = currentValue + 1;
    });