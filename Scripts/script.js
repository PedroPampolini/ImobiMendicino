/*-----------------------------------------
Estrutura do objeto:
tipo: casa, apto, lote,loja,sala,outro
quartos: numeral
localizacao: [cidade,bairro,rua] (os 3 são strings)
suites: numeral
banheiros: numeral
vagas: numeral
valor: numeral
iptu: numeral
condomínio: numeral
metragem: [lote, area construida] (os 2 são numeral)
habite-se: booleano
fotos: string do path, cada foto deve ter o nome como apenas a númeração da ordem
fotos destaque: [numeral, numeral, numeral] (um vetor com o index das fotos mais bonitas de cada casa)
maximoFotos: numeral (a quantidade de fotos que tem)
descrição
codigo: 2 primeiros algarismos para tipo, 4 restantes para id do imóvel
01: apto 02: casa 03: lojas 04: lotes 05: salas 06: outros
exemplo:     {id: numero na lista, 'codigo': 'xxxxxx', 'tipo': 'casa','quartos': 3, 'localizacao': ['Belo Horizonte','Bandeirantes', 'Bianca'], 'suites': 3, 'banheiros': 3, 'vagas': 4,'valor': 100000.00, 'iptu':10000.00, 'condominio': 1000.00, 'metragem': 1000, 'habitese': 's', 'fotos': 'imagens/imoveis/casas/1/', 'fotosDestaque': [1,2,3], 'maxFotos': 10, 'descricao': 'Lorem ipsum dolor'}
-----------------------------------------*/
var imoveisDestaque = ['imagens/imoveis/lojas/1/1.jpg','imagens/imoveis/apto/1/22.jpg','imagens/imoveis/lotes/1/6.jpg'];

