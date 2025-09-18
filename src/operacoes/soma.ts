import { Operacao } from "./operacao";

export class Soma extends Operacao {
  executar(a: number, b: number): number {
    return a + b;
  }
}