$( document ).ready(function() {
    $('#button').click(function(){
        searchgit();
    })
});

function searchgit(){
    $.get("https://api.github.com/users/anachacon", displayName)
}

function displayName(data) {
    $('p').html(data.name);
  }
  