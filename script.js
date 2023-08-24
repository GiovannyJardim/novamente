function iniciar() {
    const form = document.querySelector('form')
    console.log(form)

    form.addEventListener('submit', (evento) => {
        evento.preventDefault()

        const usuario = {
            nome: evento.target[0].value,
            sobrenome: evento.target[1].value            
        }
        
        document.querySelector('tbody').innerHTML += `
            <tr>
                <td>${usuario.nome}</td>
                <td>${usuario.sobrenome}</td>
            </tr>
        `

    })
}

iniciar()