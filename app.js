function calculoDeRank(vitoria, derrota) {
    var qntVitoria = vitoria;
    var qntDerrota = derrota;
    var nivel;

    if (qntVitoria <= 10) {
        nivel = 'Ferro';
    } else if (qntVitoria >= 11 && qntVitoria <= 20) {
        nivel = 'Bronze';
    } else if (qntVitoria >= 21 && qntVitoria <= 50) {
        nivel = 'Prata';
    } else if (qntVitoria >= 51 && qntVitoria <= 80) {
        nivel = 'Ouro';
    } else if (qntVitoria >= 81 && qntVitoria <= 90) {
        nivel = 'Prata';
    } else if (qntVitoria >= 91 && qntVitoria <= 100) {
        nivel = 'Prata';
    } else {
        nivel = 'imortal';
    }
    
    return `O Herói tem de saldo de ${qntVitoria - qntDerrota} está no nível de ${nivel}`

}
calculoDeRank(10, 5)







