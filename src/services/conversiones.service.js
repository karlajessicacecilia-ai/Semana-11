// Lógica del servicio de conversiones
// Los nombres deben coincidir con conversiones.wsdl
module.exports = {
  ConversionesService: {
    ConversionesPort: {
      CelsiusAFahrenheit(args) {
        const celsius = Number(args.celsius);
        const fahrenheit = celsius * 9 / 5 + 32;
        return { fahrenheit: fahrenheit };
      },

      KilometrosAMillas(args) {
        const kilometros = Number(args.kilometros);
        const millas = kilometros / 1.609344;
        return { millas: Number(millas.toFixed(5)) };
      },
    },
  },
};
