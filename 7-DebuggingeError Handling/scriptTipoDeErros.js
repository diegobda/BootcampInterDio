/* O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/
function validaaays(a, num) {
	try {
		if (!a && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof a !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError(' Num precisa ser do tipo Number!');

		if (a.length !== num) throw new RangeError('Tamanho do array inválido!');

		return a;

	} 
	catch (e) {
		if (e instanceof ReferenceError) {
			console.log('Este erro e um ReferenceError!');
			console.log(e.message);
		} else if (e instanceof RangeError) {
			console.log('Este erro e um RangeError!');
			console.log(e.message);
		} else if (e instanceof TypeError) {
			console.log('Este erro e um TypeError!');
			console.log(e.message);
		} else {
			console.log('Tipo de erro inesperado!:' + e);
		}
	}
}

/*console.log(validaaays());
console.log(validaaays([], 'a'));
console.log(validaaays([], 5));*/
console.log(validaaays([5, 4, 3, 2, 1], 5));
