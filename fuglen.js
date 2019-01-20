const main = document.querySelector("main");
const fuglen = main.querySelector("img");


const g = 0.1;
const bakgrunn = {
    x: 0,
    fart: -1
}

const fugl = {
    x: 30,
    y: 100,
    nedoverfart: 1
}

function fallNed() {
    fugl.nedoverfart += g;
    fugl.x += fugl.nedoverfart;
    fuglen.style.top = fugl.x + "px";
    fuglen.style.transform = `rotate(${fugl.nedoverfart*5}deg)`;
}

function flyttBakgrunn() {
    bakgrunn.x += bakgrunn.fart;
    main.style.backgroundPosition = bakgrunn.x + "px" + " bottom";
}

function flaks() {
    fugl.nedoverfart = -4;
}


function loop() {

    flyttBakgrunn();
    fallNed();
    requestAnimationFrame(loop);

}

loop();
document.addEventListener("click", flaks);
