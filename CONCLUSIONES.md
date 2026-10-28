# Conclusiones

SOAP sirve para que dos aplicaciones se comuniquen usando mensajes en XML con una estructura fija. En la práctica vi que cada petición va dentro de un sobre con `Envelope` y `Body`, y que la respuesta regresa con la misma forma. Esto ayuda porque las dos partes saben dónde está cada dato, por ejemplo la temperatura que envié y el resultado de 77 grados que me regresó el servicio.

WSDL es el contrato del servicio. En él se definen los tipos de datos, los mensajes, las operaciones y la dirección donde está publicado. Con este archivo otra persona puede saber qué operaciones hay y qué datos tiene que mandar sin necesidad de ver el código. También aprendí que los nombres del WSDL y los del código deben ser iguales, porque si no coinciden el servicio no funciona.

Consultar un WSDL no es lo mismo que invocar una operación. Cuando abrí la dirección con `?wsdl` en el navegador solo vi la descripción del servicio, y en el registro apareció como GET. Cuando envié el XML con POST, el servicio sí hizo el cálculo y me regresó el resultado.

Usar un Router conviene cuando la aplicación crece, porque las rutas quedan en un archivo aparte y el archivo principal queda más limpio. Para agregar el segundo servicio solo tuve que registrarlo en el Router.

El middleware de registro se justifica porque todas las peticiones necesitan registrarse de la misma forma. Si lo pusiera en cada operación tendría que repetir el mismo código cuatro veces, y además no se registrarían las consultas del WSDL. Con el middleware se hace en un solo lugar.

SOAP con WSDL conviene, por ejemplo, en un banco o en un sistema de gobierno, donde se necesita un contrato formal y datos con tipos bien definidos. Para una aplicación móvil sencilla es mejor una API REST con JSON, porque los mensajes son más cortos y más fáciles de usar desde JavaScript.
