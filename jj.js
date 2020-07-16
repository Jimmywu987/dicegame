


let ranNum1, ranNum2;

function roll() {
ranNum1 = Math.floor(Math.random() * 6) + 1;
ranNum2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('.scoreLeft').textContent = `Score: ${ranNum1}`
document.querySelector('.scoreRigth').textContent = `Score: ${ranNum2}`
document.querySelector('.leftImg').setAttribute('src',`./images/dice-${ranNum1}.png`)
document.querySelector('.rigthImg').setAttribute('src',`./images/dice-${ranNum2}.png`)

if(ranNum1 > ranNum2) {
    document.querySelector('h1').textContent = "Left Side WON!"
} else if (ranNum2 > ranNum1) {
    document.querySelector('h1').textContent = "Rigth Side WON!"
} else {
    document.querySelector('h1').textContent = "You BOTH are Suckers!!"
}


}

document.querySelector('button').addEventListener('click', roll)

