var bgs = [
    'bg35.jpg',
    'bg23.jpeg',
    'bg22.jpeg',
    'bg27.jpeg',
    'bg33.jpeg',
    'bg19.jpeg',
    'bg31.jpeg',
    'bg36.jpg'
]

var bg = 0;
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

        $('.board').show()
        $('p').css({color: "#fff"})
        bc = (bc+1)%bcs.length
        $('.board').css({
            'background-color': bcs[bc]
        })
    })

    $('#insert-watermark').click((e) => {
        e.preventDefault()

        $('.board').hide()
        $('p').css({color: "#c0392b"})
        bg = (bg+1)%bgs.length
        $('.watermark').css({
            'background-image': 'url(/images/'+bgs[bg]+')'
        })
    })
})