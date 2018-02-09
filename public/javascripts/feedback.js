$(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // Parsing Stars
    /*var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    if (ratingValue > 0) {
      
    }*/
    
  });

  /* Submit Feedback click */

  $('#btnSubmit').click((e) => {
    e.preventDefault()

    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    if (ratingValue > 0) {
      $.post('http://loveyoupats.com/api/feedbacks', {rating: ratingValue, comment: $('#comment').val()}, (res, status) => {
        console.log(res)
        $('#feedback-form').hide()
        $('#thanks').show()
      })
    }
  })

  /* Redirect to Site Click */

  $('#btnRedirect').click((e) => {
    e.preventDefault()

    window.location.replace('http://loveyoupats.com')
  })
  
  
});


function responseMessage(msg) {
  $('.success-box').fadeIn(200);  
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}