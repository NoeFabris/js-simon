var aiNumbers = [];
var check = true

while (aiNumbers.length < 5) {
    var num = numGen();
    aiNumbers.push(num);
}

console.log(aiNumbers);
alert('Ecco i numeri che devi ricordare ' + aiNumbers);
setTimeout(function() {
    var numIndovinati = []
    for (let i = 0; i < 5; i++) {
        var userNum = checkInserimentoNum(prompt((i + 1) +'° Numero:'));
        if (check === true) {
            console.log(userNum)
            if (aiNumbers.indexOf(userNum) > -1) {
                numIndovinati.push(userNum)
                console.log('trovato ' + userNum)
            }  
        } else {
            alert('Inserimento non valido')
            i--
        }
    }
    console.log(numIndovinati)

    alert('Hai indovinato ' + (numIndovinati.length) + ' numeri ( ' + numIndovinati + ' )');


}, 30000)