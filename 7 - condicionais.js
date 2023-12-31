console.log(`\nTrabalhando com condicionais\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");

// if (idadeComprador >= 18)
// {
//     console.log(`Comprador maior de idade.`);
//     listaDeDestinos.splice(1, 1); //Removendo item da lista
// } else if (estaAcompanhada)
// {
//     console.log(`Comprador está acompanhado.`);
//     listaDeDestinos.splice(1, 1); //Removendo item da lista
// } else
// {
//     console.log(`Não é maior de idade, não é possível vender.`);
// }

if (idadeComprador >= 18 || estaAcompanhada)
{
    console.log(`Comprador maior de idade.`);
    listaDeDestinos.splice(2, 1); //Removendo item da lista
} else
{
    console.log(`Não é maior de idade, não é possível vender.`);
}

console.log("Embarque: \n\n");

if (idadeComprador >= 18 && temPassagemComprada)
{
    console.log("Boa viagem!");
} else
{
    console.log("Você não pode embarcar.")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);