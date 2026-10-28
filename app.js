'use strict';
const KEY='minhas-compras-v1'; // Mantém os registros já existentes.
const KEY_MERCADO='minhas-compras-supermercado-v2'; // Preserva dados das versões anteriores.
const MERCADOS_PADRAO=['Guanabara','Assaí Atacadista','Atacadão','Supermarket','Mundial','Prezunic','Dom Atacadista','Costa Azul'];
const CATALOGO_PADRAO={"Mercearia":"Arroz,Feijão,Feijão preto,Feijão carioca,Fubá,Açúcar,Sal,Café,Macarrão,Farinha de trigo,Farinha de mandioca,Farinha de rosca,Amido de milho,Aveia,Óleo de soja,Azeite,Vinagre,Molho de tomate,Extrato de tomate,Milho verde,Ervilha,Atum,Sardinha,Leite condensado,Creme de leite,Fermento,Achocolatado,Chocolate em pó,Milho de pipoca,Canjica,Tapioca,Farofa,Tempero pronto,Caldo de carne,Pimenta-do-reino,Orégano,Colorau,Cominho,Feijão branco,Feijão fradinho,Feijão vermelho,Feijão jalo,Feijão bolinha,Arroz integral,Arroz parboilizado,Arroz arbóreo,Arroz branco,Açúcar mascavo,Açúcar demerara,Adoçante,Farinha de aveia,Farinha de arroz,Farinha de milho,Farinha de tapioca,Farinha láctea,Fécula de batata,Polvilho doce,Polvilho azedo,Macarrão espaguete,Macarrão parafuso,Macarrão penne,Macarrão integral,Lasanha massa,Grão-de-bico,Lentilha,Ervilha seca,Milho de canjica,Milho para pipoca,Quinoa,Chia,Linhaça,Gergelim,Granola,Cereal matinal,Mel,Melado,Geleia,Pasta de amendoim,Leite de coco,Coco ralado,Leite evaporado,Chocolate granulado,Essência de baunilha,Fermento biológico,Fermento químico,Bicarbonato de sódio,Canela em pó,Canela em pau,Cravo-da-índia,Louro,Páprica doce,Páprica picante,Curry,Açafrão,Cúrcuma,Noz-moscada,Mostarda,Ketchup,Maionese,Molho shoyu,Molho inglês,Molho barbecue,Molho de pimenta,Molho pesto,Azeitona verde,Azeitona preta,Palmito,Picles,Alcaparras,Alho triturado,Cebola em pó,Sal grosso,Sal rosa,Óleo de girassol,Óleo de milho,Óleo de coco,Vinagre de maçã,Vinagre balsâmico,Azeite extravirgem,Atum em água,Atum em óleo,Sardinha em lata,Seleta de legumes,Ervilha em conserva,Milho em conserva","Carnes e peixes":"Carne bovina,Carne moída,Carne seca,Carne de sol,Costela bovina,Acém,Patinho,Alcatra,Contrafilé,Fígado bovino,Frango,Peito de frango,Coxa de frango,Sobrecoxa de frango,Asa de frango,Carne suína,Costelinha suína,Lombo suíno,Linguiça,Calabresa,Bacon,Presunto,Peixe,Filé de peixe,Camarão,Picanha,Maminha,Fraldinha,Filé mignon,Coxão mole,Coxão duro,Peito bovino,Músculo bovino,Paleta bovina,Cupim,Costela suína,Pernil suíno,Bisteca suína,Carne de porco,Carne para churrasco,Carne para panela,Carne para sopa,Carne de hambúrguer,Moela de frango,Coração de frango,Fígado de frango,Frango inteiro,Filé de peito de frango,Filé de tilápia,Tilápia,Salmão,Bacalhau,Merluza,Pescada,Corvina,Sardinha fresca,Atum fresco,Lula,Polvo,Marisco,Caranguejo,Sururu,Peixe empanado,Linguiça toscana,Linguiça de frango,Linguiça calabresa,Salsicha,Salsichão,Paio,Charque,Carne seca dessalgada","Sacolão - frutas":"Banana,Banana-prata,Banana-nanica,Maçã,Laranja,Tangerina,Limão,Mamão,Manga,Abacaxi,Melancia,Melão,Uva,Pera,Abacate,Morango,Maracujá,Goiaba,Coco,Kiwi,Banana-da-terra,Banana-maçã,Banana-ouro,Maçã verde,Maçã fuji,Maçã gala,Laranja-pera,Laranja-lima,Laranja-bahia,Limão-taiti,Limão-siciliano,Mamão papaia,Mamão formosa,Manga palmer,Manga tommy,Uva verde,Uva roxa,Uva sem semente,Pera portuguesa,Pêssego,Ameixa,Nectarina,Caqui,Figo,Acerola,Amora,Framboesa,Mirtilo,Pitaya,Carambola,Graviola,Caju,Jabuticaba,Romã,Tâmara,Damasco seco,Uva-passa,Ameixa seca,Castanha-do-pará,Castanha-de-caju,Nozes,Amêndoas,Amendoim,Polpa de fruta","Sacolão - legumes e verduras":"Batata,Batata-doce,Cebola,Alho,Tomate,Cenoura,Beterraba,Abobrinha,Chuchu,Abóbora,Pepino,Pimentão,Berinjela,Quiabo,Jiló,Aipim,Mandioca,Inhame,Batata-baroa,Repolho,Couve,Alface,Rúcula,Agrião,Espinafre,Brócolis,Couve-flor,Cheiro-verde,Salsa,Cebolinha,Coentro,Gengibre,Batata inglesa,Batata asterix,Batata bolinha,Batata yacon,Cebola roxa,Cebola branca,Alho-poró,Tomate-cereja,Tomate italiano,Tomate grape,Pimentão verde,Pimentão vermelho,Pimentão amarelo,Abóbora cabotiá,Abóbora moranga,Abóbora japonesa,Abobrinha italiana,Abobrinha brasileira,Chicória,Escarola,Alface americana,Alface crespa,Alface roxa,Alface lisa,Couve manteiga,Couve-de-bruxelas,Repolho roxo,Repolho verde,Brócolis ninja,Vagem,Ervilha torta,Ervilha fresca,Rabanete,Nabo,Maxixe,Milho verde espiga,Palmito pupunha,Cogumelo champignon,Cogumelo shimeji,Cogumelo shiitake,Manjericão,Hortelã,Alecrim,Tomilho,Sálvia,Endro,Capim-limão,Salsão,Aipo,Alcachofra,Aspargo,Almeirão,Mostarda folha","Frios e laticínios":"Leite,Leite em pó,Iogurte,Manteiga,Margarina,Queijo muçarela,Queijo minas,Queijo prato,Requeijão,Creme de queijo,Presunto fatiado,Ovos,Leite integral,Leite desnatado,Leite semidesnatado,Leite sem lactose,Leite vegetal,Leite de amêndoas,Leite de aveia,Leite de soja,Iogurte natural,Iogurte grego,Iogurte desnatado,Iogurte de morango,Bebida láctea,Coalhada,Kefir,Queijo parmesão,Queijo provolone,Queijo gorgonzola,Queijo cottage,Queijo ricota,Queijo cheddar,Queijo coalho,Queijo prato fatiado,Queijo muçarela fatiado,Queijo minas frescal,Queijo cremoso,Requeijão light,Creme de ricota,Manteiga sem sal,Manteiga com sal,Creme vegetal,Peito de peru,Salame,Mortadela,Blanquet de peru,Ovo de codorna,Ovos caipiras,Ovos brancos,Ovos vermelhos","Padaria e café":"Pão francês,Pão de forma,Pão integral,Pão de queijo,Biscoito,Bolacha água e sal,Torrada,Bolo,Pão doce,Pão de hambúrguer,Pão de hot dog,Pão sírio,Pão de leite,Pão de milho,Pão australiano,Pão de centeio,Pão de fermentação natural,Pão bisnaguinha,Pão de cachorro-quente,Baguete,Croissant,Rosquinha,Sonho,Broa de milho,Panetone,Chocotone,Torrada integral,Biscoito cream cracker,Biscoito maisena,Biscoito recheado,Biscoito de polvilho,Biscoito integral,Bolacha de arroz,Wafer,Barra de cereal,Bolo de chocolate,Bolo de cenoura,Bolo de fubá,Café solúvel,Café descafeinado,Café em cápsula,Café moído,Café em grãos,Filtro de café,Filtro de papel","Bebidas":"Água mineral,Água com gás,Suco,Refrigerante,Água de coco,Chá,Água mineral sem gás,Água mineral com gás,Água tônica,Suco de uva,Suco de laranja,Suco de maçã,Suco de maracujá,Suco integral,Suco concentrado,Suco em pó,Chá de camomila,Chá de erva-doce,Chá verde,Chá preto,Chá de hortelã,Chá mate,Refrigerante de cola,Refrigerante de guaraná,Refrigerante de limão,Refrigerante zero,Bebida isotônica,Água saborizada,Achocolatado pronto,Leite fermentado","Limpeza e utilidades":"Detergente,Sabão em pó,Sabão líquido,Sabão em barra,Amaciante,Água sanitária,Desinfetante,Álcool 70%,Limpador multiuso,Lustra-móveis,Esponja de louça,Esponja de aço,Pano de chão,Papel-toalha,Guardanapo de papel,Papel-alumínio,Filme plástico,Saco de lixo,Saco para freezer,Fósforo,Vela,Detergente neutro,Detergente de coco,Detergente para máquina de lavar louça,Desengordurante,Limpador de vidro,Limpador perfumado,Limpador de banheiro,Limpador de piso,Limpador de cozinha,Limpa alumínio,Limpa inox,Limpa forno,Limpa móveis,Limpa carpete,Tira-manchas,Alvejante,Cloro,Água sanitária perfumada,Sabão em pó para roupas,Sabão líquido para roupas,Sabão de coco,Sabão glicerinado,Amaciante concentrado,Desinfetante de pinho,Desinfetante de lavanda,Desinfetante de eucalipto,Esponja multiuso,Esponja de banho,Escova de limpeza,Escova sanitária,Vassoura,Rodo,Pá de lixo,Pano de prato,Flanela,Pano multiuso,Pano de microfibra,Luva de limpeza,Balde,Bacia,Prendedor de roupa,Varal,Corda de varal,Cabide,Saco de lixo 15 litros,Saco de lixo 30 litros,Saco de lixo 50 litros,Saco de lixo 100 litros,Papel toalha rolo,Papel toalha interfolhado,Guardanapo,Guardanapo grande,Papel manteiga,Papel filme,Papel alumínio,Forma descartável,Copo descartável,Prato descartável,Talher descartável,Palito de dente,Palito de fósforo,Acendedor,Isqueiro,Pilha AA,Pilha AAA,Pilha botão,Lâmpada LED,Fita adesiva,Fita isolante,Inseticida,Repelente de insetos,Odorizador de ambientes,Saco zip,Saquinho para alimentos","Higiene pessoal":"Papel higiênico,Sabonete,Shampoo,Condicionador,Creme dental,Escova de dentes,Fio dental,Desodorante,Absorvente,Algodão,Cotonete,Lenço umedecido,Fralda,Creme hidratante,Protetor solar,Sabonete líquido,Sabonete em barra,Sabonete íntimo,Shampoo anticaspa,Shampoo infantil,Condicionador infantil,Máscara capilar,Creme de pentear,Óleo capilar,Gel de cabelo,Creme de barbear,Espuma de barbear,Lâmina de barbear,Aparelho de barbear,Loção pós-barba,Desodorante roll-on,Desodorante aerosol,Desodorante creme,Creme dental infantil,Enxaguante bucal,Escova de dentes infantil,Escova interdental,Fio dental com cera,Fita dental,Papel higiênico folha dupla,Papel higiênico folha tripla,Lenço de papel,Lenço umedecido infantil,Fralda descartável,Fralda geriátrica,Absorvente diário,Absorvente noturno,Protetor diário,Algodão em disco,Hastes flexíveis,Cotonetes,Acetona,Removedor de esmalte,Esmalte,Cortador de unhas,Lixa de unha,Protetor labial,Protetor solar infantil,Creme para mãos,Hidratante corporal,Perfume,Colônia,Álcool em gel","Congelados e outros":"Batata frita congelada,Hambúrguer,Nuggets,Pizza congelada,Pão de alho,Sorvete,Gelo,Ração para cachorro,Ração para gato,Legumes congelados,Brócolis congelado,Ervilha congelada,Milho congelado,Polpa de açaí,Açaí congelado,Lasagna congelada,Lasanha congelada,Empanado de frango,Empanado de peixe,Almôndega congelada,Pão de queijo congelado,Massa de pastel,Massa de pizza,Disco de pizza,Pastel congelado,Coxinha congelada,Quibe congelado,Empada congelada,Picole,Picolé de frutas,Sorvete de creme,Sorvete de chocolate,Sorvete de morango,Ração para cães,Ração para gatos,Areia sanitária para gatos,Petisco para cachorro,Petisco para gato,Tapete higiênico,Saco para recolher fezes"};
const lojasFixas=['Shopee','Amazon','Mercado Livre','AliExpress','Shein','Supermercado','Outras'];
const moeda=n=>Number(n).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const $=id=>document.getElementById(id);
const hoje=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
const idNovo=()=>crypto.randomUUID();
const numero=v=>v===''||v===null||v===undefined?null:Number(v);
let compras=[];
let mercado={atual:[],historico:[],mercados:[...MERCADOS_PADRAO],selecionado:MERCADOS_PADRAO[0],catalogoExtra:[]};
try{const salvo=JSON.parse(localStorage.getItem(KEY)||'[]');if(Array.isArray(salvo))compras=salvo;}catch(e){alert('Não foi possível ler as compras salvas. Não foram sobrescritas.');}
try{const salvo=JSON.parse(localStorage.getItem(KEY_MERCADO)||'null');if(salvo&&Array.isArray(salvo.atual)&&Array.isArray(salvo.historico))mercado=salvo;}catch(e){alert('Não foi possível ler a lista do supermercado. Não foi sobrescrita.');}
if(!Array.isArray(mercado.catalogoExtra))mercado.catalogoExtra=[];
if(!Array.isArray(mercado.mercados))mercado.mercados=[...MERCADOS_PADRAO];
if(typeof mercado.selecionado!=='string'||!mercado.selecionado)mercado.selecionado=mercado.mercados[0]||MERCADOS_PADRAO[0];
function persistir(chave,valor){localStorage.setItem(chave,JSON.stringify(valor));if(window.firebaseSalvar)window.firebaseSalvar(chave,valor);}
function salvarCompras(){persistir(KEY,compras);renderizarCompras()}
function alterarMercado(mudanca){const anterior=structuredClone(mercado);try{mudanca();persistir(KEY_MERCADO,mercado);renderizarMercado();return true}catch(e){mercado=anterior;alert('Não foi possível salvar a lista. Verifique o armazenamento.');return false}}
// O histórico é atualizado automaticamente quando um item entra no carrinho.
function atualizarHistoricoAutomatico(item,remover=false){
 const data=item.dataCompra||hoje();
 let registro=mercado.historico.find(h=>h.automatico===true&&h.data===data);
 if(remover){
  for(const h of mercado.historico.filter(h=>h.automatico===true))h.itens=h.itens.filter(i=>i.id!==item.id);
  mercado.historico=mercado.historico.filter(h=>!h.automatico||h.itens.length);
  return;
 }
 if(!item.feito)return;
 if(!registro){registro={id:idNovo(),data,itens:[],automatico:true};mercado.historico.push(registro)}
 for(const h of mercado.historico.filter(h=>h.automatico===true))h.itens=h.itens.filter(i=>i.id!==item.id);
 registro.itens.push(structuredClone(item));
}
function salvarEdicaoAutomatica(item,qi,us,pi){
 const q=Number(qi.value),p=pi.value===''?null:Number(pi.value);
 if(!Number.isFinite(q)||q<=0||q>100000||p!==null&&(!Number.isFinite(p)||p<0||p>100000000))return false;
 const anterior=structuredClone(mercado);
 try{
  item.quantidade=q;item.unidade=us.value;item.previsto=p;item.pago=null;
  // Editar quantidade ou preco registra automaticamente a compra no mercado atual.
  item.feito=true;
  item.supermercado=mercado.selecionado;item.dataCompra=hoje();
  atualizarHistoricoAutomatico(item);
  persistir(KEY_MERCADO,mercado);
  return true;
 }catch(e){mercado=anterior;alert('Não foi possível salvar automaticamente.');return false}
}
function renderizarCompras(){const total=compras.reduce((s,c)=>s+c.valor,0);$('total').textContent=moeda(total);$('lojas').replaceChildren();for(const loja of lojasFixas){const soma=compras.filter(c=>c.loja===loja).reduce((s,c)=>s+c.valor,0);const linha=document.createElement('div');linha.className='linha';const nome=document.createElement('span');nome.textContent=loja;const valor=document.createElement('strong');valor.textContent=moeda(soma);linha.append(nome,valor);$('lojas').append(linha)}$('historico').replaceChildren();if(!compras.length){$('historico').textContent='Nenhuma compra registrada.';return}for(const c of [...compras].sort((a,b)=>b.data.localeCompare(a.data))){const linha=document.createElement('div');linha.className='linha';const descricao=document.createElement('div');const nome=document.createElement('strong');nome.textContent=c.produto;const detalhe=document.createElement('small');detalhe.textContent=`${c.loja} • ${c.data.split('-').reverse().join('/')} • ${moeda(c.valor)}`;descricao.append(nome,detalhe);const botao=document.createElement('button');botao.textContent='Excluir';botao.onclick=()=>{if(confirm('Excluir esta compra?')){const anterior=compras;compras=compras.filter(x=>x.id!==c.id);try{salvarCompras()}catch(e){compras=anterior;alert('Não foi possível excluir.')}}};linha.append(descricao,botao);$('historico').append(linha)}}
$('data').value=hoje();
$('form').addEventListener('submit',e=>{e.preventDefault();const produto=$('produto').value.trim(),valor=Number($('valor').value),data=$('data').value,loja=$('loja').value;if(!produto||!Number.isFinite(valor)||valor<=0||!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(data))return alert('Preencha os campos corretamente.');compras.push({id:idNovo(),produto,valor:Math.round(valor*100)/100,data,loja});try{salvarCompras();$('form').reset();$('data').value=hoje()}catch(e){compras.pop();alert('Não foi possível salvar. Verifique o armazenamento do navegador.')}});
function criar(tag,texto,classe){const el=document.createElement(tag);if(texto!==undefined)el.textContent=texto;if(classe)el.className=classe;return el}
function campoPreco(titulo,valor,alterar){const label=criar('label',titulo);const input=document.createElement('input');input.type='number';input.min='0';input.step='0.01';input.inputMode='decimal';input.placeholder='Opcional';input.value=valor===null||valor===undefined?'':String(valor);input.addEventListener('change',()=>{const n=numero(input.value);if(n!==null&&(!Number.isFinite(n)||n<0||n>100000000)){alert('Informe um preço válido.');input.value=valor??'';return}alterar(n)});label.append(input);return label}
// Registros antigos guardam o total da linha. Os novos guardam o preço unitário.
function valorLinha(item,chave){const preco=item[chave];if(typeof preco!=='number'||!Number.isFinite(preco))return 0;if(item.precoModo!=='unitario')return preco;const q=Number(item.quantidade);return Math.round(preco*(Number.isFinite(q)&&q>0?q:1)*100)/100}
function totalCampo(itens,chave){return itens.reduce((s,i)=>s+valorLinha(i,chave),0)}
function unidades(item){const q=Number(item.quantidade);if(!(q>0)||!Number.isFinite(q))return null;const u=item.unidade;if(u==='kg')return {base:'kg',q};if(u==='g')return {base:'kg',q:q/1000};if(u==='L')return {base:'L',q};if(u==='ml')return {base:'L',q:q/1000};if(u==='un')return {base:'un',q};return null}
function renderizarMercados(){const select=$('mercado-selecionado');select.replaceChildren();for(const nome of mercado.mercados){const op=criar('option',nome);op.value=nome;select.append(op)}select.value=mercado.selecionado}
function nomeChave(nome){return nome.trim().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function produtosCatalogo(){const nomes=new Set(),grupos=[];for(const [categoria,lista] of Object.entries(CATALOGO_PADRAO)){const produtos=lista.split(',').filter(n=>{const chave=nomeChave(n);if(nomes.has(chave))return false;nomes.add(chave);return true});grupos.push({categoria,produtos})}const extras=mercado.catalogoExtra.filter(n=>{const chave=nomeChave(n);if(nomes.has(chave))return false;nomes.add(chave);return true});if(extras.length)grupos.push({categoria:'Meus produtos',produtos:extras});return grupos}
function mostrarAvisoCatalogo(mensagem){const aviso=$('aviso-catalogo');aviso.textContent=mensagem;aviso.hidden=false;}
function renderizarCatalogo(){
 const area=$('catalogo');area.replaceChildren();
 const busca=nomeChave($('busca-catalogo').value);
 if(!busca){area.hidden=true;return}
 area.hidden=false;
 const produtos=produtosCatalogo().flatMap(grupo=>grupo.produtos)
  .filter(nome=>nomeChave(nome).startsWith(busca))
  .sort((a,b)=>a.localeCompare(b,'pt-BR'));
 if(!produtos.length){area.append(criar('p','Nenhum produto encontrado. Cadastre abaixo.','ajuda'));return}
 for(const nome of produtos){
  const botao=criar('button',nome,'produto-catalogo produto-acao');
  botao.type='button';botao.setAttribute('aria-label','Adicionar '+nome+' à Lista do mercado');
  botao.onclick=()=>{
   const chave=nomeChave(nome);
   if(mercado.atual.some(i=>nomeChave(i.nome)===chave)){
    mostrarAvisoCatalogo(nome+' já está na Lista do mercado');
   }else{
    const ok=alterarMercado(()=>{mercado.atual.push({id:idNovo(),nome,previsto:null,pago:null,precoModo:'unitario',feito:false,quantidade:1,unidade:'un',supermercado:null,dataCompra:null})});
    if(ok!==false)mostrarAvisoCatalogo('✓ '+nome+' adicionado à Lista do mercado');
   }
   $('busca-catalogo').value='';renderizarCatalogo();
  };
  area.append(botao);
 }
}
$('busca-catalogo').addEventListener('input',renderizarCatalogo);
$('form-catalogo').addEventListener('submit',e=>{e.preventDefault();const nome=$('catalogo-novo').value.trim();if(!nome||nome.length>120)return alert('Digite um produto válido.');if(produtosCatalogo().some(g=>g.produtos.some(n=>nomeChave(n)===nomeChave(nome))))return alert('Esse produto já está no catálogo. Use a busca para encontrá-lo.');if(alterarMercado(()=>{mercado.catalogoExtra.push(nome)})){$('catalogo-novo').value='';$('busca-catalogo').value=nome;renderizarCatalogo()}});
function renderizarMercado(){
 const aberto=document.querySelector('.detalhes-item:not([hidden])')?.parentElement?.dataset.itemId;
 renderizarMercados();const lista=$('lista-itens');lista.replaceChildren();const itens=mercado.atual;
 $('progresso').textContent=`${itens.length} itens`;
 // Total previsto: soma de todos os itens selecionados com preço, mesmo antes de marcar como comprado.
 const total=itens.reduce((s,i)=>s+(typeof i.pago==='number'?valorLinha(i,'pago'):valorLinha(i,'previsto')),0);
 $('soma-prevista').textContent=moeda(total);
 $('soma-paga').textContent=moeda(totalCampo(itens.filter(i=>i.feito),'pago'));
 if(!itens.length)lista.append(criar('p','Marque os produtos na Lista do mês.','ajuda'));
 for(const item of itens){
  const div=criar('div',undefined,'item nota-item'+(item.feito?' feito':''));div.dataset.itemId=item.id;
  const cab=criar('div',undefined,'item-cabecalho');
  const check=document.createElement('input');check.type='checkbox';check.checked=!!item.feito;check.title='Já coloquei no carrinho';check.setAttribute('aria-label','Marcar '+item.nome+' como colocado no carrinho');
  check.onchange=()=>alterarMercado(()=>{if(!check.checked)atualizarHistoricoAutomatico(item,true);item.feito=check.checked;if(check.checked){item.supermercado=mercado.selecionado;item.dataCompra=hoje();atualizarHistoricoAutomatico(item)}else{item.supermercado=null;item.dataCompra=null}});
  const texto=criar('div',undefined,'item-texto');texto.append(criar('strong',item.nome));texto.append(criar('small',`${item.quantidade??1} ${item.unidade||'un'}${item.feito?' • '+(item.supermercado||''):''}`,'ajuda'));
  const precoExibir=typeof item.pago==='number'?valorLinha(item,'pago'):typeof item.previsto==='number'?valorLinha(item,'previsto'):null;
  const valor=criar('strong',precoExibir===null?'—':moeda(precoExibir),'item-total');
  const expandir=criar('button','Editar','abrir-detalhes');expandir.type='button';expandir.setAttribute('aria-label','Editar '+item.nome);
  const remover=criar('button','×','remover-direto');remover.type='button';remover.title='Remover da lista do mercado';remover.setAttribute('aria-label','Remover '+item.nome+' da lista do mercado');remover.onclick=()=>{if(confirm('Remover '+item.nome+' da lista do mercado? O produto continuará na Lista do mês.'))alterarMercado(()=>{mercado.atual=mercado.atual.filter(x=>x.id!==item.id)})};
  cab.append(check,texto,valor,expandir,remover);div.append(cab);
  const detalhes=criar('div',undefined,'detalhes-item');detalhes.hidden=aberto!==item.id;
  const toggle=()=>{detalhes.hidden=!detalhes.hidden;expandir.textContent=detalhes.hidden?'Editar':'Fechar'};
  if(!detalhes.hidden)expandir.textContent='Fechar';expandir.onclick=toggle;
  texto.onclick=toggle;valor.onclick=toggle;texto.style.cursor='pointer';valor.style.cursor='pointer';
  const grade=criar('div',undefined,'campos');
  const qlabel=criar('label','Quantidade');const qi=document.createElement('input');qi.type='number';qi.min='0.001';qi.step='any';qi.inputMode='decimal';qi.value=String(item.quantidade??1);qlabel.append(qi);
  const ulabel=criar('label','Unidade');const us=document.createElement('select');for(const [v,t] of [['un','unidade'],['kg','kg'],['g','grama'],['L','litro'],['ml','ml']]){const o=criar('option',t);o.value=v;us.append(o)}us.value=item.unidade||'un';ulabel.append(us);
  const plabel=criar('label',item.precoModo==='unitario'?'Preço por unidade (R$)':'Preço total (R$)');const pi=document.createElement('input');pi.type='number';pi.min='0';pi.step='0.01';pi.inputMode='decimal';pi.placeholder='Opcional';const precoAtual=typeof item.pago==='number'?item.pago:item.previsto;pi.value=precoAtual??'';plabel.append(pi);
  const preview=criar('div',undefined,'preview-total');const atualizarPreview=()=>{const q=Number(qi.value),p=pi.value===''?null:Number(pi.value);preview.textContent='Total: '+(p===null||!Number.isFinite(q)||!Number.isFinite(p)?'—':moeda((item.precoModo==='unitario'?q:1)*p))};
  // Salva ao digitar, sem reconstruir a tela e sem tirar o foco do teclado.
  const atualizar=()=>{
   atualizarPreview();
   if(salvarEdicaoAutomatica(item,qi,us,pi)){
    const valorAtual=typeof item.previsto==='number'?valorLinha(item,'previsto'):null;
    valor.textContent=valorAtual===null?'—':moeda(valorAtual);
    texto.querySelector('small').textContent=`${item.quantidade} ${item.unidade}${item.feito?' • '+(item.supermercado||''):''}`;
    $('soma-prevista').textContent=moeda(mercado.atual.reduce((s,i)=>s+(typeof i.pago==='number'?valorLinha(i,'pago'):valorLinha(i,'previsto')),0));
    // O histórico é redesenhado quando a edição termina (change/blur).
   }
  };
  qi.addEventListener('input',atualizar);pi.addEventListener('input',atualizar);us.addEventListener('change',atualizar);
  [qi,pi].forEach(c=>c.addEventListener('change',()=>{if(!salvarEdicaoAutomatica(item,qi,us,pi))alert('Confira a quantidade e o preço.');renderizarMercado()}));
  atualizarPreview();
  grade.append(qlabel,ulabel,plabel);detalhes.append(grade,preview);
  const acoes=criar('div',undefined,'botoes');
  const excluir=criar('button','Retirar da lista');excluir.type='button';excluir.onclick=()=>alterarMercado(()=>{mercado.atual=mercado.atual.filter(x=>x.id!==item.id)});
  acoes.append(excluir);detalhes.append(acoes);div.append(detalhes);lista.append(div)
 }
 const resumo=$('resumo-mercados');resumo.replaceChildren();const porMercado=new Map();
 for(const i of itens.filter(x=>x.feito)){const m=i.supermercado||'Não informado';const atual=porMercado.get(m)||{valor:0,temPreco:false};if(typeof i.pago==='number'||typeof i.previsto==='number'){atual.valor+=typeof i.pago==='number'?valorLinha(i,'pago'):valorLinha(i,'previsto');atual.temPreco=true}porMercado.set(m,atual)}
 for(const [m,v] of porMercado)resumo.append(criar('p',`${m}: ${v.temPreco?moeda(v.valor):'sem preços informados'}`,'ajuda'));
 const hist=$('historico-listas');hist.replaceChildren();
 const nomesMercados=[...new Set(mercado.historico.flatMap(h=>h.itens.filter(i=>i.feito).map(i=>i.supermercado||'Mercado não informado')))];
 if(mercado.historico.length){
  const ferramentas=criar('div',undefined,'historico-ferramentas');
  const apagarTodos=criar('button','Apagar todo o histórico','botao-perigo');apagarTodos.type='button';
  apagarTodos.onclick=()=>{if(confirm('Apagar TODO o histórico do supermercado? Esta ação não pode ser desfeita. Faça um backup antes.'))alterarMercado(()=>{mercado.historico=[]})};
  ferramentas.append(apagarTodos);
  if(nomesMercados.length){
   const seletor=document.createElement('select');seletor.setAttribute('aria-label','Supermercado para apagar do histórico');
   for(const nome of nomesMercados){const op=criar('option',nome);op.value=nome;seletor.append(op)}
   const apagarMercado=criar('button','Apagar histórico deste mercado','botao-perigo');apagarMercado.type='button';
   apagarMercado.onclick=()=>{const nome=seletor.value;if(confirm(`Apagar todas as compras de ${nome} do histórico? Os demais supermercados serão preservados.`))alterarMercado(()=>{for(const h of mercado.historico)h.itens=h.itens.filter(i=>!i.feito||(i.supermercado||'Mercado não informado')!==nome);mercado.historico=mercado.historico.filter(h=>h.itens.length)})};
   ferramentas.append(seletor,apagarMercado);
  }
  hist.append(ferramentas);
 }else hist.append(criar('p','Nenhuma compra arquivada.','ajuda'));
 for(const h of [...mercado.historico].reverse()){
  const grupos=new Map();
  for(const i of h.itens.filter(x=>x.feito)){
   const nome=i.supermercado||'Mercado não informado';
   if(!grupos.has(nome))grupos.set(nome,[]);
   grupos.get(nome).push(i);
  }
  if(!grupos.size)continue;
  const arquivo=criar('div',undefined,'historico-arquivo');
  arquivo.append(criar('div',`Compra de ${h.data.split('-').reverse().join('/')}`,'data-nota'));
  for(const [nome,itensMercado] of grupos){
   const nota=criar('div',undefined,'recibo-mercado');
   nota.append(criar('strong',nome,'recibo-nome'));
   const cab=criar('div',undefined,'recibo-linha recibo-cabecalho');cab.append(criar('span','Produto / unitário'),criar('span','Total'));nota.append(cab);
   let total=0,comPreco=false;
   for(const i of itensMercado){
    const preco=typeof i.pago==='number'?i.pago:i.previsto;
    const linha=criar('div',undefined,'recibo-linha');const descricao=criar('div');
    descricao.append(criar('strong',i.nome));
    const quantidade=`${i.quantidade??1} ${i.unidade||'un'}`;
    const unitario=typeof preco==='number'?(i.precoModo==='unitario'?preco:preco/(Number(i.quantidade)||1)):null;
    descricao.append(criar('small',`${quantidade} × ${unitario===null?'preço não informado':moeda(unitario)}`));
    const valor=criar('span',typeof preco==='number'?moeda(valorLinha(i,typeof i.pago==='number'?'pago':'previsto')):'—');
    linha.append(descricao,valor);nota.append(linha);
    if(typeof preco==='number'){total+=valorLinha(i,typeof i.pago==='number'?'pago':'previsto');comPreco=true}
   }
   const rodape=criar('div',undefined,'recibo-linha recibo-total');rodape.append(criar('strong','TOTAL'),criar('strong',comPreco?moeda(total):'Sem preços'));nota.append(rodape);
   arquivo.append(nota);
  }
  hist.append(arquivo);
 }
 renderizarCatalogo()
}
$('mercado-selecionado').onchange=e=>alterarMercado(()=>{mercado.selecionado=e.target.value});
$('form-mercado').onsubmit=e=>{e.preventDefault();const nome=$('mercado-novo').value.trim();if(!nome||nome.length>80)return alert('Digite o nome do mercado.');if(alterarMercado(()=>{const existente=mercado.mercados.find(m=>m.toLocaleLowerCase('pt-BR')===nome.toLocaleLowerCase('pt-BR'));if(!existente)mercado.mercados.push(nome);mercado.selecionado=existente||nome}))$('form-mercado').reset()};
function arquivar(){if(!mercado.atual.length)return;mercado.historico.push({id:idNovo(),data:hoje(),itens:structuredClone(mercado.atual)})}
$('finalizar').onclick=()=>{if(!mercado.atual.length)return alert('A lista já está vazia.');if(confirm('Limpar a Lista do mercado? Os produtos continuam na Lista do mês e as compras marcadas permanecem no histórico.'))alterarMercado(()=>{mercado.atual=[]})};
function mudarAba(mercadoAtivo){$('painel-gastos').hidden=mercadoAtivo;$('painel-mercado').hidden=!mercadoAtivo;$('aba-gastos').classList.toggle('ativa',!mercadoAtivo);$('aba-mercado').classList.toggle('ativa',mercadoAtivo)}
$('aba-gastos').onclick=()=>mudarAba(false);$('aba-mercado').onclick=()=>mudarAba(true);
$('exportar').onclick=()=>{const blob=new Blob([JSON.stringify({versao:7,compras,supermercado:mercado},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`minhas-compras-${hoje()}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
function compraValida(c){return c&&typeof c.id==='string'&&typeof c.produto==='string'&&c.produto.length<=120&&lojasFixas.includes(c.loja)&&typeof c.valor==='number'&&Number.isFinite(c.valor)&&c.valor>0&&typeof c.data==='string'&&/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(c.data)}
function itemValido(i){return i&&(i.quantidade===undefined||i.quantidade===null||typeof i.quantidade==='number'&&Number.isFinite(i.quantidade)&&i.quantidade>0)&&(i.precoModo===undefined||i.precoModo==='unitario'||i.precoModo==='total')&&(i.unidade===undefined||['kg','g','L','ml','un'].includes(i.unidade))&&(i.supermercado===undefined||i.supermercado===null||typeof i.supermercado==='string'&&i.supermercado.length<=80)&&(i.dataCompra===undefined||i.dataCompra===null||typeof i.dataCompra==='string'&&/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(i.dataCompra))&&typeof i.id==='string'&&typeof i.nome==='string'&&i.nome.length>0&&i.nome.length<=120&&typeof i.feito==='boolean'&&['previsto','pago'].every(k=>i[k]===null||typeof i[k]==='number'&&Number.isFinite(i[k])&&i[k]>=0&&i[k]<=100000000)}
function mercadoValido(m){return m&&(!m.catalogoExtra||Array.isArray(m.catalogoExtra)&&m.catalogoExtra.length<=1000&&m.catalogoExtra.every(x=>typeof x==='string'&&x.length>0&&x.length<=120))&&(!m.mercados||Array.isArray(m.mercados)&&m.mercados.every(x=>typeof x==='string'&&x.length<=80))&&(!m.selecionado||typeof m.selecionado==='string')&&Array.isArray(m.atual)&&m.atual.length<=10000&&m.atual.every(itemValido)&&Array.isArray(m.historico)&&m.historico.length<=10000&&m.historico.every(h=>h&&typeof h.id==='string'&&typeof h.data==='string'&&/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(h.data)&&Array.isArray(h.itens)&&h.itens.length<=10000&&h.itens.every(itemValido))}
$('importar').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>15000000)throw Error('Arquivo muito grande');const obj=JSON.parse(await file.text());if(!Array.isArray(obj.compras)||obj.compras.length>100000||!obj.compras.every(compraValida))throw Error('Compras inválidas');const novoMercado=obj.supermercado===undefined?null:obj.supermercado;if(novoMercado!==null&&!mercadoValido(novoMercado))throw Error('Lista de supermercado inválida');if(confirm('Substituir as compras atuais pelo backup? Faça uma exportação antes.')){const antCompras=localStorage.getItem(KEY),antMercado=localStorage.getItem(KEY_MERCADO);try{persistir(KEY,obj.compras);if(novoMercado!==null)persistir(KEY_MERCADO,novoMercado);compras=obj.compras;if(novoMercado!==null){mercado=novoMercado;if(!Array.isArray(mercado.mercados))mercado.mercados=[...MERCADOS_PADRAO];if(!Array.isArray(mercado.catalogoExtra))mercado.catalogoExtra=[];if(!mercado.selecionado)mercado.selecionado=mercado.mercados[0]||MERCADOS_PADRAO[0];}renderizarCompras();renderizarMercado();alert('Backup importado.')}catch(err){if(antCompras===null)localStorage.removeItem(KEY);else localStorage.setItem(KEY,antCompras);if(antMercado===null)localStorage.removeItem(KEY_MERCADO);else localStorage.setItem(KEY_MERCADO,antMercado);throw err}}}catch(err){alert('Não foi possível importar: '+err.message)}e.target.value=''};
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
renderizarCompras();renderizarMercado();


// Ponte entre a interface original e o Firestore.
window.aplicarNuvem=(tipo,valor)=>{
 if(tipo==='mercado'){if(!valor||!Array.isArray(valor.atual)||!Array.isArray(valor.historico))return;mercado=valor;renderizarMercado();}
 else if(tipo==='compras'){if(!Array.isArray(valor))return;compras=valor;renderizarCompras();}
};
