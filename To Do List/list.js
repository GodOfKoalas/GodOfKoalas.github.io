

$(`#add`).click(() => {
    $('ul').append(`<li class="dele">${$('#do').val()}<button class="del"></button><input type="checkbox" class="check"></li>`);
    $('.dele').on('click', '.del', (event) => {
        $(event.target).parent().remove();
      });
    
});
