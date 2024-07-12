import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Header from '../utils/Header';
import Footer from '../utils/Footer';
import '../../styles/home.css'
import CourseCard from '../utils/Coursecard';

const image = '../../img/hero-image.jpg';
const title = 'Ejemplo de Titulo';
const description = 'Este es un ejemplo de una descripción.'
const price = 20;

export default function Home() {

  return (
    <>
      <Header />
      <main className='bg-dark text-white'>
        <section className="hero-section">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h1 className="display-4">Aprende a tu ritmo, desde cualquier lugar</h1>
                <p className="lead">
                  Cursos en línea para potenciar tus habilidades y alcanzar tus metas profesionales.
                </p>
                <Button variant="primary" size="lg" as={Link} to="/cursos">Explorar cursos</Button>
              </Col>
              <Col md={6}>
                <Image src="hero-image.jpg" alt="Imagen de héroe" fluid />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="courses-section">
          <Container>
            <h2 className="text-center mb-4">Cursos populares</h2>
            <Row>
              <Col md={4}>
                <CourseCard
                  title="Desarrollo web con React"
                  image="curso-react.jpg"
                  description="Aprende a crear sitios web interactivos y modernos con React."
                  price={29.99}
                />
              </Col>
              <Col md={4}>
                <CourseCard
                  title="Diseño gráfico con Adobe Photoshop"
                  image="curso-photoshop.jpg"
                  description="Domina las herramientas de Adobe Photoshop para crear diseños impresionantes."
                  price={19.99}
                />
              </Col>
              <Col md={4}>
                <CourseCard
                  title="Marketing digital para principiantes"
                  image="curso-marketing.jpg"
                  description="Aprende las estrategias de marketing digital que necesitas para hacer crecer tu negocio."
                  price={34.99}
                />
              </Col>
            </Row>
            <Button variant="primary" size="lg" as={Link} to="/cursos">Ver todos los cursos</Button>
          </Container>
        </section>
        <Card className="mb-4">
          <Card.Img variant="top" src='../../img/hero-image.jpg' alt='Imagen ejemplo' />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <h4 className="text-muted">Precio: ${price}</h4>
            <Button variant="info" as={Link} to={`/curso/${title.toLowerCase()}`}>Inscribirse</Button>
          </Card.Body>
        </Card>
        <section className="about-section">
          <Container>
            <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
            <Row>
              <Col md={4}>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Instructores expertos</Card.Title>
                    <Card.Text>
                      Aprende de profesionales con amplia experiencia en sus áreas.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Cursos de alta calidad</Card.Title>
                    <Card.Text>
                      Contenido actualizado y diseñado para que aprendas de manera efectiva.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Aprendizaje flexible</Card.Title>
                    <Card.Text>
                      Estudia a tu propio ritmo y desde cualquier lugar.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Button variant="primary" size="lg" as={Link} to="/nosotros">Conócenos más</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}