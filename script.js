function calcular(){
    var n1 = Number(document.querySelector('#n1').value)
    var n2 = Number(document.querySelector('#n2').value)
    var n3 = Number(document.querySelector('#n3').value)
    var n4 = Number(document.querySelector('#n4').value)
    var res = document.querySelector('#resultado')

    var soma = n1 + n2 + n3 + n4
    media = soma / 4
    alert(media)

    if(media > 5){
        res.innerHTML = `<p> Aprovado com media ${media} </p>`
        res.style.backgroundColor = 'green'
    }else if (media < 5){
        res.innerHTML = `<p> Reprovado com media ${media} </p>`
        res.style.backgroundColor = 'red'
    }else{
        res.innerHTML = `<p> De Recuperação </p>`
        res.style.backgroundColor = 'darkgoldenrod'
    }
}