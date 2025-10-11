import { useState } from "react";
import "./formulario.css";

export default function Formulario() {
  const [productos, setProductos] = useState({
    gorra: 0,
    gafas: 0,
    medias: 0,
    auriculares: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const producto = name.replace("cantidad_", "");
    setProductos({ ...productos, [producto]: Number(value) });
  };

  const productosSeleccionados = Object.entries(productos).filter(
    ([key, cantidad]) => cantidad > 0
  );

  return (
    <>
      <form
        id="miformulario"
        action="https://formspree.io/f/xgvnznzw"
        method="POST"
      >
        <h1>Formulario de Inscripción - Maratón</h1>

        <div className="formularioh3">
          <h3>Datos personales</h3>
        </div>

        <p>
          <br />
          Nombre completo
          <br />
          <label>
            <input type="text" name="nombre" required />
          </label>
          <br />
          Teléfono:
          <br />
          <label>
            <input type="text" name="telefono" required />
          </label>
          <br />
          Ingrese su email
          <br />
          <label>
            <input type="email" name="email" required />
          </label>
          <br />
          ¿Padece alguna enfermedad crónica?
          <br />
          <label>
            <input type="radio" name="enf_cronica" value="Sí" required /> Sí
          </label>
          <br />
          <label>
            <input type="radio" name="enf_cronica" value="No" /> No
          </label>
        </p>

        <p>
          <label>
            Si respondió “Sí”, especificar:
            <br />
            <input name="especificar_enf" type="text" />
          </label>
        </p>

        <p>
          ¿Está bajo tratamiento médico actualmente?
          <br />
          <label>
            <input type="radio" name="tratamiento" value="Sí" required /> Sí
          </label>
          <br />
          <label>
            <input type="radio" name="tratamiento" value="No" /> No
          </label>
        </p>

        <p>
          <label>
            Medicación:
            <br />
            <input name="medicacion" type="text" />
          </label>
        </p>

        <p>
          <label>
            Alergias (medicamentos, alimentos, etc.):
            <br />
            <input name="alergias" type="text" />
          </label>
        </p>

        <p>
          <label>
            Grupo sanguíneo:
            <br />
            <input name="grupo_sangre" type="text" />
          </label>
        </p>

        <div className="formularioh3">
          <h3>Contacto de emergencia</h3>
        </div>

        <p>
          <label>
            Nombre y apellido:
            <br />
            <input name="emerg_nombre" type="text" required />
          </label>
        </p>

        <p>
          <label>
            Teléfono:
            <br />
            <input name="emerg_telefono" type="tel" required />
          </label>
        </p>

        <p>
          <label>
            Vínculo:
            <br />
            <input name="emerg_vinculo" type="text" />
          </label>
        </p>

        <div className="formularioh3">
          <h3>Productos adicionales</h3>
        </div>
        <p>Elige los productos que deseas comprar:</p>

        {["gorra", "gafas", "medias", "auriculares"].map((prod) => (
          <p key={prod}>
            <label>
              <input
                type="checkbox"
                checked={productos[prod] > 0}
                onChange={(e) =>
                  setProductos({
                    ...productos,
                    [prod]: e.target.checked ? 1 : 0,
                  })
                }
              />
              {prod.charAt(0).toUpperCase() + prod.slice(1)}
            </label>

            {productos[prod] > 0 && (
              <>
                <input
                  type="number"
                  min="1"
                  name={`cantidad_${prod}`}
                  value={productos[prod]}
                  onChange={handleChange}
                  style={{ width: "60px", marginLeft: "10px" }}
                />
                <input
                  type="hidden"
                  name={`producto_${prod}`}
                  value="Sí"
                />
              </>
            )}
          </p>
        ))}

        {productosSeleccionados.length > 0 && (
          <div className="carrito">
            <h4>Mini Carrito:</h4>
            <ul>
              {productosSeleccionados.map(([nombre, cantidad]) => (
                <li key={nombre}>
                  {nombre.charAt(0).toUpperCase() + nombre.slice(1)}: {cantidad}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="formularioh3">
          <h3>Declaración y aceptación</h3>
        </div>

        <p>
          Declaro bajo juramento que los datos proporcionados son verídicos y
          que me encuentro en condiciones físicas adecuadas para participar en
          la Maratón.
          <br />
          Eximo a la organización, sponsors y autoridades de cualquier
          responsabilidad por accidentes, lesiones o daños que pudieran ocurrir
          durante la competencia.
          <br />
          Acepto el reglamento oficial de la carrera y autorizo el uso de mi
          imagen en fotografías y videos tomados durante el evento para fines
          promocionales.
        </p>

        <p>
          <label>
            <input type="checkbox" name="acepta" required /> Acepto y firmo la
            declaración
          </label>
        </p>

        <p>
          <button type="submit">Enviar inscripción</button>
        </p>
      </form>
    </>
  );
}