import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import '../styles//registro.css';

export function Registro() {
  return (
    <div className='Formulario'>
    <strong> <h1 id='titulo'> Registrar</h1></strong>
    <div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="Number" placeholder="Id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="Number" placeholder="Precio" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Descripción" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="imagenes" />
      </Form.Group>

      



      <Button variant="primary" type="submit">

        Añadir
      </Button>
      
    </Form>
    </div>
    </div>
  );


}

export function Tables(){

  return(
    <div className='map'>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripcion</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
           <td>@mdo</td>
            <td>@mdo</td>
        </tr>
        <tr>
      
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
         <tr>
     
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
           <td>Thornton</td>
           <td>Thornton</td>
        </tr>
       
         
       
       
      </tbody>
    </Table>
    </div>
    );
   
}



