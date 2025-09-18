import { Soma } from "./operacoes/soma";
import { Subtracao } from "./operacoes/subtracao";
import { Divisao } from "./operacoes/divisao";
import { Potencia } from "./operacoes/potencia";
import { Bhaskara } from "./operacoes/bhaskara";

export class Calculadora {
  executar(opcao: number, a: number, b?: number, c?: number): string {
    switch (opcao) {
      case 1:
        return `Resultado: ${new Soma().executar(a, b!)}`;
      case 2:
        return `Resultado: ${new Subtracao().executar(a, b!)}`;
      case 3:
        return `Resultado: ${new Divisao().executar(a, b!)}`;
      case 4:
        return `Resultado: ${new Potencia().executar(a, b!)}`;
      case 5: {
        const raizes = new Bhaskara().executar(a, b!, c!);
        return `Raízes: x1 = ${raizes[0]}, x2 = ${raizes[1]}`;
      }
      default:
        throw new Error("Opção inválida!");
    }
  }
}