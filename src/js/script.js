// This line of code will make sure the page is fully loaded
window.onload = function () {
  // Write the logic in this function

  // 1. Get the excuse element
  const excuse = document.getElementById("excuse");

  // 2. Generate a random excuse

  // const excuseText = `The dog ate my homework for breakfast`;

  let newExcuse = [
    ["Jake", "Allen", "My dog", "A ghost", "A rat"],
    ["pooped at", "burned", "sold", "ate", "spat at"],
    ["my laptop", "my computer", "my keyboard", "my phone", "my bed"],
    ["yesterday", "a week ago", "a month ago", "a minute ago", "an hour ago"],
  ];

  let i = 0;
  const excuseNum = Math.floor(Math.random() * 5);
  const combinedExcuse = `${newExcuse[i++][excuseNum]} ${
    newExcuse[i++][excuseNum]
  } ${newExcuse[i++][excuseNum]} ${newExcuse[i++][excuseNum]}`;

  // 3. Inseart the excuse into the excuse element
  // excuse.innerHTML = excuseText[excuseNum];
  excuse.innerHTML = combinedExcuse;
};
