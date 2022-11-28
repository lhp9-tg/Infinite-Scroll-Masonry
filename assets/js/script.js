
//infinite scroll

i = 1;

function fillTheGrid() {

    var newDiv = document.createElement("div");

    var width = Math.round((Math.random(3)) + 1);
    var height = Math.round((Math.random(3)) + 1);

    newDiv.classList = 'grid-item grid-item--width' + width + ' grid-item--height' + height + '';
    newDiv.style.background = 'url(https://picsum.photos/' + (width * 300) + '/' + (height * 100) + '?random=' + i + ')'

    document.querySelector('.grid').appendChild(newDiv);
    i++

    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
    });
}

window.addEventListener('wheel', () => fillTheGrid())


