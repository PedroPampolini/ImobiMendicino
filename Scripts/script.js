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

exemplo:     {'tipo': 'casa','quartos': 3, 'localizacao': ['Belo Horizonte','Bandeirantes', 'Bianca'], 'suites': 3, 'banheiros': 3, 'vagas': 4,'valor': 100000.00, 'iptu':10000.00, 'condominio': 1000.00, 'metragem': 1000, 'habitese': 's', 'fotos': 'imagens/imoveis/casas/1/', 'fotosDestaque': [1,2,3], 'maxFotos': 10, 'descricao': 'Lorem ipsum dolor'}
-----------------------------------------*/
var imoveisDestaque = ['imagens/home/caroussel/1.jpg','imagens/home/caroussel/2.jpg','imagens/home/caroussel/3.jpg'];

var imoveis = [
    {id: 0, 'tipo': 'apto','quartos': 2, 'localizacao': ['Belo Horizonte','Aeroporto', 'Professor Jerson Martins'], 'suites': 1, 'banheiros': 3, 'vagas': 2,'valor': 630000, 'iptu':1669, 'condominio': 600, 'metragem': 126.50, 'habitese': 's', 'fotos': 'imagens/imoveis/apto/1/', 'fotosDestaque': [1,16,26], 'maxFotos': 27, 'descricao': 'Linda e aconchegante cobertura  no bairro Aeroporto, em Belo Horizonte/MG. Sala para 2 ambientes, 2 quartos, sendo 1 suíte,  com armários, cozinha planejada, banho social. No piso superior 1 banheiro e área de serviço. Tudo em porcelanato. Porteiro 24h, portão eletrônico, piscina, salão de festas, quadra. 2 vagas de garagem em linha. Próximo a comércio e ponto de ônibus. Frente ao EPA da rua Boaventura. Condomínio médio de R$600,00. 126,50 m². IPTU anual 1.669,00. R$630.000,00'},
    {id: 1, 'tipo': 'casa','quartos': 2, 'localizacao': ['Belo Horizonte','Aeroporto', 'Professor Jerson Martins'], 'suites': 1, 'banheiros': 3, 'vagas': 2,'valor': 630000, 'iptu':1669, 'condominio': 600, 'metragem': 126.50, 'habitese': 's', 'fotos': 'imagens/imoveis/casas/1/', 'fotosDestaque': [1,16,26], 'maxFotos': 27, 'descricao': 'Linda e aconchegante cobertura  no bairro Aeroporto, em Belo Horizonte/MG. Sala para 2 ambientes, 2 quartos, sendo 1 suíte,  com armários, cozinha planejada, banho social. No piso superior 1 banheiro e área de serviço. Tudo em porcelanato. Porteiro 24h, portão eletrônico, piscina, salão de festas, quadra. 2 vagas de garagem em linha. Próximo a comércio e ponto de ônibus. Frente ao EPA da rua Boaventura. Condomínio médio de R$600,00. 126,50 m². IPTU anual 1.669,00. R$630.000,00'},
    {id: 2, 'tipo': 'casa','quartos': 4, 'localizacao': ['Belo Horizonte','São Luís', 'Jacó'], 'suites': 4, 'banheiros': 5, 'vagas': 7,'valor': 1000000, 'iptu':1669, 'condominio': 600, 'metragem': 1500, 'habitese': 's', 'fotos': 'imagens/imoveis/casas/1/', 'fotosDestaque': [1,16,26], 'maxFotos': 10, 'descricao': 'Linda e aconchegante cobertura  no bairro Aeroporto, em Belo Horizonte/MG. Sala para 2 ambientes, 2 quartos, sendo 1 suíte,  com armários, cozinha planejada, banho social. No piso superior 1 banheiro e área de serviço. Tudo em porcelanato. Porteiro 24h, portão eletrônico, piscina, salão de festas, quadra. 2 vagas de garagem em linha. Próximo a comércio e ponto de ônibus. Frente ao EPA da rua Boaventura. Condomínio médio de R$600,00. 126,50 m². IPTU anual 1.669,00. R$630.000,00'},
    {id: 3, 'tipo': 'casa','quartos': 1, 'localizacao': ['Belo Horizonte','São Pedro', 'dos Bobos'], 'suites': 0, 'banheiros': 1, 'vagas': 3,'valor': 430000, 'iptu':1669, 'condominio': 600, 'metragem': 358.7, 'habitese': 's', 'fotos': 'imagens/imoveis/casas/1/', 'fotosDestaque': [1,16,26], 'maxFotos': 10, 'descricao': 'Linda e aconchegante cobertura  no bairro Aeroporto, em Belo Horizonte/MG. Sala para 2 ambientes, 2 quartos, sendo 1 suíte,  com armários, cozinha planejada, banho social. No piso superior 1 banheiro e área de serviço. Tudo em porcelanato. Porteiro 24h, portão eletrônico, piscina, salão de festas, quadra. 2 vagas de garagem em linha. Próximo a comércio e ponto de ônibus. Frente ao EPA da rua Boaventura. Condomínio médio de R$600,00. 126,50 m². IPTU anual 1.669,00. R$630.000,00'}
    
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