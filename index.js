let cont = 0;
const patternTel = /([(][0-9]{2}[)])\s[0-9]{4}\-[0-9]{4}/
const patternIdade = /^([0-9]|[^a-z'\/~`\!@#\$%\^&\*\(\)_\-\+=\{\}\[\]\|;:"\<\>,\.\?\\]])+$/i

 //  /^([0-9]|[^a-z\!\@\#\$\%\¨\&\*\/\{\}\<\>\;\:\.\,\´\"\'\|\=\^\~\º\°\?])+$/i


adicionaLinha = () => {
  let nome = document.querySelector(".nome").value;
  let telefone = document.querySelector(".tel").value;
  let idade = document.querySelector(".idade").value;
  let cpf = document.querySelector(".cpf").value;
  let isNomeValido = false;
  let isTelValido = false;

  VMasker(document.querySelector(".tel")).maskPattern("(99) 9999-9999");
  VMasker(document.querySelector(".cpf")).maskPattern("999.999.999-99");
  VMasker(document.querySelector(".idade")).maskNumber();

  if (nome == "") {
    $(".nome").addClass("is-invalid");
  } else {
    $(".nome").removeClass("is-invalid");
    $(".nome").addClass("is-valid");
    isNomeValido = true;
    
  }
  if (telefone == "" || !patternTel.test(telefone)) {
    $(".tel").addClass("is-invalid");
  } else{
    $(".tel").removeClass("is-invalid");
    $(".tel").addClass("is-valid");
    isTelValido = true;
  }
  if (idade == "" || !patternIdade.test(idade) || idade < 1) {
    $(".idade").addClass("is-invalid");
  } else {
    $(".idade").removeClass("is-invalid");
    $(".idade").addClass("is-valid");
  }
  if (isNomeValido && isTelValido) {
    cont++;
    $("tbody").append(
      `<tr class="fecha"><td>${cont}</td><td>${nome}</td><td>${telefone}</td><td>${idade}</td><td><button onclick="removeLinha()" type="button" class="btn btn-danger d-flex align-self-center fecha">X</button></td></tr>`
    );
    $(".nome").val("");
    $(".tel").val("");
    $(".idade").val("");
    setTimeout(() => {
      $(".nome").removeClass("is-valid")
      $(".tel").removeClass("is-valid")
    }, 500);
  }
}

removeLinha = () => {
  $(".fecha").click(function () {
    $(this).fadeOut("fast");
  });
}




