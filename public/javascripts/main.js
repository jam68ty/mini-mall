$(document).ready(function(){
  $('.deletePost').on('click', deletePost);
});
$(document).ready(function(){
  $('.deleteCart').on('click', deleteCart);
});

function deletePost(){
  var confirmation = confirm('Are you sure?')

  if(confirmation){
    $.ajax({
      type: 'DELETE',
      url: '/pages/delete/' + $(this).data('id')
    }).done(function(response){
      window.location.replace('/pages')
    })
    window.location.replace('/pages')

  } else {
    return false;
  }
}
function deleteCart(){
  var confirmation = confirm('Are you sure?')

  if(confirmation){
    $.ajax({
      type: 'DELETE',
      url: '/pages/delete/' + $(this).data('id')
    }).done(function(response){
      window.location.replace('/pages/cart')
    })
    window.location.replace('/pages/cart')

  } else {
    return false;
  }
}