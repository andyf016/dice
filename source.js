const arr = [0,0,0,0,0,0,0,0,0,0,0,0,0]
for (i = 1; i<=1000; i++){
    let diceroll = Math.floor(Math.random() * 6) + 1;
    let secondDice = Math.floor(Math.random() * 6 ) +1;
    let sum = (diceroll + secondDice);
    arr[sum] = arr[sum] + 1
}
const siteContent = document.getElementById('site-contents');

for (let i = 2; i < arr.length; i++){
    const div = document.createElement('div');
    const roll = arr[i];
    const txt = document.createTextNode(i +": "+ roll);
    div.appendChild(txt);
    div.id = i
    div.style.width = (arr[i] * 2.5) + 'px'
    div.style.backgroundColor = "grey"
    div.style.border = "thin dotted #0000FF";
    siteContent.appendChild(div)

}


// Thanks to David R. for Assistance
