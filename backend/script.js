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
        return 'Está com obesidae de grau 3';
    }
}