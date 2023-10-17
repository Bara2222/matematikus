//alert('test');
const button = document.getElementById('proved');
const vysledek = document.getElementById('vysledek');

function sum(a, b){
    return a + b;
}

function randomNum(min, max){
    if(min>max){
        [min, max] = [max, min];
    }
    return Math.round(Math.random() * (max-min) + min);
}

button.addEventListener('click', function(){
    let x = Number(document.getElementById('x').value);
    if(isNaN(x))alert('X není číslo!');
    let y = parseFloat(document.getElementById('y').value);
    if(isNaN(y))alert('Y není číslo!');
    let funkce = document.getElementById('funkce').value;
    console.log(x, y, funkce);
    switch (funkce){
        case 'sum':
            vysledek.innerHTML = `${x} + ${y} = <b>${sum(x, y)}</b>`;
            break;
        case 'randomNum':
            console.log(randomNum('x, y'));
            vysledek.innerHTML =`Náhodné číslo mezi ${x} a ${y} je <b>${randomNum(x, y)}</b>`;
            break;
            default:
                console.log('Funkce neexistuje');
    }
})