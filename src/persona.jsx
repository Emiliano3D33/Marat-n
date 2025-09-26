import './Personas.css'
import { Link } from 'react-router-dom'

export function Persona() {

    return (
        <>

            <h1>THE FACTORY CHAMPIONS</h1>
            <h2>¡Viví la experiencia de la Maratón!</h2>
            <p>Sumate a uno de los eventos deportivos más esperados del año.
                Ya seas principiante o corredor experimentado, esta es tu oportunidad de desafiarte,
                compartir con otros y disfrutar de una jornada única.</p>


            <div className='decoracion'>
                <h3>📅 Fecha y lugar</h3>
                <ul>
                    <li>Día: 23 de octubre de 2025</li>
                    <li>Hora de largada: 10:00 A.M.</li>
                    <li>Lugar: Parque Adán Quiroga</li>
                </ul>
            </div>
            <div className='decoracion'>
                <h3>🏅 Distancias disponibles</h3>
                <ul>
                    <li>5K – Para los que recién empiezan.</li>
                    <li>10K – Para quienes buscan superarse.</li>
                    <li>21K y 42K – Para los más apasionados del running.</li>
                </ul>
            </div>
            <div className='decoracion'>
                <h3>🎁 Tu inscripción incluye</h3>
                <ul>
                    <li>Remera oficial del evento.</li>
                    <li>Número de corredor</li>
                    <li>Medalla finisher para todos los que crucen la meta.</li>
                </ul>
            </div>

            <div className='decoracion'>
                <h3>📍 Servicios en la carrera</h3>
                <ul>
                    <li>Puestos de hidratación en el recorrido.</li>
                    <li>Asistencia médica y ambulancias.</li>
                    <li>Guardarropas y puestos de animación.</li>
                </ul>
            </div>
            <p>👉 No te quedes afuera. Los cupos son limitados.</p>
            <p>Hacé clic en el botón de inscripción, completá tus datos y asegurá tu lugar en la línea de largada.</p>
            <div className='registrarse'>
                <Link to="/formulario">Registrarse</Link>
            </div>


        </>
    )
}