class Calculadora {

    raizQuadrada(n) {
        return Math.sqrt(n)
    }

    potencia(base, exp){
        return Math.pow(base,exp)
    }

    somar(a,b){
        return a + b
    }

    sub(a,b) {
        return a - b
    }

    mult(a,b){
        return a * b
    }

    div (a,b){
        return a/b
    }
}

let calc1 = new Calculadora

console.log(calc1.div(55,22))