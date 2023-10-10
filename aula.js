const convertButton = document.querySelector(".convert-button")
const selectMoeda = document.querySelector("#select-convertido")
const selectACconverter = document.querySelector("select-a-converter")

convertButton.addEventListener("click", moedaValor)
selectMoeda.addEventListener("change", nomeMoedaConvertida)


function moedaValor() {
    const valorEntrada = document.querySelector("#input-valor-entrada").value
    const realHoje = 1
    const dolarHoje = 5.15
    const euroHje = 5.44
    const libraHoje = 6.29
    const biticoinHoje = 143.716
    const valorEntadaTexto = document.querySelector(".moeda-valor-entrada")
    const valorConvertidoTexto = document.querySelector(".moeda-valor-convertida")

    if (selectMoeda.value == "dolar") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorEntrada / dolarHoje)
    }

    if (selectMoeda.value == "euro") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEntrada / euroHje)
    }

    if (selectMoeda.value == "libra") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorEntrada / libraHoje)
    }

    if (selectMoeda.value == "bitcoin") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valorEntrada / biticoinHoje)
    }

    if (selectMoeda.value == "real") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEntrada / realHoje)
    }


    valorEntadaTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorEntrada)
}

function nomeMoedaConvertida (){
    
    const auteracaoNomeMoeda = document.getElementById("nome-moeda-convertida")
    const imgCurrency = document.querySelector(".img-currency")

    if (selectMoeda.value == "dolar") {
        auteracaoNomeMoeda.innerHTML = "Dólar Americano"
        imgCurrency.src = "./assets/dolar.png"
    }

    if (selectMoeda.value == "euro") {
        auteracaoNomeMoeda.innerHTML = "Euro"
        imgCurrency.src="./assets/euro.png"
    }

    if (selectMoeda.value == "libra") {
        auteracaoNomeMoeda.innerHTML = "Libra"
        imgCurrency.src="./assets/libra 1.png"
    }

    if (selectMoeda.value == "bitcoin") {
        auteracaoNomeMoeda.innerHTML = "Bitcoin"
        imgCurrency.src = "./assets/bitcoin 1.png"
    }

    if (selectMoeda.value == "real") {
        auteracaoNomeMoeda.innerHTML = "Real Brasileiro"
        imgCurrency.src = "./assets/brasil 2.png"
    }

    moedaValor()
}

function aaa(){
    console.log("foi ")
}
