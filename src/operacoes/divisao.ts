import { Operacao } from "./operacao";

export class Divisao extends Operacao {
  executar(a: number, b: number): number {
    if (b === 0) throw new Error("não pode ser divisão por 0");
    return a / b;
  }
}
