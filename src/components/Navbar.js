import logoIDE from '../img/logoide.png';

export function Navbar() {
    return (
        <div className="navbar">
            <header className="estilo-navegacion">
                <a href="/">
                    <img src={logoIDE} width="40" height="38"  alt="Logo de Autos IDE"/>
                    <span>Autos Seminuevos IDE</span>
                </a>
                <ul className="nav-pestaniasNav">
                    <li>
                        <a href="/" className="nav-pestania">Inicio</a>
                        <a href="/" className="nav-pestania">Gestión de Personal</a>
                        <a href="/" className="nav-pestania">Gestión de Autos</a>
                        <a href="/" className="nav-pestania">Contabilidad</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}