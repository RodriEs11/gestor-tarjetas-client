import React from 'react'
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";

import { Table, Button, ButtonGroup } from "reactstrap";

const EditarTarjeta = () => {
  return (
    <div className="d-flex flex-column">

      <Header />

      <main>
        <Table striped responsive bordered className="m-0 vw-100 text-center align-middle">
          <thead className="align-middle">
            <tr>
              <th>Tarjeta</th>
              <th>Límite total</th>
              <th>Último cierre</th>
              <th>Vencimiento</th>
              <th>Próximo cierre</th>
              <th>Próximo vencimiento</th>
              <th>Editar</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <th>VISA</th>
              <td>$30.000</td>
              <td>01/01/2020</td>
              <td>01/01/2020</td>
              <td>01/01/2020</td>
              <td>01/01/2020</td>
              <td>
                <ButtonGroup>
                  <Button color="primary">Editar</Button>
                  
                </ButtonGroup>
              </td>
            </tr>


          </tbody>
        </Table>

      </main>

      <Footer />

    </div>
  )
}

export default EditarTarjeta