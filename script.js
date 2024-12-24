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
        resultado.innerHTML = `= ${soma}`
}
var botao = document.querySelector('#modo-noturno')
var botaoDentro = document.querySelector('#bola')
var label = document.querySelector(".label")
botao.addEventListener('click', clicar)
var header = document.querySelector('#header')

var a = document.querySelector('#a')
var b = document.querySelector('#b')
var c = document.querySelector('#c')
var d = document.querySelector('#d')
var e = document.querySelector('#e')
var f = document.querySelector('#f')
var g = document.querySelector('#g')
var h = document.querySelector('#h')
var i = document.querySelector('#i')
var j = document.querySelector('#j')
var k = document.querySelector('#k')
function clicar(){
        if (botao.style.justifyContent === 'flex-start'){
                botao.style.justifyContent = 'flex-end'
                document.body.style.backgroundColor = '#212121'
                botao.style.backgroundColor = '#212121'
                botao.style.boxShadow = "0px 0px 20px black"
                header.style.boxShadow = "0px 0px 50px rgb(0, 0, 0)"


                a.style.borderColor = ('#e8e8e8')
                a.style.color = ('#e8e8e8')
                b.style.borderColor = ('#e8e8e8')
                b.style.color = ('#e8e8e8')
                c.style.borderColor = ('#e8e8e8')
                c.style.color = ('#e8e8e8')
                d.style.borderColor = ('#e8e8e8')
                d.style.color = ('#e8e8e8')
                e.style.borderColor = ('#e8e8e8')
                e.style.color = ('#e8e8e8')
                f.style.borderColor = ('#e8e8e8')
                f.style.color = ('#e8e8e8')
                g.style.borderColor = ('#e8e8e8')
                g.style.color = ('#e8e8e8')
                h.style.borderColor = ('#e8e8e8')
                h.style.color = ('#e8e8e8')
                i.style.borderColor = ('#e8e8e8')
                i.style.color = ('#e8e8e8')
                j.style.borderColor = ('#e8e8e8')
                j.style.color = ('#e8e8e8')
                k.style.borderColor = ('#e8e8e8')
                k.style.color = ('#e8e8e8')

                
        }else{
                botao.style.justifyContent = 'flex-start'
                document.body.style.backgroundColor = '#e8e8e8'
                botao.style.backgroundColor = '#e8e8e8'
                botao.style.boxShadow = "0px 0px 10px white"
                header.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)"


                a.style.borderColor = ('#212121')
                a.style.color = ('#212121')
                b.style.borderColor = ('#212121')
                b.style.color = ('#212121')
                c.style.borderColor = ('#212121')
                c.style.color = ('#212121')
                d.style.borderColor = ('#212121')
                d.style.color = ('#212121')
                e.style.borderColor = ('#212121')
                e.style.color = ('#212121')
                f.style.borderColor = ('#212121')
                f.style.color = ('#212121')
                g.style.borderColor = ('#212121')
                g.style.color = ('#212121')
                h.style.borderColor = ('#212121')
                h.style.color = ('#212121')
                i.style.borderColor = ('#212121')
                i.style.color = ('#212121')
                j.style.borderColor = ('#212121')
                j.style.color = ('#212121')
                k.style.borderColor = ('#212121')
                k.style.color = ('#212121')


        }
}