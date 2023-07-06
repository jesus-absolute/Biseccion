
function result() {
    alert("hola");
}

const inputValorA = document.querySelector('.valor-a');
const inputValorB = document.querySelector('.valor-b');
//e^x − 2 + x^2

var e = 2.7182818285;
function result() {
    let numRep = 200;
    let valueA = Number(inputValorA.value);
    let valueB = Number(inputValorB.value);
    let m, fa,fb,fm
	let x1
    let i
	for (i = 1; i < numRep; i++) {
        m = (valueA + valueB)/2
        
        fa = e ** (valueA) -2 + valueA**2
        fb = e ** (valueB) -2 + valueB**2
        fm = e ** (m) -2 + m**2
        x1 = (fa*fm)
        if(x1 < 0) {
        valueB = m
        }
        else if(x1 > 0) {
        valueA = m
        }
        else {
        raiz = m
        }
    }
    console.log(m);
}