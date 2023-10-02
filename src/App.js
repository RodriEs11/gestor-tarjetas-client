import './App.css';

import FormAgregarCuota from './components/FormAgregarCuota/FormAgregarCuota';
import Header from './components/Header/Header';
import Consumo from './components/Consumo/Consumo';
import Tarjeta from './components/Tarjeta/Tarjeta';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Header>

      </Header>
      <main>
        <Tarjeta
          nombre="Visa"
          limiteActual={1500}
          limiteDisponible={400}
          cierreAnterior={Date.now()}
          cierreActual={Date.now()}
          vencimientoAnterior={Date.now()}
          vencimientoActual={Date.now()}
          totalVencimientoAnterior={200}
          totalVencimientoActual={500}


        ></Tarjeta>

        <div className='container-consumos'>

          <Consumo
            nombre="Heladera"
            total="40000"
            cantidadCuotas="6"
            autor="Rodrigo"
            fechaCompra={Date.now()}
            onClick={() => console.log("hola")}
          ></Consumo>



          <Consumo
            nombre="Heladera"
            total="40000"
            cantidadCuotas="6"
            autor="Rodrigo"
            fechaCompra={Date.now()}
            onClick={() => console.log("hola")}
          ></Consumo>



          <Consumo
            nombre="Heladera"
            total="40000"
            cantidadCuotas="6"
            autor="Rodrigo"
            fechaCompra={Date.now()}
            onClick={() => console.log("hola")}
          ></Consumo>

        </div>

      </main>



      <Footer></Footer>



    </>
  );
}
/*
 

*/

export default App;
