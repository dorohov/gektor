function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
  
    if(event.keyCode == 10 && getSelectionText().length > 0) {

        if(getSelectionText().length > 50) {
            alert('Максимальная длина текста должна быть не более 50 символов')
        }else {
            var msg = prompt(getSelectionText() + '\n-------------------\nСообщить администратору сайта об ошибке. \nОставьте комментарий (не обязательно)');

            if(msg != null) {

                $.ajax({
                    url: 'send.php',
                    type: 'POST',
                    data: ''
                }).done(function(data) {

                })

                alert('Спасибо!')
            }

        }
    }

});