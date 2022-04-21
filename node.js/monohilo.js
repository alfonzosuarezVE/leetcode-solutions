
console.log('hola mundo');

let i = 0;



const inter = async function(){
    setInterval(() => {
        console.log(i)
        i++

        if(i == 5){
            console.log(a + b)
        }
    }, 1000)
}

const secondInter = () => {
    setInterval(() => {
        console.log(i + 1)
    }, 1000)
}

inter()
secondInter()

console.log("segunda instruccion")