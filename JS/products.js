//TE LA COMPLICASTE DEMASIADO, POR ESO NO FUNCIONA BIEN
//TE SEPARÉ CODIGO Y TE HICE HACER ANDAR UN CARRITO EN LA CONSOLA
//FIJATE SE RENDERIZAR ESO EN TU PROYECTO

//LAS FUNCIONES QUE NO USES
//ELIMINALAS O COMENTALAS, EN ESTE EJEMPLO: TE LAS BORRO
//PD TE MEJORE LA IDENTACION/TABULACION DE TU CODIGO (TENELO EN CUENTA PARA LA PROXIMA!)

function Producto(id,nombre, precio, stock, image, tipo, celiaco, categoria) {
  this.id = id, //super importante el id!!! vamos a filtrar siempre por id
  this.nombre = nombre
  this.precio = precio
  this.stock = stock
  this.image = image
  this.tipo = tipo
  this.celiaco = celiaco
  this.categoria = categoria
}

const productoA = new Producto("id1", "3-D", 220, 10, "Multimedia/3d.jpg", "salado", "noCeliaco", "snacks")
const productoB = new Producto("id2", "9 de oro - Agridulce", 120, 15, "Multimedia/9deoroazucarada.jpg", "dulce", "noCeliaco", "galletitas")
const productoC = new Producto("id3", "9 de oro - Azucarada", 120, 15, 'Multimedia/9deoroagridulces.jpg', "dulce", "noCeliaco", "galletitas")
const productoD = new Producto("id4", "9 de oro - Clasica", 120, 15, 'Multimedia/9deoroclasica.jpg', "salado", "noCeliaco", "galletitas")
const productoE = new Producto("id5", "Aguila Brownie", 145, 20, "Multimedia/aguilabrownie.jpg", "dulce", "noCeliaco", "alfajores")
const productoF = new Producto("id6", "Aguila Clasico", 145, 20,"Multimedia/AGUILACLASICO.png", "dulce", "noCeliaco", "alfajores")
const productoG = new Producto("id7", "Alfajor Bon o Bon", 145, 20,"Multimedia/alfajorbonobon.jpg", "dulce", "noCeliaco", "alfajores")
const productoH = new Producto("id8", "Alfajor Oreo", 145, 20,"Multimedia/alfajororeo.jpg", "dulce", "noCeliaco", "alfajores")
const productoI = new Producto("id9", "Alfajor Pepitos", 145, 20,"Multimedia/alfajorpepito.png", "dulce", "noCeliaco", "alfajores")
const productoJ = new Producto("id10", "Caramelos Alka", 2, 50,"Multimedia/alka.jpeg", "dulce", "celiaco", "caramelos")
const productoK = new Producto("id11", "Arcor Chocolate y menta", 7, 50, "Multimedia/arcorchocolateymenta.jpg", "dulce", "celiaco", "caramelos")
const productoL = new Producto("id12", "Arcor de miel", 7, 50, "Multimedia/arcordemiel.jpg", "dulce", "celiaco", "caramelos")
const productoM = new Producto("id13", "Bagley 3.0 Blanco", 145, 20, "Multimedia/bagleyblanco.png", "dulce", "noCeliaco", "alfajores")
const productoN = new Producto("id14", "Bagley 3.0 Negro", 145, 20, "Multimedia/bagleynegro.jpg", "dulce", "noCeliaco", "alfajores")
const productoO = new Producto("id15", "Bazooka Banana", 8, 50, "Multimedia/bazookabanana.jpg", "dulce", "celiaco", "chicles")
const productoP = new Producto("id16", "Bazooka Menta", 8, 50,"Multimedia/bazookamenta.png", "dulce", "celiaco", "chicles")
const productoQ = new Producto("id17", "Bazooka Tutti Frutti", 8, 50,"Multimedia/bazookatuttifuttie.jpg", "dulce", "celiaco", "chicles")
const productoR = new Producto("id18", "Beldent", 70, 30,"Multimedia/beldent.jpg", "dulce", "celiaco", "chicles")
const productoS = new Producto("id19", "Beldent Infinit", 130, 30,"Multimedia/beldentinfinite.jpg", "dulce", "celiaco", "chicles")
const productoT = new Producto("id20", "Billiken Yogur", 4, 50,"Multimedia/billikenyogur.jpg", "dulce", "celiaco", "caramelos")
const productoU = new Producto("id21", "Block", 120, 15, "Multimedia/block.jpg", "dulce", "noCeliaco", "chocolates")
const productoV = new Producto("id22", "Block 300", 1200, 10, "Multimedia/block300.jpg", "dulce", "celiaco", "chocolates")
const productoW = new Producto("id23", "Blockazo", 3000, 5, "Multimedia/blockaso.jpg", "dulce", "celiaco", "chocolates")
const productoX = new Producto("id24", "Bon o Bon", 50, 30, "Multimedia/bonobon.webp", "dulce", "noCeliaco", "bombones")
const productoY = new Producto("id25", "Bon o Bon Blanco", 50, 30, "Multimedia/bonobonblanco.png", "dulce", "noCeliaco", "bombones")
const productoZ = new Producto("id26", "Boobaloo Menta", 10, 40,"Multimedia/boobaloomenta.png", "dulce", "celiaco", "chicles")
const productoAA = new Producto("id27", "Boobaloo Tutti Frutti", 7, 40,"Multimedia/boobalootuttifuttie.webp", "dulce", "celiaco", "chicles")
const productoAB = new Producto("id28", "Butter Toffee Cafe", 7, 40,"Multimedia/buttertoffiecafe.jpg", "dulce", "celiaco", "caramelos")
const productoAC = new Producto("id29", "Butter Toffee Bon o Bon", 7, 40,"Multimedia/buttertoffiebonobon.jpg", "dulce", "celiaco", "caramelos")
const productoAD = new Producto("id30", "Butter Toffee Chocolate", 7, 40,"Multimedia/buttertoffiechocolate.jpg", "dulce", "celiaco", "caramelos")
const productoAE = new Producto("id31", "Butter Toffee Chocolate Aguila", 7, 40, "Multimedia/buttertoffiechocolateaguila.jpg", "dulce", "celiaco", "caramelos")
const productoAF = new Producto("id32", "Butter Toffee Chocolate Blanco", 7, 40, "Multimedia/buttertoffiechocolateblanco.jpg", "dulce", "celiaco", "caramelos")
const productoAG = new Producto("id33", "Butter Toffee Dulce de leche", 7, 40, "Multimedia/buttertoffiedulcedeleche.jpg", "dulce", "celiaco", "caramelos")
const productoAH = new Producto("id34", "Butter Toffee Leche", 7, 40, "Multimedia/buttertoffieleche.jpg", "dulce", "celiaco", "caramelos")
const productoAI = new Producto("id35", "Butter Toffee Menta", 7, 40, "Multimedia/buttertoffiementa.jpg", "dulce", "celiaco", "caramelos")
const productoAJ = new Producto("id36", "Bocadito Cabsha", 60, 30,"Multimedia/cabsha.jpg", "dulce", "noCeliaco", "bombones")
const productoAK = new Producto("id37", "Cadbury Tres Sueños", 170, 10,"Multimedia/cadburytressuenos.webp", "dulce", "noCeliaco", "chocolates")
const productoAL = new Producto("id38", "Cadbury Yogurt Frutilla", 170, 10,"Multimedia/cadbyrydefrutilla.jpg", "dulce", "noCeliaco", "chocolates")
const productoAM = new Producto("id39", "CerealFort", 95, 30,"Multimedia/cerealfort.jpg", "dietetico", "noCeliaco", "barritas")
const productoAN = new Producto("id40", "CerealMix", 90, 30,"Multimedia/cerealmix.webp", "dietetico", "noCeliaco", "barritas")
const productoAO = new Producto("id41", "Chettos", 150, 10,"Multimedia/chettos.png", "salado", "noCeliaco", "snacks")
const productoAP = new Producto("id42", "Chocolinas", 145, 10,"Multimedia/chocolinas.webp", "dulce", "noCeliaco", "galletitas")
const productoAQ = new Producto("id43", "ChupaChups", 30, 15,"Multimedia/chupachups.jpg", "dulce", "celiaco", "chupetines")
const productoAR = new Producto("id44", "Cofler Aireado Almendras", 220, 10,"Multimedia/cofleraireadoalmendras.jpg", "dulce", "noCeliaco", "chocolates")
const productoAS = new Producto("id45", "Cofler Aireado Blanco", 220, 10, "Multimedia/cofleraireadoblanco.png", "dulce", "celiaco", "chocolates")
const productoAT = new Producto("id46", "Cofler Aireado Leche", 220, 10, "Multimedia/cofleraireadoleche.png", "dulce", "celiaco", "chocolates")
const productoAU = new Producto("id47", "Criollitas", 170, 10, "Multimedia/criollitas.webp", "salado", "noCeliaco", "galletitas")
const productoAV = new Producto("id48", "Don Satur Dulces", 120, 20, "Multimedia/donsaturdulces.png", "dulce", "noCeliaco", "galletitas")
const productoAW = new Producto("id49", "Don Satur Saladas", 120, 20, "Multimedia/donsatursaladas.png", "noCeliaco", "galletitas")
const productoAX = new Producto("id50", "Doritos", 160, 10,"Multimedia/doritos.jpg", "salado", "noCeliaco", "snacks")
const productoAY = new Producto("id51", "Dos Corazones", 80, 20,"Multimedia/doscorazones.jpg", "dulce", "celiaco", "bombones")
const productoAZ = new Producto("id52", "Fantoche Blanco", 100, 30,"Multimedia/fantocheblanco.png", "dulce", "noCeliaco", "alfajores")
const productoBA = new Producto("id53", "Fantoche Negro", 100, 30,"Multimedia/fantochenegro.webp", "dulce", "noCeliaco", "alfajores")
const productoBC = new Producto("id54", "Ferrero Rocher", 50, 30,"Multimedia/ferrerorosher.webp", "dulce", "noCeliaco", "bombones")
const productoBD = new Producto("id55", "Flics Menta", 45, 20,"Multimedia/flicsmenta.png", "dulce", "celiaco", "chicles")
const productoBE = new Producto("id56", "Flics Tutti Frutti", 45, 20,"Multimedia/flicstuttifrutti.webp", "dulce", "celiaco", "chicles")
const productoBF = new Producto("id57", "Flow Cereal", 90, 15,"Multimedia/flowcereal.webp", "dietetico", "noCeliaco", "barritas")
const productoBG = new Producto("id58", "Flynn-Paff", 10, 30, "Multimedia/flynnpaff.webp", "dulce", "celiaco", "caramelos")
const productoBH = new Producto("id59", "Full Mani", 200, 20, "Multimedia/fullmani.jpg", "dulce", "noCeliaco", "chocolates")
const productoBI = new Producto("i60", "Guaymallen Blanco", 80, 30, "Multimedia/guaymallenblanco.png", "dulce", "noCeliaco", "alfajores")
const productoBJ = new Producto("id61", "Guaymallen Membrillo", 80, 30, "Multimedia/guaymallenmembrillo.webp", "dulce", "noCeliaco", "alfajores")
const productoBK = new Producto("id62", "Guaymallen Negro", 80, 30, "Multimedia/guaymallennegro.png", "dulce", "noCeliaco", "alfajores")
const productoBL = new Producto("id63", "Lays", 160, 10,"Multimedia/lays.jpg", "salado", "noCeliaco", "snacks")
const productoBM = new Producto("id64", "Marroc", 50, 20,"Multimedia/marroc.jpg", "dulce", "noCeliaco", "bombones")
const productoBN = new Producto("id65", "Mellizas", 135, 15,"Multimedia/mellizas.webp", "dulce", "noCeliaco", "galletitas")
const productoBO = new Producto("id66", "Menta Cristal", 6, 50,"Multimedia/mentacristal.png", "dulce", "celiaco", "caramelos")
const productoBP = new Producto("id67", "Menta Cristal Fresh", 6, 50,"Multimedia/mentacristalfresh.webp", "dulce", "celiaco", "caramelos")
const productoBQ = new Producto("id68", "Merengadas", 140, 30, "Multimedia/merengadas.jpg", "dulce", "noCeliaco", "galletitas")
const productoBR = new Producto("id69", "Misky Masticables", 3, 50, "Multimedia/mickymasticables.jpg", "dulce", "celiaco", "caramelos")
const productoBS = new Producto("id70", "Misky Eucalipto", 5, 100, "Multimedia/miskyeucalipto.png", "dulce", "celiaco", "gomitas")
const productoBT = new Producto("id71", "Misky Fantasia", 3, 100, "Multimedia/miskyfantasia.jpg", "dulce", "celiaco", "gomitas")
const productoBU = new Producto("id72", "Misky Jelly Roll", 4, 100, "Multimedia/miskyjellyroll.jpg", "dulce", "celiaco", "gomitas")
const productoBV = new Producto("id73", "MisterPop Evolution", 25, 20,"Multimedia/misterpopevolution.webp", "dulce", "celiaco", "chupetines")
const productoBW = new Producto("id74", "MisterPop Frutal", 12, 50,"Multimedia/misterpopsfrutal.webp", "dulce", "celiaco", "chupetines")
const productoBX = new Producto("id75", "Mogul Ositos", 50, 20,"Multimedia/mogulositos.webp", "dulce", "celiaco", "gomitas")
const productoBY = new Producto("id76", "Oreo", 140, 15,"Multimedia/oreo.jpg", "dulce", "noCeliaco", "galletitas")
const productoBZ = new Producto("id77", "Palitos de la selva", 8, 40,"Multimedia/palitosdelaselva.jpg", "dulce", "celiaco", "caramelos")
const productoCA = new Producto("id78", "Pepas Terepin", 180, 15, "Multimedia/pepasterepin.jpg", "dulce", "noCeliaco", "galletitas")
const productoCB = new Producto("id79", "Pepitos", 150, 15, "Multimedia/pepitos.jpg", "dulce", "noCeliaco", "galletitas")
const productoCC = new Producto("id80", "Picodulce", 18, 30, "Multimedia/picodulce.jpg", "dulce", "celiaco", "chupetines")
const productoCD = new Producto("id81", "Rhodesia", 80, 20, "Multimedia/rodesia.jpg", "dulce", "noCeliaco", "barritas")
const productoCE = new Producto("id82", "Rumba", 135, 20, "Multimedia/rumba.webp", "dulce", "noCeliaco", "galletitas")
const productoCF = new Producto("id83", "Saladix Cross", 120, 15,"Multimedia/saladixcross.png", "noCeliaco", "snacks")
const productoCG = new Producto("id84", "Saladix Hula Hula", 120, 15,"Multimedia/saladixhulahula.gif", "salado", "noCeliaco", "snacks")
const productoCH = new Producto("id85", "Saladix Jamon", 120, 15,"Multimedia/saladixjamon.webp", "salado", "noCeliaco", "snacks")
const productoCI = new Producto("id86", "Saladix Pizza", 120, 15,"Multimedia/saladixpizza.webp", "salado", "noCeliaco", "snacks")
const productoCJ = new Producto("id87", "Serranas", 160, 10,"Multimedia/serranas.webp", "salado", "noCeliaco", "galletitas")
const productoCK = new Producto("id88", "Shot", 90, 15, "Multimedia/shot.webp", "dulce", "noCeliaco", "chocolates")
const productoCL = new Producto("id89", "Sonrisas", 120, 15, "Multimedia/sonrisas.webp", "dulce", "noCeliaco", "galletitas")
const productoCM = new Producto("id90", "Sugus", 4, 50, "Multimedia/sugus.jpg", "dulce", "celiaco", "caramelos")
const productoCN = new Producto("id91", "Surtido Bagley", 240, 10, "Multimedia/surtidobagley.webp", "dulce", "noCeliaco", "galletitas")
const productoCO = new Producto("id92", "Surtido Diversion", 230, 10, "Multimedia/surtidodiversion.jpg", "dulce", "noCeliaco", "galletitas")
const productoCP = new Producto("id93", "Surtido Terrabusi", 230, 10,"Multimedia/surtidoterrabusi.webp", "dulce", "noCeliaco", "galletitas")
const productoCQ = new Producto("id94", "Terrabusi Dulce de leche", 145, 20,"Multimedia/terrabusidulcedeleche.webp", "dulce", "noCeliaco", "alfajores")
const productoCR = new Producto("id95", "Tita", 80, 30,"Multimedia/tita.png", "dulce", "noCeliaco", "barritas")
const productoCS = new Producto("id96", "Toblerone", 180, 10,"Multimedia/toblerone.webp", "dulce", "noCeliaco", "chocolates")
const productoCT = new Producto("id97", "Tofi Blanco", 145, 10,"Multimedia/tofiblanco.jpg", "dulce", "noCeliaco", "alfajores")
const productoCU = new Producto("id98", "Tofi Negro", 145, 10, "Multimedia/tofinegro.jpg", "dulce", "noCeliaco", "alfajores")
const productoCV = new Producto("id99", "TopLine", 50, 20, "Multimedia/topline.jpg", "dulce", "celiaco", "chicles")
const productoCW = new Producto("id100", "TopLine Seven", 120, 10, "Multimedia/toplineseven.png", "dulce", "celiaco", "chicles")
const productoCX = new Producto("id101", "Traviata", 160, 10, "Multimedia/traviata.jpg", "salado", "noCeliaco", "galletitas")
const productoCY = new Producto("id102", "Tri-Shot", 145, 10, "Multimedia/trishot.jpg", "dulce", "noCeliaco", "alfajores")
const productoCZ = new Producto("id103", "Yummy Surtido", 45, 30,"Multimedia/yummysurtido.webp", "dulce", "celiaco", "gomitas")

