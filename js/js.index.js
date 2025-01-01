/* Tarea 1 */
/*const miNombre = prompt( `Escribí tu nombre, por favor`);
function Hola()
{
    console.log(`¡ Hola, ${miNombre} !.¿ cómo estás ? `)
}
Hola();
console.log( ` Te presentamos nuestra nueva calculadora `);
let N1 = parseInt (prompt( `Ingresá un número cualquiera`));/* parseInt transforma a las variables N1-N2 en numéricas, dado que por defecto son string y en la suma las concatena, no las suma*/
/*let N2 = parseInt(prompt(`Ingresá otro número`));

const suma=(N1, N2) => console.log(N1 + N2);

const resta=( N1,N2)=> console.log( N1 - N2);
const producto=( N1, N2)=> console.log( N1*N2);
const divi =( N1,N2)=>console.log( N1/N2);
const calculadora = (N1,operación,N2)=>{
return operación( N1, N2)
}
console.log ( `Este es un ejemplo de suma:`);
let resultado1 = calculadora (N1,suma,N2);
console.log(`...y este uno de resta.`);
let resultado2 = calculadora ( N1,resta,N2);

console.log(`También te presentamos una multiplicación:`);
let resultado3 = calculadora ( N1,producto,N2);
console.log(`... y una división.`);
let resultado4 = calculadora ( N1,divi,N2);*/
/* Tarea 2*/
/*function saludo()
{
    console.log(` ¡ Buenos días !`);

}
saludo();
*/
/* Tarea 3 */
const usuario = prompt( `¿ cómo te llamás ?`);
console.log( `¡ Hola, ${usuario}! Te presentamos el último modelo de Tablet con sus características.`);
let tablet =
{

marca : `Marca :Phoenix`,
modelo:`Modelo :ABZ125`,
color:`Color: plateada`,
pantalla:`Resolución de pantalla: 768 x 1024`,
sOperativo: `Sistema operativo:Android 12`,
estáDisponible:`disponibilidad: no disponible`,
presentaPropiedades:function(){
 
 
    console.log(`${this.marca}`);
    console.log(`${this.modelo}`);
    console.log(`${this.color}`);
    console.log(`${this.pantalla}`);
    console.log(`${this.sOperativo}`);
    console.log(`${this.estáDisponible}`);
    console.log( `Dejános un número de celular para que podamos avisarte cuando el producto esté disponible. Gracias por comunicarte con nosotros`);  
    
}
}
tablet.presentaPropiedades();


/* Bucle For */
/*const electrodomésticos = [`ventilador a motor`,`licuadora a motor`,`televisor inalámbrico`,

`teléfono inalámbrico`,`heladera a motor`,`rasuradora a motor`];
for(let i = 0; i < 6;i++)
{
    if (electrodomésticos[i].includes(`motor`))
    {
        console.log(electrodomésticos[i]);
    }
}*/
