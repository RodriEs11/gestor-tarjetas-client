import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar color='light' light expand="md" className='py-3'>
            <NavbarBrand href="/">Gestión </NavbarBrand>

            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>

                <Nav className="me-auto" navbar>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Consumos</DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem href='/consumos/agregar'>Agregar</DropdownItem>
                            <DropdownItem href='/consumos/editar'>Editar/Eliminar</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem href='/consumos'>Ver todo</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Autores</DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem href='/autores/agregar'>Agregar</DropdownItem>
                            <DropdownItem href='/autores/editar'>Editar</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Tarjetas</DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem href='/tarjetas/agregar'>Agregar</DropdownItem>
                            <DropdownItem href='/tarjetas/editar'>Editar</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                </Nav>
            </Collapse>
        </Navbar>

    );
}

export default Header;