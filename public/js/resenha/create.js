'use strict'

document.body.onload = function () {

    initTextEditor();
    initListeners();
}

function initListeners(){
    document.getElementById("btnCriar").addEventListener("click", btnCriar_click);
}

function initTextEditor(){
    tinymce.init({
    selector: '#resenha',
    theme: 'modern',
    plugins: [
      'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
      'save table contextmenu directionality emoticons template paste textcolor'
    ],
    content_css: 'css/content.css',
    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons'
  });
}

function btnCriar_click(){

    console.log(tinymce.activeEditor.getContent());
}