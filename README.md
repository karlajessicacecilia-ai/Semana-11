# Práctica SOAP con Express y WSDL

Aplicación en Node.js y Express con dos servicios web SOAP. Cada servicio tiene su propio contrato WSDL y dos operaciones.

Karla Jessica Cecilia Urbina Alcasena

## Requisitos

- Node.js 20 o superior
- Git
- curl o Postman para las pruebas

## Instalación

```bash
git clone <url-del-repositorio>
cd <carpeta-del-repositorio>
npm install
```

## Ejecución

```bash
npm start
```

El servidor queda en `http://localhost:3000`.

## Endpoints y WSDL

| Servicio | Endpoint | WSDL | Operaciones |
|---|---|---|---|
| ConversionesService | http://localhost:3000/soap/conversiones | http://localhost:3000/soap/conversiones?wsdl | CelsiusAFahrenheit, KilometrosAMillas |
| GeometriaService | http://localhost:3000/soap/geometria | http://localhost:3000/soap/geometria?wsdl | AreaRectangulo, PerimetroRectangulo |

## Estructura

```
src/
  server.js                  arranque del servidor
  app.js                     configuración de Express
  middleware/logger.js       registro de peticiones
  routes/soap.routes.js      registro de los servicios SOAP
  services/                  lógica de cada servicio
wsdl/                        contratos WSDL
pruebas/                     peticiones SOAP de prueba
evidencias/                  capturas de las pruebas
```

## Pruebas

Con el servidor encendido, abre otra terminal en la carpeta del proyecto.

### Consultar los contratos

Abre en el navegador:

- http://localhost:3000/soap/conversiones?wsdl
- http://localhost:3000/soap/geometria?wsdl

### Invocar las operaciones

```bash
curl -X POST http://localhost:3000/soap/conversiones -H "Content-Type: text/xml" -H "SOAPAction: CelsiusAFahrenheit" --data-binary @pruebas/celsius-a-fahrenheit.xml

curl -X POST http://localhost:3000/soap/conversiones -H "Content-Type: text/xml" -H "SOAPAction: KilometrosAMillas" --data-binary @pruebas/kilometros-a-millas.xml

curl -X POST http://localhost:3000/soap/geometria -H "Content-Type: text/xml" -H "SOAPAction: AreaRectangulo" --data-binary @pruebas/area-rectangulo.xml

curl -X POST http://localhost:3000/soap/geometria -H "Content-Type: text/xml" -H "SOAPAction: PerimetroRectangulo" --data-binary @pruebas/perimetro-rectangulo.xml
```

En Postman: método POST, la URL del endpoint, los encabezados `Content-Type: text/xml` y `SOAPAction` con el nombre de la operación, y en Body → raw el contenido del archivo de `pruebas/`.

### Resultados esperados

| Operación | Entrada | Resultado |
|---|---|---|
| CelsiusAFahrenheit | 25 °C | 77 °F |
| KilometrosAMillas | 10 km | 6.21371 millas |
| AreaRectangulo | base 8, altura 5 | 40 |
| PerimetroRectangulo | base 8, altura 5 | 26 |

En la terminal del servidor, el middleware muestra cada petición, por ejemplo:

```
GET /soap/conversiones?wsdl - 200 - 3 ms
POST /soap/conversiones - 200 - 5 ms
```
