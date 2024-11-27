
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');

    // 2. Generate a random excuse

    // const excuseText = `The dog ate my homework for breakfast`;
    const excuseText = [
        "You guys suck",
        "Sorry guys, I got wife aggro",
        "Healer is trash",
        "Hunter pet pulled everything",
        "LAG!#$##%^$^"
    ];

    const excuseNum = Math.floor(Math.random()*5);

    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = excuseText[excuseNum];
}