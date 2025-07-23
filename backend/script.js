const calcular = document.getElementById('calcular');

function getInputValue(id)
{
    return document.getElementById(id).value;
}

function calcularIMC(peso, altura)
{
    return (peso/(altura * altura)).toFixed(1);
}

function classificacao(valorIMC)
{
    if(valorIMC < 18.5)
    {
        return  'Está abaixo do peso';
    }
    else if(valorIMC < 25)
    {
        return 'Está em seu peso ideal';
    }
    else if(valorIMC < 30)
    {
        return 'Está rasoávelmente acima do peso';
    }
    else if(valorIMC < 35)
    {
        return 'Está com obesidade de grau 1';
    }
    else if(valorIMC < 40)
    {
        return 'Está com obesidade de grau 2';
    }
    else
    {
        return 'Está com obesidade de grau 3';
    }
}

function resultado(mensagem)
{
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
}   

function Imc()
{
    const sexo = getInputValue('sexo');
    const altura = parseFloat(getInputValue('altura'));
    const peso = parseFloat(getInputValue('peso'));

    if(nome && altura && peso)
    {
        const valorIMC = calcularIMC(peso, altura);
        const classificacao = classificacao(valorIMC);
        const mensagem = '${nome}, seu Imc é ${valorIMC} e voce está ${classificacao}';
        resultado(mensagem);
    }   
        else
        {
            resultado('Preencha todos os campos!');
        }

}
calcular.addEventListener('click', imc);