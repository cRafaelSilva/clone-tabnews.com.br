const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deve retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Somar 'banana' + 100 deve retornar 500", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("Somar 'banana' + 100 deve retornar 500", () => {
  const resultado = calculadora.somar("banana", "100");
  expect(resultado).toBe("Erro");
});

test("Somar nenhum número vazio deve dar erro", () => {
  const resultado = calculadora.somar(1);
  console.log(resultado);
  expect(resultado).toBe("Erro");
});
