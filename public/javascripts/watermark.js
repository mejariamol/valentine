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

var bg = 0;

$(document).ready(() => {
    $('#palette').click((e) => {
        e.preventDefault()

        bg = (bg+1)%bgs.length
        $('.watermark').css({'background-image': 'url(/images/'+bgs[bg]+')'})
    })
})