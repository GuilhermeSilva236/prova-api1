import React from 'react'
import Cabecalho from './Cabecalho'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rodape from './Rodape';


const Pagina = (props) => {
  return (
        <>
            <Cabecalho />
                <div className=' py-3 text-center mb-5 bg-secondary text-white'>
                    <h1>{props.titulo}</h1>
                </div>

                <Container className='mb-5'>
                    {props.children}
                </Container>

                <Rodape />
        </>
  )
}

export default Pagina
