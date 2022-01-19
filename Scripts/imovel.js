var imovelAtual;    //Imovel com base o ID
let carouselImg = document.querySelector('#fotosImovel .carousel-inner');   //Seleção do Carousel de fotos

//Seleciona o imóvel na lista de imóveis existentes
for(i = 0; i < imoveis.length; i++){
    if (imoveis[i].id == location.href.split('?id=')[1]) {
        imovelAtual = imoveis[i];
        break;
    }
}

//Insere as imagens no caroussel
for (let i = 1; i < imovelAtual.maxFotos; i++) {
    document.querySelector('#fotosImovel .carousel-inner').innerHTML += `
    <div class="carousel-item">
        <img src="${imovelAtual.fotos}${i+1}.jpg" class="d-block w-100" alt="...">
    </div>
    `;
    
}
document.getElementById('preco').innerHTML += formataNumero(imovelAtual['valor'],0);
document.getElementById('bairro').innerHTML += imovelAtual['localizacao'][1];
document.getElementById('quartos').innerHTML += imovelAtual['quartos'];
document.getElementById('banheiros').innerHTML += imovelAtual['banheiros'];
document.getElementById('vagas').innerHTML += imovelAtual['vagas'];
document.getElementById('metragem').innerHTML += `${imovelAtual['metragem'].toString().replace('.',',')}m²`;
document.getElementById('iptu').innerHTML += formataNumero(imovelAtual['iptu'],2);
document.getElementById('suites').innerHTML += imovelAtual['suites'];

document.getElementById('descricao').innerHTML += imovelAtual['descricao'];

if (imovelAtual['habitese'] == 's'){
    document.getElementById('habitese').innerHTML += '<i class="fas fa-check-square"></i>';
}
else{
    document.getElementById('habitese').innerHTML += '<i class="fas fa-times-circle"></i>';
}