var imoveis = [
    {id: 0, 'codigo': '010001', 'tipo': 'apto','quartos': 2, 'localizacao': ['Belo Horizonte','Aeroporto', 'Rua Professor Jerson Martins'], 'suites': 1, 'banheiros': 3, 'vagas': 2,'valor': 630000, 'iptu':1669, 'condominio': 600, 'metragem': 126.50, 'habitese': 's', 'fotos': 'imagens/imoveis/apto/1/', 'fotosDestaque': [1,16,26], 'maxFotos': 27, 'descricao': 'Linda e aconchegante cobertura  no bairro Aeroporto, em Belo Horizonte/MG. Sala para 2 ambientes, 2 quartos, sendo 1 suíte,  com armários, cozinha planejada, banho social. No piso superior 1 banheiro e área de serviço. Tudo em porcelanato. Porteiro 24h, portão eletrônico, piscina, salão de festas, quadra. 2 vagas de garagem em linha. Próximo a comércio e ponto de ônibus. Frente ao EPA da rua Boaventura. Condomínio médio de R$600,00. 126,50 m². IPTU anual 1.669,00. R$630.000,00'},
    {id: 1, 'codigo': '010002', 'tipo': 'apto','quartos': 3, 'localizacao': ['Belo Horizonte','Grajaú', 'Rua Rio Negro'], 'suites': 1, 'banheiros': 2, 'vagas': 1,'valor': 470000, 'iptu':1182, 'condominio': 500, 'metragem': 130, 'habitese': 's', 'fotos': 'imagens/imoveis/apto/2/', 'fotosDestaque': [15,1,5], 'maxFotos': 15, 'descricao': 'Apartamento no bairro Grajaú, em Belo Horizonte/MG, com 130m², 2 amplas salas,  3 quartos com opção de colocar parede em uma das salas transformando em 4 quartos e uma excelente cozinha,  em porcelanato, lavanderia, DCE, 1 vaga de garagem, com possibilidade de 2.Valor R$470.000,00'},
    {id: 2, 'codigo': '010003', 'tipo': 'apto','quartos': 3, 'localizacao': ['Belo Horizonte','Santa Rosa', 'Rua Quintino Bocaiuva'], 'suites': 0, 'banheiros': 1, 'vagas': 'X','valor': 250000, 'iptu':773, 'condominio': 271, 'metragem': 57.46, 'habitese': 's', 'fotos': 'imagens/imoveis/apto/3/', 'fotosDestaque': [1,3,12], 'maxFotos': 19, 'descricao': 'Apartamento no bairro Santa Rosa.  em Belo Horizonte/MG, 3º pavimento, piso todo em cerâmica, sala para dois ambientes, três quartos, dois com armários, cozinha com armário, banho social com armário e box blindex, área de serviço, 57,46 m², R$250.000,00 (duzentos e cinquenta mil reais). Próximo a comércio e ponto de ônibus. Condomínio 271,00, IPTU anual 773,00.'},
    {id: 3, 'codigo': '040004', 'tipo': 'loja','quartos': 1, 'localizacao': ['Belo Horizonte','Bandeirantes', 'Avenida Sicília'], 'suites': 0, 'banheiros': 1, 'vagas': 0,'valor': 295000, 'iptu':1011, 'condominio': 231, 'metragem': 49.79, 'habitese': 's', 'fotos': 'imagens/imoveis/lojas/1/', 'fotosDestaque': [1,6,12], 'maxFotos': 12, 'descricao': 'Loja localizada no bairro Bandeirantes, em Belo Horizonte/MG, em shopping de 21 unidades, em  avenida com fácil estacionamento. Boa visualização do local, em frente ao ponto final do MOVE 5106, em uma praça com grande passagem de veículos e linhas de ônibus. Próxima à igreja da Pampulha (2,5km),  Mineirinho (2,8km) e Mineirão (3,5km). Área com 49,79m². Mezanino, cozinha e banheiro. Documentação regularizada, IPTU  anual R$1.011,00, condomínio R$231,00. Valor do imóvel: R$295.000,00'},
    {id: 4, 'codigo': '030005', 'tipo': 'lote','quartos': 0, 'localizacao': ['Belo Horizonte','Bandeirantes', 'Avenida Antônio Francisco Lisboa'], 'suites': 0, 'banheiros': 0, 'vagas': 0,'valor': 749000, 'iptu':3207, 'condominio': 0, 'metragem': 1000, 'habitese': 's', 'fotos': 'imagens/imoveis/lotes/1/', 'fotosDestaque': [7,6,1], 'maxFotos': 11, 'descricao': 'Lote no bairro Bandeirantes, em Belo Horizonte/MG, 1.000m², plano, várias árvores frutíferas. Aceita cobertura de até R$1.100.000, região do Jaraguá, Ouro Preto, Dona Clara, liberdade. Volta em dinheiro.Valor do imóvel R$749.000'},
    {id: 5, 'codigo': '050006', 'tipo': 'sala','quartos': 0, 'localizacao': ['Belo Horizonte','Bandeirantes', 'Avenida Sicília'], 'suites': 0, 'banheiros': 1, 'vagas': 0,'valor': 160000, 'iptu':1011, 'condominio': 231, 'metragem': 37.61, 'habitese': 's', 'fotos': 'imagens/imoveis/salas/1/', 'fotosDestaque': [4,6,13], 'maxFotos': 15, 'descricao': 'Sala localizada no bairro Bandeirantes, em Belo Horizonte/MG, em shopping de 21 unidades, em  avenida com fácil estacionamento. Boa visualização do local, em frente ao ponto final do MOVE 5106, em uma praça com grande passagem de veículos e linhas de ônibus. Próxima à igreja da Pampulha (2,5km),  Mineirinho (2,8km) e Mineirão (3,5km). Área com 37,61m², piso em cerâmica. Documentação regularizada, condomínio R$231,00. Valor do imóvel: R$160.000,00'}
    
]

localStorage.setItem('imoveisDB',JSON.stringify(imoveis));

function formataLink(frase){
    comAcento = 'áãâàéèêíìîóòôõúùûü';
    semAcento = 'aaaaeeeiiioooouuuu';
    let novaFrase = '';
    for(i = 0;i<frase.length;i++){
        if(comAcento.includes(frase[i])){
            novaFrase += frase[i].replace(comAcento[comAcento.indexOf(frase[i])],semAcento[comAcento.indexOf(frase[i])]);
        }
        else{
            novaFrase+=frase[i];
        }                
    }
    novaFrase = novaFrase.replace(' ','');
    novaFrase = novaFrase.toLocaleLowerCase();
    return novaFrase;
}

//Formatação de número para a casa de milhar
function formataNumero(numero,decimal) {
    var i = parseInt(numero = Math.abs( + numero || 0).toFixed(decimal), 10) + "";
    var j = (j = i.length) > 3 ? j % 3 : 0;
    
    return (j ? i.substr(0, j) + "." : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ".") + (decimal ? (2 ? "," + Math.abs(numero - i).toFixed(decimal).slice(2) : "") : '');   
}

document.getElementById('pesquisar').onsubmit = (evento) =>{
    
    if (document.querySelector('#pesquisar input').value != '') {
        //location.href = `imovel.html`+ '?id=' + document.querySelector('#pesquisar input').value;
        //location.href = 'imovel.html';
        location.href = `imovel.html?id=${document.querySelector('#pesquisar input').value}`;
        alert('remover');
    }
    else{
        evento.preventDefault();
    }
}