// Classe abstrata
class Veiculo {
   constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
   }

   // Método abstrato para ser implementado pelas classes filhas
   buzinar() {
      throw new Error(
         "Método buzinar() deve ser implementado pelas classes filhas"
      );
   }

   // Método abstrato para ser implementado pelas classes filhas
   acelerar() {
      throw new Error(
         "Método acelerar() deve ser implementado pelas classes filhas"
      );
   }
}

// Classes herdeiras
class Carro extends Veiculo {
   constructor(marca, modelo, cor) {
      super(marca, modelo);
      this.cor = cor;
   }

   buzinar() {
      return "BEEP BEEP!";
   }

   acelerar() {
      return "Vrum vrum!";
   }
}

class Moto extends Veiculo {
   constructor(marca, modelo, cilindrada) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
   }

   buzinar() {
      return "BIBI!";
   }

   acelerar() {
      return "Vruummm!";
   }
}

// Instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", "Prata");
const moto1 = new Moto("Honda", "CB 500", "500cc");
const carro2 = new Carro("Ford", "Fusion", "Preto");

// Testando os métodos
console.log(carro1.buzinar());
console.log(moto1.acelerar());
console.log(carro2.modelo);
