//procurar o botão
document.querySelector("#add-time").addEventListener("click", cloneField)
// quando clicar no botão


//executar uma ação

function cloneField(){

//duplicar os campos. que campos?

   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

//pegar os campos!!
   const fields = newFieldContainer.querySelectorAll('input')

//Para cada campo limpar!!
    fields.forEach(function(field){
     //pega o field do momento e limpa
      field.value = ""
    })

//colocar na pagina, onde colocar?

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

