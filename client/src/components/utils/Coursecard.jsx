import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

export default function CourseCard ({ title, image, description, price }) { (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h4 className="text-muted">Precio: ${price}</h4>
        <Button variant="info" as={Link} to={`/curso/${title.toLowerCase()}`}>Inscribirse</Button>
      </Card.Body>
    </Card>
)};