let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG, productoH, productoI, productoJ, productoK, productoL, productoM, productoN, productoO, productoP, productoQ, productoR, productoS, productoT, productoU, productoV , productoW, productoX, productoY, productoZ, productoAA, productoAB, productoAC, productoAD, productoAE, productoAF, productoAG, productoAH, productoAI, productoAJ, productoAK, productoAL, productoAM, productoAN, productoAO, productoAP, productoAK, productoAR, productoAS, productoAT,productoAU, productoAV, productoAW, productoAX, productoAY, productoAZ, productoBA, productoBC, productoBD,productoBE, productoBF, productoBG, productoBH, productoBI, productoBJ, productoBK, productoBL, productoBM, productoBN,productoBO, productoBP, productoBK, productoBR, productoBS, productoBT, productoBU, productoBV, productoBW, productoBX,productoBY, productoBZ, productoCA, productoCB, productoCC, productoCD, productoCE, productoCF, productoCG, productoCH,productoCI, productoCJ, productoCK, productoCL, productoCM, productoCN, productoAG, productoCO, productoCP, productoCQ,productoCR, productoCS, productoCT, productoCU, productoCV, productoCW, productoCX, productoCY, productoCZ]

let catalogoProductos = document.getElementById('catalogoProductos'); //a este id agregale las propiedades flex correspondientes para que quede bien organizado los productos