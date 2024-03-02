function openTab(tabId, resultId) {
    var tabs = document.querySelectorAll('.tab');
    var results = document.querySelectorAll('.result-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    results.forEach(result => result.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.getElementById(resultId).classList.add('active');
}

document.getElementById('gerarNumero').addEventListener('click', function() {
    var numero = Math.floor(Math.random() * 100);
    document.getElementById('numerosResult').innerText = 'Número Aleatório: ' + numero;
    openTab('numerosTab', 'numerosResult');
});

document.getElementById('gerarNome').addEventListener('click', function() {
    var nomes = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
    var nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById('nomesResult').innerText = 'Nome Aleatório: ' + nomeAleatorio;
    openTab('nomesTab', 'nomesResult');
});
