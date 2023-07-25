function calculatePercentages() {
    const figureInput = document.getElementById("figure").value;
    const fivePercentOutput = document.getElementById("fivePercentOutput");
    const sevenPointFivePercentOutput = document.getElementById("sevenPointFivePercentOutput");

    // Check if input is a valid number
    if (isNaN(figureInput)) {
        alert("Please enter a valid number!");
        return;
    }

    const figure = parseFloat(figureInput);
    const fivePercent = figure * 0.05;
    const sevenPointFivePercent = figure * 0.075;

    fivePercentOutput.textContent = fivePercent.toFixed(2);
    sevenPointFivePercentOutput.textContent = sevenPointFivePercent.toFixed(2);
}
