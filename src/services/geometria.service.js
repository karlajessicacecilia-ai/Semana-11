// Lógica del servicio de geometría
// Los nombres deben coincidir con geometria.wsdl
module.exports = {
  GeometriaService: {
    GeometriaPort: {
      AreaRectangulo(args) {
        const base = Number(args.base);
        const altura = Number(args.altura);
        return { area: base * altura };
      },

      PerimetroRectangulo(args) {
        const base = Number(args.base);
        const altura = Number(args.altura);
        return { perimetro: 2 * (base + altura) };
      },
    },
  },
};
