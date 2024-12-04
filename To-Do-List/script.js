const button = document.querySelector('.btn-tarefa')
let input = document.querySelector('.input-tarefa')
const listaToda = document.querySelector('.lista')


let lista_de_itens = []

function adicionar_item() {
    const tarefa = input.value.trim();
    if (tarefa === '') return;

    lista_de_itens.push({
        tarefa: input.value,
        concluida: false

    })

    mostrar_itens()
}

function mostrar_itens() {

    let novo_card = ''

    lista_de_itens.forEach((item, lugar) => {
        novo_card += `
        <li class="tarefas ${item.concluida && "done"}">
            <img src="img/check.png" alt="Ja fiz" onclick="ja_fiz(${lugar})">
            <p>${item.tarefa}</p>
            <img src="img/lixeira.png" alt="Excluir" onclick="deletar(${lugar})">
        </li>
        `;
        
        input.value = ''
}); 

    listaToda.innerHTML = novo_card 

}

function ja_fiz(lugar) {
    lista_de_itens[lugar].concluida = !lista_de_itens[lugar].concluida
    mostrar_itens()
}

function deletar(lugar) {
    lista_de_itens.splice(lugar, 1);
    mostrar_itens()
}


button.addEventListener('click', adicionar_item)


// Enter no botão

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }

});