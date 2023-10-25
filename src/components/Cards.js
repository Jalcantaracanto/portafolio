import React, { useState, useEffect } from 'react'
import Carousel from '@itseasy21/react-elastic-carousel'
import Fondo from '../assets/images/web.jpg'
import Proyects from '../services/proyects.json'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

export const Cards = () => {
    const [arrow, setArrow] = useState(true)
    const [showFullDescriptions, setShowFullDescriptions] = useState([])


    const handleShowMore = (index) => {
        const updatedShowDescriptions = [...showFullDescriptions]
        updatedShowDescriptions[index] = true
        setShowFullDescriptions(updatedShowDescriptions)
    }

    useEffect(() => {
        const handleResize = () => {
            setArrow(window.innerWidth >= 768) //Ancho de pantalla
        }

        handleResize()

        // Agregar un event listener para manejar cambios en el tamaño de la ventana
        window.addEventListener('resize', handleResize)

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (

        <Carousel showArrows={arrow} breakPoints={breakPoints}>
            {Proyects &&
                Proyects.map((project, index) => (
                    <section className="main-card" key={index}>
                        <h3 className="card-name">{project.name}</h3>
                        <img className="card-img" src={Fondo} alt="fondo" />
                        <p className="card-description">
                            {showFullDescriptions[index] || project.description.length <= 100 ? project.description.padEnd(100, ' ') : project.description.slice(0, 100)}
                            {project.description.length > 50 && !showFullDescriptions[index] && (
                                <button className="btn-show-more" onClick={() => handleShowMore(index)}>
                                    Ver más
                                </button>
                            )}
                        </p>
                        <section className="btn-card-container">
                            <button className="btn-card">Ver</button>
                            <a href={project.links[1]} target="_blank" rel="noreferrer">
                                <button className="btn-card">Repositorio</button>
                            </a>
                        </section>
                    </section>
                ))}
        </Carousel>

    )
}
