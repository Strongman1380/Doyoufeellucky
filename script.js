document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".game-btn");
    const resultBox = document.getElementById("result-box");

    // Answers mapped to numbers
    const answers = {
        1: "$25",
        2: "$35",
        3: "$25",
        4: "$40",
        5: "$35",
        6: "$25",
        7: "$35",
        8: "$25",
        9: "$35"
    };

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const number = event.target.getAttribute("data-number");
            resultBox.innerText = `You got: ${answers[number]}!`;
            resultBox.style.visibility = "visible";
        });
    });
});