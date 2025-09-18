import * as readline from "readline";
import { Calculadora } from "./calculadora";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Escolha a operação:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Divisão");
console.log("4 - Potência");
console.log("6 - Bhaskara");

rl.question("Opção: ", (opcao) => {
  const calc = new Calculadora();

  if (opcao === "6") {
    rl.question("Digite o valor de a: ", (a) => {
      rl.question("Digite o valor de b: ", (b) => {
        rl.question("Digite o valor de c: ", (c) => {
          try {
            console.log(calc.executar(6, Number(a), Number(b), Number(c)));
          } catch (err: any) {
            console.log(err.message);
          }
          rl.close();
        });
      });
    });
  } else {
    rl.question("Digite o primeiro número: ", (a) => {
      rl.question("Digite o segundo número: ", (b) => {
        try {
          console.log(calc.executar(Number(opcao), Number(a), Number(b)));
        } catch (err: any) {
          console.log(err.message);
        }
        rl.close();
      });
    });
  }
});