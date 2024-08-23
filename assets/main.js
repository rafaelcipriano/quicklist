const form = document.querySelector('form')
const input = document.querySelector('input[type=text]')
const list = document.querySelector('ul')

form.addEventListener("submit", (event) => {
  event.preventDefault()

  if(input.value == '') {
    alert("Você precisa digitar um item para adicionar.")
    return
  }

  // Cria item da lista.
  const li = document.createElement('li')
  const itemId = `item-${Date.now()}`
  li.innerHTML = `
  <input type="checkbox" name="item" id="${itemId}">
  <label for="${itemId}">${input.value}</label>
  <button>
    <img src="assets/icons/trash.svg" alt="Ícone de lixo">
  </button>
  `

  // Adiciona o item à lista.
  list.appendChild(li)

  // Limpa o campo de entrada.
  input.value = ''

  // Adiciona o evento de remoção ao botão.
  li.querySelector('button').addEventListener("click", () => {
    li.remove()

    // Exibe alerta de remoção de item.
    document.getElementById('alert').style.visibility = 'visible'
  })

  // Remove o alerta de remoção de item.
  document.getElementById('delete').addEventListener("click", () => {
    document.getElementById('alert').style.visibility = 'hidden'
  })
})