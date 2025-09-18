export class Bhaskara {
  executar(a: number, b: number, c: number): [number, number] {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      throw new Error("A equação não possui raízes reais.");
    }
    const sqrt = Math.sqrt(delta);
    const x1 = (-b + sqrt) / (2 * a);
    const x2 = (-b - sqrt) / (2 * a);
    return [x1, x2];
  }
}