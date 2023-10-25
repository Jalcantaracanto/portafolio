import React from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/Home.css'
import Avatar from '../assets/images/avatar.png'
import Technologies from '../services/technologies.json'
import { Cards } from '../components/Cards'

export const Home = () => {


    return (
        <>
            <Navbar />
            <section className="main-body">
                <section className="col- avatar-container">
                    <img className="avatar" src={Avatar} alt="avatar" />
                </section>
                <section className="col-">
                    <h1>Javier Alcántara</h1>
                    <p>Analista Programador / Full Stack MERN</p>
                </section>
                <section className="col- aboutMe">
                    <h3>Sobre Mí</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis tempore doloremque ullam architecto asperiores, earum voluptas fuga soluta. Voluptatibus id repudiandae optio fuga dolore est nostrum quibusdam aliquam totam dolorem.</p>
                </section>
                <section className="col- aboutMe">
                    <h3>Tecnologías</h3>
                    {Technologies && Technologies.map((item, index) =>
                        <img key={index} className='icons-tech' src={item.icon} alt={item.alt} />
                    )}
                </section>
                <section className="col- ">
                    <h3>Proyectos</h3>
                </section>
                <Cards />

                <section className="col- main-contact">
                    <h3>Contacto</h3>
                    <div id='projects'></div>
                    <section className="contact-links">
                        <p>javier.alcantara.canto@gmail.com</p>
                        <a href="https://www.linkedin.com/in/jalcantaracanto/" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Jalcantaracanto" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </section>
                </section>
            </section>
        </>
    )
}
