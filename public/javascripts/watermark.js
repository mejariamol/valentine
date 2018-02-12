var bgs = [
    'bg23.jpeg',
    'bg22.jpeg',
    'bg24.jpeg',
    'bg26.jpeg',
    'bg27.jpeg',
    'bg28.jpeg',
    'bg19.jpeg',
    'bg31.jpeg'
]

var bg = 5;
var bc = 0;

var bcs = [
    '#ff7675',
    '#fd79a8',
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#f1c40f',
    '#e67e22'
]

$(document).ready(() => {
    $('#palette').click((e) => {
        e.preventDefault()

        /*bg = (bg+1)%bgs.length
        $('.watermark').css({
            'background-image': 'url(/images/'+bgs[bg]+')'
        })*/

        bc = (bc+1)%bcs.length
        $('.board').css({
            'background-color': bcs[bc]
        })
    })
})