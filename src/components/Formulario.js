import { AgregarEmpleado } from "../logic/Logica";

export function Formulario() {
    // Llamamos la logica desde el otro archivo (Lógica.js)
    const enviarDatos = (event) => {
        event.preventDefault();

        const empleado = {
            nombre: event.target.nombre.value,
            fechaNacimiento: event.target.fechaNacimiento.value,
            ciudad: event.target.ciudad.value,
            telefono: event.target.telefono.value
        };

        AgregarEmpleado(empleado);
        event.target.reset();
    }
    return (
        <div className="formulario">
            <form className="formulario-style" onSubmit={enviarDatos}>
                <div className="formulario-campo">
                    <label htmlFor="Nombre">Nombre completo: </label>
                    <input type="text" id="nombre" name="nombre" placeholder="ej. Armando Rodríguez" required />
                </div>

                <div className="formulario-campo">
                    <label htmlFor="FechaNacimiento">Fecha nacimiento: </label>
                    <input type="date" id="fechaNacimiento" name="fechaNacimiento" placeholder="ej. 02/02/2002" required />
                </div>

                <div className="formulario-campo">
                    <label htmlFor="Ciudad">Ciudad: </label>
                    <input type="text" id="ciudad" name="ciudad" placeholder="ej. León, Guanajuato. México" required />
                </div>

                <div className="formulario-campo">
                    <label htmlFor="Telefono">Teléfono: </label>
                    <input type="tel" id="telefono" name="telefono" placeholder="ej. 4778855225" required />
                </div>
                <BotonEnviar />
            </form>
        </div>
    )
}

function BotonEnviar() {
    return (
        <div>
            <div className="boton-enviar">
                <button type="submit">Enviar datos</button>
            </div>
            <br />
            <div className="boton-limpiar">
                <button type="reset">Limpiar datos</button>
            </div>
        </div>
    )
}