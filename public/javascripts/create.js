$(document).ready(() => {
    $('#btnSubmit').click((e) => {
        e.preventDefault()
        if ($('#toFirstName').val().trim()=="") {
            $('#toFirstName').focus()
            console.log('Bad Request')
            return
        }
        if ($('#message').val().trim()=="") {
            $('#message').focus()
            console.log('Bad Request')
            return
        }
        if ($('#fromFirstName').val().trim()=="") {
            $('#fromFirstName').focus()
            console.log('Bad Request')
            return
        }

        var greeting = {
            to_first_name: $('#toFirstName').val(),
            to_last_name: $('#toLastName').val(),
            message: $('#message').val(),
            from_first_name: $('#fromFirstName').val(),
            from_last_name: $('#fromLastName').val(),
            bg_path: bgs[bg],
            bg_color: bcs[bc]
        }

        $.post('/api/greetings', greeting, (res, status) => {
            console.log(res)
            $('#creator').hide()
            $('#swipe_left').hide()
            $('#swipe_right').hide()
            $('#result-url').val('http://loveyoupats.com/' + res.data._id)
            $('#result').show()
        })
    })

    $('#swipe_right').click((e) => {
        e.preventDefault()
        $('.preview').css({}).animate({'width': '100%'})
        $('.form').css({}).animate({'width': 0})
        $('#swipe_right').hide()
        $('#swipe_left').show()
    })

    $('#swipe_left').click((e) => {
        e.preventDefault()

        $('.preview').css({}).animate({'width': 0})
        $('.form').css({}).animate({'width': '100%'})
        $('#swipe_right').show()
        $('#swipe_left').hide()
    })

    $('#btnCopy').click((e) => {
        e.preventDefault()

        $('#result-url').focus()
        document.execCommand('SelectAll')
        document.execCommand('Copy')
    })

    $('#btnView').click((e) => {
        e.preventDefault()

        window.location.replace($('#result-url').val())
    })

    $('#btnFeedback').click((e) => {
        e.preventDefault()

        window.open('http://loveyoupats.com/contact-us/feedback', '_blank')
    })
})
