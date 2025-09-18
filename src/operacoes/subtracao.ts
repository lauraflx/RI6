import { Operacao } from "./operacao";

export class Subtracao extends Operacao {
  executar(a: number, b: number): number {
    return a - b;
  }
}
