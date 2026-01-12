
import './App.css';
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'





function App() {

  const facturaData = {

numero : '123456',
productos :  'Pizza',
cantidad: 2,
precio:20,
fecha: '2024-06-15',
cliente: 'Juan Perez',
total:100.00,


  }

const generarPdf = () => {

  const doc = new jsPDF();
  //encabezado de fatura

doc.text('Factura', 10, 10);
doc.text(`Numero de factura: ${facturaData.numero}`, 10, 20)
doc.text(`Fecha: ${facturaData.fecha}`, 10, 30)
doc.text(`Cliente: ${facturaData.cliente}`, 10, 40)
doc.text(`Total: ${facturaData.total}`, 10, 50)

//crear auna tabla para los detalles de la factura

const columns = ['Numero','Producto', 'Cantidad', 'Precio', 'fecha','Total'];
const data = [
  [`${facturaData.numero}`, `${facturaData.productos}`, `${facturaData.cantidad}`, `${facturaData.precio}`, `${facturaData.fecha}`, `${facturaData.total}`]
];

autoTable(doc, {
      startY: 20,
      head: [['Producto', 'Cantidad', 'Precio']],
      body: [['Pizza', '2', '20 €']],
    })


//guardar el pdf con un nombre 
doc.save(`factura_${facturaData.numero}.pdf`);

  }


  return (
   <div>
  <h1>FACTURA</h1>
  <h4>Aquí va el logo</h4>

  <p>Número de factura: {facturaData.numero}</p>
  <p>Fecha: {facturaData.fecha}</p>
  <p>Cliente: {facturaData.cliente}</p>
  <p>Total: {facturaData.total}</p>

  <button onClick={generarPdf}>Generar PDF</button>
</div>

  )
}

export default App
