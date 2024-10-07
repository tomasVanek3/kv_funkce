if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function Calculate(){
    const hodnota_a = document.getElementById('a').value;
    const hodnota_b = document.getElementById('b').value;
    const hodnota_c = document.getElementById('c').value;

    let res1;
    let res2;

    let disc = (hodnota_b * hodnota_b) - (4 * hodnota_a * hodnota_c);

    if (disc >= 0){
        if(disc = 0){
            res1 = (-hodnota_b) / (2*hodnota_a);
            res2 = (-hodnota_b) / (2*hodnota_a);
        }
        else{
            res1 = (-hodnota_b + Math.sqrt(disc)) / (2*hodnota_a);
            res2 = (-hodnota_b - Math.sqrt(disc)) / (2*hodnota_a);
        }

2
    }else{
        res1 = "Nelze najít výsledek v poli reálných čísel";
    }

    document.getElementById('x1').innerText = res1;
    dosument.getElementById('x2').innerText = res2;
}