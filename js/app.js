function getQoute() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoutes(data))
}
function displayQoutes(data) {

    const qoutes = document.getElementById('quotes');
    qoutes.innerText = data.quote;
}