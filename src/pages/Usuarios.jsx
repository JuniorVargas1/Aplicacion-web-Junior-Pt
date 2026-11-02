import { useEffect, useState } from "react"

function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setUsuarios(datos);
            });

    }, []);

    return (
        <section>
            <h2>Usuarios</h2>

            {usuarios.map((usuario) => (
                <article key={usuario.id}>

                    <h3>{usuario.name}</h3>

                    <p>{usuario.email}</p>

                </article>
            ))}
        </section>
    );
}

export default Usuarios;