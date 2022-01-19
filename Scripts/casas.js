var casas = [];

//Vetor com as casas filtradas, incialmente vazio
var casaFiltro = [];

var imoveis_ = JSON.parse(localStorage.getItem('imoveisDB'));

//Insere a referência dos objetos dos imóveis do tipo casa no vetor de casas
let iCasa = 0;
for( i = 0; i < imoveis_.length; i++){
    if(imoveis_[i]['tipo'] == 'casa')
    {
        casas[iCasa] = imoveis_[i];
        iCasa ++;
    }
}

if (!location.href.includes('?')){
  for(i = 0; i < casas.length; i++)
  {
    for (i = 0; i < casas.length; i++) {
      casaFiltro.push(casas[i]);
    }
    
  }   
}
else
{
  

  //Vetor com os parametros crus
  var param = location.href.split('?')[1].split('&');
  param.pop();
  //console.log(param);

  let casaFiltroProv = [];

  //Cria objeto dos parametros e seus valores
  var paramValue = []
  for (i = 0; i < param.length; i++) {
    paramValue[param[i].split('=')[0]] = param[i].split('=')[1];
  }

  let iFiltro = 0;
  for (i = 0; i < casas.length; i++) {
    if(casas[i]['quartos'] >= paramValue['quartos'] && casas[i]['banheiros'] >= paramValue['banheiros'] && casas[i]['vagas'] >= paramValue['vagas'] && casas[i]['valor'] >= paramValue['pmin'] && casas[i]['valor'] <= paramValue['pmax'])
    {
      casaFiltroProv.push(casas[i]);
    }
  }
  
  if (paramValue['bairro'] == 'default')
  {
    for (let i = 0; i < casaFiltroProv.length; i++) {
      casaFiltro.push(casaFiltroProv[i]);      
    }
  }
  else
  {
    let iBairro = 0;
    while (iBairro < casaFiltroProv.length) {
      if (formataLink(casaFiltroProv[iBairro]['localizacao'][1]) == paramValue['bairro']) {
        casaFiltro.push(casaFiltroProv[iBairro]);
      }
      iBairro++;
      continue;
    }
    
  }

  

  
}

//Caso tenha realizado o filtro, mostra os itens filtrados ou caso não tenha nenhum
if (casaFiltro.length > 0)
{
  for(i = 0; i < casaFiltro.length; i++)
  {
    document.getElementById('casasInfo').innerHTML += `
                        <div class="mainBox">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="fotosDestaque">
                                        <div id="carouselExampleControls${i}" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                              <div class="carousel-item active">
                                                <img src="${casaFiltro[i]['fotos']}/${casaFiltro[i]['fotosDestaque'][0]}.jpg" class="d-block w-100" alt="imagem de casa">
                                              </div>
                                              <div class="carousel-item">
                                                <img src="${casaFiltro[i]['fotos']}/${casaFiltro[i]['fotosDestaque'][1]}.jpg" class="d-block w-100" alt="imagem de casa">
                                              </div>
                                              <div class="carousel-item">
                                                <img src="${casaFiltro[i]['fotos']}/${casaFiltro[i]['fotosDestaque'][2]}.jpg" class="d-block w-100" alt="imagem de casa">
                                              </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${i}" data-bs-slide="prev">
                                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                              <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${i}" data-bs-slide="next">
                                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                              <span class="visually-hidden">Next</span>
                                            </button>
                                          </div>
                                    </div>
                                    
                                </div>

                                <div class="col-12 col-md-6">
                                    <p class="preco">R$ ${formataNumero(casaFiltro[i]['valor'])}</p>
                                    <p class="codigo"><i class="fas fa-barcode"></i> Código: ${casaFiltro[i].id}</p>
                                    <p class="bairro"><i class="fas fa-road"></i> Bairro ${casaFiltro[i]['localizacao'][1]}</p>
                                    <p class="quartos"><i class="fas fa-bed"></i>  ${casaFiltro[i]['quartos']} Quartos</p>
                                    <p class="banheiros"><i class="fas fa-toilet"></i> ${casaFiltro[i]['banheiros']} Banheiros</p>
                                    <p class="vagas"><i class="fas fa-car"></i> ${casaFiltro[i]['vagas']} Vagas de garagem</p>
                                    <a class="btn btn-secondary vejaMais" href="imovel.html?id=${casaFiltro[i].id}" role="button">+ Veja Mais</a>
                                </div>
                            </div>
                            
                        </div>
    `;
  }
}
else{
  document.getElementById('casasInfo').innerHTML = `
  <p class="titulo" style="font-size: 2.5em;">Infelizmente não encontramos nada aqui</p>
  `;
}

document.getElementById('pesquisaButton').onclick = () =>{
  var filtroVet = document.querySelectorAll('section .inputFiltro');
  filtroVet[filtroVet.length] = document.querySelector('section select');
  //console.log(filtroVet);
  let queryStr = '';
  for (let i = 0; i < filtroVet.length; i++) {
    switch (i) {
      case 0:
        queryStr += `quartos=${filtroVet[i].value}`;
        break;

      case 1:
        queryStr += `banheiros=${filtroVet[i].value}`;
        break;

      case 2:
        queryStr += `vagas=${filtroVet[i].value}`;
        break;

      case 3:
        queryStr += `pmin=${filtroVet[i].value}`;
        break;
      case 4:
        queryStr += `pmax=${filtroVet[i].value}`;
        break;
      case 5:
        queryStr += `bairro=${formataLink(filtroVet[i].value)}`;
    }
    queryStr += '&';
  }
  if (queryStr != '') {
    //console.log(`${location.href}?${queryStr}`);
    location.href = `casas.html?${queryStr}`;
  }
}


