const modalClienteEditar = new bootstrap.Modal(document.getElementById('modalClienteEditar'))
const on9 = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on9(document, 'click', '.btnEditarC', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    
    tipodocumentoC_editar.value = fila.children[1].innerHTML
    numerodocumentoC_editar.value = fila.children[2].innerHTML
    nombreC_editar.value = fila.children[3].innerHTML
    correoC_editar.value = fila.children[4].innerHTML
    direccionC_editar.value = fila.children[5].innerHTML
    telefonoC_editar.value = fila.children[6].innerHTML
    estadoC_editar.value = fila.children[7].innerHTML
    
    modalClienteEditar.show()
})