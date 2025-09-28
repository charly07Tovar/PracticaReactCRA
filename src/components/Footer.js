export function  Footer() {
    return (
        <div className="footer-style">
            <footer>
                <div className="footer-content">
                    <div className="footer-empresa">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">IDE</div>
                            <div className="footer-logo-text">
                                <h3>Autos Seminuevos IDE</h3>
                                <span>Tu mejor opción en seminuevos</span>
                            </div>
                        </div>
                        <p class="footer-descripcion">
                            Más de 15 años de experiencia ofreciendo los mejores autos seminuevos con garantía y financiamiento disponible. Calidad y confianza garantizada.
                        </p>
                        <div class="footer-redes">
                            <a href="#" className="red-social"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="red-social"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="red-social"><i className="bi bi-whatsapp"></i></a>
                            <a href="#" className="red-social"><i className="bi bi-envelope-at-fill"></i></a>
                        </div>
                    </div>

                    <div className="footer-seccion">
                        <h4>Servicios</h4>
                        <ul className="footer-enlaces">
                            <li><a href="#">Venta de Seminuevos</a></li>
                            <li><a href="#">Financiamiento</a></li>
                            <li><a href="#">Evaluación de Auto</a></li>
                            <li><a href="#">Garantía Extendida</a></li>
                            <li><a href="#">Servicio Post-Venta</a></li>
                        </ul>
                    </div>

                    <div className="footer-seccion">
                        <h4>Enlaces Útiles</h4>
                        <ul className="footer-enlaces">
                            <li><a href="#">Sobre Nosotros</a></li>
                            <li><a href="#">Inventario</a></li>
                            <li><a href="#">Testimonios</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Términos y Condiciones</a></li>
                        </ul>
                    </div>

                    <div className="footer-seccion">
                        <h4>Contacto</h4>
                        <div className="footer-contacto">
                            <div className="contacto-item">
                                <div className="contacto-icon">📍</div>
                                <span>Av. Principal 123<br />León, Guanajuato, México</span>
                            </div>
                            <div className="contacto-item">
                                <div className="contacto-icon">📞</div>
                                <span>(477) 123-4567</span>
                            </div>
                            <div className="contacto-item">
                                <div className="contacto-icon">✉</div>
                                <span>ventas@autosseminuevosIDE.com</span>
                            </div>
                            <div className="contacto-item">
                                <div className="contacto-icon">🕒</div>
                                <span>Lun - Sáb: 9:00 - 19:00<br />Dom: 10:00 - 16:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-divisor"></div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <span>© 2024 Autos Seminuevos IDE. Todos los derechos reservados.</span>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Términos de Uso</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}