//Procurar o botão
document.querySelector("#add-time")
    .addEventListener('click', cloneField)
    //Quando clicar no botão

//Executar uma ação
function cloneField() {
    //Duplicar os campos

    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false

    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    })

    //Colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}