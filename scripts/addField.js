//Procurar o botao
document.querySelector('#add-time').addEventListener('click', cloneField);

//Executar uma ação
function cloneField() {
  //Duplicar o campo, que campo?
  const newFieldContainer = document
    .querySelector('.schedule-item')
    .cloneNode(true);
  //pegar os campos
  const fields = newFieldContainer.querySelectorAll('input');
  //para cada campo
  fields.forEach(function (field) {
    field.value = '';
  });
  //colocar na página: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
