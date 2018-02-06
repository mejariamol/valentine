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
        from_last_name: $('#fromLastName').val()
    }

    $.post('/api/greetings', greeting, (res, status) => {
        console.log(res)
        $('#creator').hide()
        $('#result-url').val('http://loveyoupats.com/' + res.data._id)
        $('#result').show()
    })
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