const listadoPersonal = [];

// Función para agregar un nuevo empleado (utilizamos una función flecha, metodo push de JS, plantillas literales)
export const AgregarEmpleado = (empleado) => {
    listadoPersonal.push(empleado);
    console.log(`Empleado agregado: ${empleado.nombre}, ${empleado.fechaNacimiento}, ${empleado.ciudad}, ${empleado.telefono}`);
    console.log('Listado de empleados:', listadoPersonal);
    RenderizarTabla();
}

export const ObtenerEmpleado = () => listadoPersonal;

export function RenderizarTabla() {
    const cuerpoTabla = document.getElementById('cuerpo-tabla');
    if (!cuerpoTabla) return;
    cuerpoTabla.innerHTML = listadoPersonal.map((p) => `
    <tr>
    <td>${p.nombre}</td>
    <td>${p.fechaNacimiento}</td>
    <td>${p.ciudad}</td>
    <td>${p.telefono}</td>
    </tr>
    `).join("");
}