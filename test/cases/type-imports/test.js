import { deepStrictEqual } from 'node:assert';
import { Input, Output } from 'local:b/foo';

export function test(instance) {
  let input = new Input();
  input.inThing = 6;

  let output = new Output();
  output.outThing = 6;
  deepStrictEqual(instance.test(input), output);
}
