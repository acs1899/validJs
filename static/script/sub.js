$(function(){
    $('.sub').on('click',function(event){
        event.preventDefault();
        var form = $('form');
        if(form.data('valid').call(form)){
            form.submit();
        }
    });
});
