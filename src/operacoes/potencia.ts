import { Operacao } from "./operacao";

export class Potencia extends Operacao {
  executar(a: number, b: number): number {
    return Math.pow(a, b);
  }
}