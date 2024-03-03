/*​eu posso criar um objeto cores e por varios objetos com const dentro?*/

const visualImage = document.getElementById('imagem-visualizacao');
const productTitle = document.getElementById('titulo-produto');
const colorName =document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

/*Objeto*/

const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
};

const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno"
}

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
};

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
};

const rosaClaro = {
nome: "Rosa-claro",
pasta: "imagens-rosa-claro"
}

const colorOptions = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const sizeOptions =['41 mm', '45 mm']


let selectedImage = 1;
let selectedSize = 1;
let selectedColor = 1;

/* atualiza o valor da variavel com o valor selecionado pelo usuario, assim atualizando a imagem de visualização de forma correspondente*/
function changeImage(){
    const idSelectedOption = document.querySelector('[name ="opcao-imagem"]:checked').id;
    selectedImage = idSelectedOption.charAt(0);
    //trocar imagem de visualização
    visualImage.src = './imagens/opcoes-cores/' + colorOptions[selectedColor].pasta + '/imagem-' + selectedImage + '.jpeg'
}

function changeSize(){
    //atualizar variavel de controle do tamanho da caixa
    const idSelectedOption = document.querySelector('[name="opcao-tamanho"]:checked').id;
    selectedSize = idSelectedOption.charAt(0);

    //mudar o título do produto 
    productTitle.innerText = "Pulseira loop esportiva " + colorOptions[selectedColor].nome + " para caixa de "  + sizeOptions[selectedSize];

    //mudar o tamanho da imagem de acordo com a opção
    if(sizeOptions[selectedSize] === '41 mm'){
        visualImage.classList.add('caixa-pequena');
    } else{
        visualImage.classList.remove('caixa-pequena');
    }
}

function changeColor(){
    //atualizar cor selecionada
    const idSelectedoption = document.querySelector('[name = "opcao-cor"]:checked').id;
    selectedColor = idSelectedoption.charAt(0);// isso atualiza a variavel em base com o id selecionado

    //trocar titulo da pagina
    productTitle.innerText = "Pulseira loop esportiva " + colorOptions[selectedColor].nome + " para caixa de "  + sizeOptions[selectedSize];

    //trocar nome da cor
    colorName.innerText = 'Cor - ' + colorOptions[selectedColor].nome;

    //trocar miniaturas
    miniaturaImagem0.src ='./imagens/opcoes-cores/' + colorOptions[selectedColor].pasta + '/imagem-0.jpeg'
    miniaturaImagem1.src ='./imagens/opcoes-cores/' + colorOptions[selectedColor].pasta + '/imagem-1.jpeg'
    miniaturaImagem2.src ='./imagens/opcoes-cores/' + colorOptions[selectedColor].pasta + '/imagem-2.jpeg'

    //trocar imagem de visualização
    visualImage.src = './imagens/opcoes-cores' + colorOptions[selectedColor].pasta + '/imagem-' + selectedImage + '.jpeg'
}
