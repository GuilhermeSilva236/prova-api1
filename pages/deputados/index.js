import React from 'react'
import Pagina from '../../components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import apiDeputados from '@/services/apiDeputados'


const index = ({deputados}) => {
  return (
    <>
        <Pagina titulo='Deputados'>
        <Row md={6}>
        {deputados.map(item => (
          <Col>
            <Card className='mb-4'>
             <Link href={'/deputados/' + item.id}>
              <Card.Img variant="top" key={item.id} src={item.urlFoto}/>
              <Card.Body>
                <Card.Text>{item.nome}</Card.Text>
              </Card.Body> 
              </Link>
            </Card>
          </Col>
        ))}
        
        </Row>
        </Pagina>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

  const imagens = await apiDeputados.get('/deputados')
  const deputados = imagens.data.dados

  return {
      props: { deputados },
  }
}