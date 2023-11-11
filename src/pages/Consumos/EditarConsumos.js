import React from "react";
import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import { Table, Button, ButtonGroup } from "reactstrap";

function EditarConsumos() {
    return (
        <div className="d-flex flex-column">

            <Header />

            <main>
                <Table striped responsive bordered className="m-0 vw-100 text-center align-middle">
                    <thead className="align-middle">
                        <tr>
                            <th>Tarjeta</th>
                            <th>Consumo</th>
                            <th>Autor</th>
                            <th>Cantidad de cuotas</th>
                            <th>C/Cuota</th>
                            <th>Monto total</th>
                            <th>Editar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>VISA</th>
                            <td>Heladera</td>
                            <td>Rodrigo</td>
                            <td>6</td>
                            <td>5.000</td>
                            <td>30.000</td>
                            <td>
                                <ButtonGroup>
                                    <Button color="primary">Editar</Button>
                                    <Button color="secondary">Eliminar</Button>
                                </ButtonGroup>
                            </td>

                        </tr>

                        <tr>
                            <th>VISA</th>
                            <td>Heladera</td>
                            <td>Rodrigo</td>
                            <td>6</td>
                            <td>5.000</td>
                            <td>30.000</td>
                            <td>
                                <ButtonGroup>
                                    <Button color="primary">Editar</Button>
                                    <Button color="secondary">Eliminar</Button>
                                </ButtonGroup>
                            </td>

                        </tr>

                        <tr>
                            <th>VISA</th>
                            <td>Heladera</td>
                            <td>Rodrigo</td>
                            <td>6</td>
                            <td>5.000</td>
                            <td>30.000</td>
                            <td>
                                <ButtonGroup>
                                    <Button color="primary">Editar</Button>
                                    <Button color="secondary">Eliminar</Button>
                                </ButtonGroup>
                            </td>
                        </tr>

                        <tr>
                            <th>VISA</th>
                            <td>Heladera</td>
                            <td>Rodrigo</td>
                            <td>6</td>
                            <td>5.000</td>
                            <td>30.000</td>
                            <td>
                                <ButtonGroup>
                                    <Button color="primary">Editar</Button>
                                    <Button color="secondary">Eliminar</Button>
                                </ButtonGroup>
                            </td>
                        </tr>

                        <tr>
                            <th>VISA</th>
                            <td>Heladera</td>
                            <td>Rodrigo</td>
                            <td>6</td>
                            <td>5.000</td>
                            <td>30.000</td>
                            <td>
                                <ButtonGroup>
                                    <Button color="primary">Editar</Button>
                                    <Button color="secondary">Eliminar</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </main>

            <Footer />

        </div>
    );
}

export default EditarConsumos;
