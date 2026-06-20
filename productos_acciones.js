const products = document.querySelector("#products")
const filtro = document.querySelector("#filtro")

let pesitos = new Intl.NumberFormat('es-Mx', {
    style: 'currency',
    currency: 'MXN',
});

function mostrarProductos(productos) {
let productRow = ``
for (let index = 0; index < productos.length; index++){
    const totalStock = productos[index].precio * productos[index].stock
    productRow += `
<tr>
        <th>${productos[index].id}</th>
        <td>${productos[index].nombre}</td>
        <td>${pesitos.format(productos[index].precio)}</td>
        <td>${productos[index].categoria}</td>
        <td>${productos[index].stock}</td>
        <td>${pesitos.format(totalStock)}</td>
      </tr>
      `
}
products.innerHTML = productRow
}

function cargarCategorias() {
    const categorias = [...new Set(productosData.map(producto => producto.categoria))]
    let options = `<option value="todos">Todas las categorias</option>`

    for (let index = 0; index < categorias.length; index++) {
        options += `<option value="${categorias[index]}">${categorias[index]}</option>`
    }

    filtro.innerHTML = options
}

document.addEventListener("DOMContentLoaded", e => {
    cargarCategorias()
    mostrarProductos(productosData)
})

filtro.addEventListener("change", e => {
    const categoria = e.target.value

    if (categoria === "todos") {
        mostrarProductos(productosData)
        return
    }

    const productosFiltrados = productosData.filter(producto => producto.categoria === categoria)
    mostrarProductos(productosFiltrados)
})
//Tarea 1: agregar una columna llamada total de stock
//Total de stock = precio * stock del producto
// Tarea 2: Filtrar por categorias 
