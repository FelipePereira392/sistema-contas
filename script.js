var calcular = document.querySelector('#calculo')
calcular.addEventListener('click', soma)
function soma(){
        var resultado = document.querySelector('#Resultado')

        var n15 = document.querySelector('#i15')
        var v15 = Number(n15.value)

        var n30 = document.querySelector('#i30')
        var v30 = Number(n30.value)

        var n35 = document.querySelector('#i35')
        var v35 = Number(n35.value)

        var n38 = document.querySelector('#i38')
        var v38 = Number(n38.value)

        var n40 = document.querySelector('#i40')
        var v40 = Number(n40.value)

        var n43 = document.querySelector('#i43')
        var v43 = Number(n43.value)

        var n45 = document.querySelector('#i45')
        var v45 = Number(n45.value)

        var n70 = document.querySelector('#i70')
        var v70 = Number(n70.value)

        var n73 = document.querySelector('#i73')
        var v73 = Number(n73.value)

        var n80 = document.querySelector('#i80')
        var v80 = Number(n80.value)

        var sobra = document.querySelector('#isobra')
        var vsobra = Number(sobra.value)

        var soma = (v15*15)+(v30*30)+(v35*35)+(v38*38)+(v40*40)+(v43*43)+(v45*45)+(v70*70)+(v73*73)+(v80*80)+vsobra
        resultado.innerHTML = `A Soma deu: <mark>${soma}</mark>`
}