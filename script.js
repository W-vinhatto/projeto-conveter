const convertButton = document.querySelector(".convert-button")
const selectMoeda = document.querySelector("#select-convertido")
const selectACconverter = document.querySelector("#select-a-converter")

convertButton.addEventListener("click", moedaValor)
selectMoeda.addEventListener("change", nomeMoedaConvertida)
selectACconverter.addEventListener("change", nomeMoedaAConverter)


function moedaValor() {
    const valorEntrada = document.querySelector("#input-valor-entrada").value
    const dolarHoje = 5.15
    const euroHje = 5.44
    const libraHoje = 6.29
    const biticoinHoje = 143.716
    // valor moeda base real

    const euroPDolar = 0.94
    const libraPDolar = 0.81
    const bitcoinPDolar = 27389.90
    const realPDolar = 5.06
    //valor moeda base dolar

    const dolarPEuro =1.06
    const libraPEuro = 0.86
    const bitcoinPEuro = 25.843
    //valor moeda base 
    
    const dolarPLibra =1.23
    const euroPLibra = 1.16
    const bitcoinPLibra = 22.292
    //valor moeda base 
    
    const dolarPBit =27.402
    const euroPBit = 25.843
    const libraPBit = 22.292
    const realPBit = 143.716
    //valor moeda base bitcoin

    const valorEntadaTexto = document.querySelector(".moeda-valor-entrada")
    const valorConvertidoTexto = document.querySelector(".moeda-valor-convertida")

    if (selectMoeda.value == "dolar" & selectACconverter.value == "real") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorEntrada / realPDolar)
    }

    if (selectMoeda.value == "dolar" & selectACconverter.value == "euro") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorEntrada / euroPDolar)
    }

    if (selectMoeda.value == "dolar" & selectACconverter.value == "libra") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorEntrada / libraPDolar)
    }

    if (selectMoeda.value == "dolar" & selectACconverter.value == "bitcoin") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorEntrada * bitcoinPDolar)
    }

    if (selectMoeda.value == "dolar" & selectACconverter.value == "dolar") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorEntrada)
    }

    // conversão dolar

    if (selectMoeda.value == "euro", selectACconverter.value == "real") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEntrada / euroHje)
    }

    if (selectMoeda.value == "euro", selectACconverter.value == "euro") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEntrada)
    }

    if (selectMoeda.value == "euro", selectACconverter.value == "dolar") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEntrada / dolarPEuro)
    }

    if (selectMoeda.value == "euro", selectACconverter.value == "libra") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEntrada / libraPEuro)
    }

    if (selectMoeda.value == "euro", selectACconverter.value == "bitcoin") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEntrada * bitcoinPEuro)
    }

    // conversão euro

    if (selectMoeda.value == "libra" & selectACconverter.value == "real") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorEntrada / libraHoje)
    }

    if (selectMoeda.value == "libra" & selectACconverter.value == "dolar") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorEntrada / dolarPLibra)
    }

    if (selectMoeda.value == "libra" & selectACconverter.value == "euro") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorEntrada / euroPLibra)
    }

    if (selectMoeda.value == "libra" & selectACconverter.value == "libra") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorEntrada)
    }

    if (selectMoeda.value == "libra" & selectACconverter.value == "bitcoin") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorEntrada * bitcoinPLibra)
    }
    // conversão moeda libra

    if (selectMoeda.value == "bitcoin" & selectACconverter.value == "real") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valorEntrada / realPBit)
    }

    if (selectMoeda.value == "bitcoin" & selectACconverter.value == "dolar") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valorEntrada / dolarPBit)
    }

    if (selectMoeda.value == "bitcoin" & selectACconverter.value == "euro") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valorEntrada / euroPBit)
    }

    if (selectMoeda.value == "bitcoin" & selectACconverter.value == "libra") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valorEntrada / libraPBit)
    }
    
    if (selectMoeda.value == "bitcoin" & selectACconverter.value == "bitcoin") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valorEntrada)
    }

    // conversão moeda bitcoin

    if (selectMoeda.value == "real" & selectACconverter.value == "real") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEntrada)
    }

    if (selectMoeda.value == "real" & selectACconverter.value == "dolar") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEntrada * dolarHoje)
    }

    if (selectMoeda.value == "real" & selectACconverter.value == "euro") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEntrada * euroHje)
    }

    if (selectMoeda.value == "real" & selectACconverter.value == "libra") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEntrada * libraHoje)
    }

    if (selectMoeda.value == "real" & selectACconverter.value == "bitcoin") {
        valorConvertidoTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEntrada * biticoinHoje)
    }

    //conversao moeda real


    valorEntadaTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorEntrada)
}

function nomeMoedaConvertida (){
    
    const auteracaoNomeMoeda = document.getElementById("nome-moeda-convertida")
    const imgCurrency = document.querySelector("#img-currency")

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


function nomeMoedaAConverter (){
        
    const auteracaoNomePMoeda = document.getElementById("nome-moeda-a-converter")
    const imgCurrency1 = document.querySelector("#img-currency1")

    if (selectACconverter.value == "dolar") {
        auteracaoNomePMoeda.innerHTML = "Dólar Americano"
        imgCurrency1.src = "./assets/dolar.png"
    }

    if (selectACconverter.value == "euro") {
        auteracaoNomePMoeda.innerHTML = "Euro"
        imgCurrency1.src="./assets/euro.png"
    }

    if (selectACconverter.value == "libra") {
        auteracaoNomePMoeda.innerHTML = "Libra"
        imgCurrency1.src="./assets/libra 1.png"
    }

    if (selectACconverter.value == "bitcoin") {
        auteracaoNomePMoeda.innerHTML = "Bitcoin"
        imgCurrency1.src = "./assets/bitcoin 1.png"
    }

    if (selectACconverter.value == "real") {
        auteracaoNomePMoeda.innerHTML = "Real Brasileiro"
        imgCurrency1.src = "./assets/brasil 2.png"
    }
    moedaValor()
}
