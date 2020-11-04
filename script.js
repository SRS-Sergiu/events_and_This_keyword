
let makeRandomColor  = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return  `rgb(${r}, ${g}, ${b})`;
} ;

let buttons = document.querySelectorAll('button');

for(let button of buttons) {
        button.addEventListener('click', colorize);
}
function colorize() {
        this.style.backgroundColor = makeRandomColor()
}