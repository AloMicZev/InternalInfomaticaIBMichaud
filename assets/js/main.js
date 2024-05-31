


//View login password
function viewPassword(){
    var x = document.getElementById("pwdinp1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


//Toggle menu animation

function menuBar(x) {
    //Toggle Menu Animation
    x.classList.toggle("change");
    //Show sidebar
    let y = document.querySelector("#mySidenav");
    y.classList.toggle("navbar-shown");
  }

// Select change

function disChange(){
    var d = document.getElementById("chName").value;
    changeTab(Event, d);
}
function changeTab(evt, chName){
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(chName).style.display = "block";
evt.currentTarget.className += " active";
}

(async function() {
    const data = [
      { mes: 1, count: 10 },
      { mes: 2, count: 20 },
      { mes: 3, count: 15 },
      { mes: 4, count: 25 },
      { mes: 5, count: 22 },
      { mes: 6, count: 30 },
      { mes: 7, count: 28 },
    ];
  
    new Chart(
      document.getElementById('chart'),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.mes),
          datasets: [
            {
              label: 'Monto Gastado por mes',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  })();
  (async function() {
    const data = [
      { mes: 1, count: 10 },
      { mes: 2, count: 20 },
      { mes: 3, count: 15 },
      { mes: 4, count: 25 },
      { mes: 5, count: 32 },
      { mes: 6, count: 30 },
      { mes: 7, count: 28 },
    ];
  
    new Chart(
      document.getElementById('chart2'),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.mes),
          datasets: [
            {
              label: 'Monto Gastado por mes',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  })();
  (async function() {
    const data = [
      { mes: 1, count: 10 },
      { mes: 2, count: 20 },
      { mes: 3, count: 35 },
      { mes: 4, count: 25 },
      { mes: 5, count: 22 },
      { mes: 6, count: 30 },
      { mes: 7, count: 8 },
    ];
    
  
    new Chart(
      document.getElementById('chart3'),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.mes),
          datasets: [
            {
              label: 'Monto Gastado por mes',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  })();
  (async function() {
    const dataj = [
        { mes: 1, count: 10 },
        { mes: 2, count: 20 },
        { mes: 3, count: 15 },
        { mes: 4, count: 25 },
        { mes: 5, count: 22 },
        { mes: 6, count: 30 },
        { mes: 7, count: 28 },
    ];
    const datai = [
        { mes: 1, count: 10 },
      { mes: 2, count: 20 },
      { mes: 3, count: 15 },
      { mes: 4, count: 25 },
      { mes: 5, count: 32 },
      { mes: 6, count: 30 },
      { mes: 7, count: 28 },
      ];
    const datag  = [
        { mes: 1, count: 10 },
        { mes: 2, count: 20 },
        { mes: 3, count: 35 },
        { mes: 4, count: 25 },
        { mes: 5, count: 22 },
        { mes: 6, count: 30 },
        { mes: 7, count: 8 },
      ];
    
  
    new Chart(
      document.getElementById('chartall'),
      {
        type: 'line',
        data: {
          labels: dataj.map(row => row.mes),
          datasets: [
            {
              label: 'Monto Gastado por mes(Juan)',
              data: dataj.map(row => row.count)
            },
            {
                label: 'Monto Gastado por mes(Italo)',
                data: datai.map(row => row.count)
            },
            {
                label: 'Monto Gastado por mes(Gonzalo)',
                data: datag.map(row => row.count)
            }
          ]
        }
      }
    );
  })();

  //Add Items
var sub = (0.00);
var itemstot = {};
//Select an Item
function itemSelect(x, nm, pr){
    x.disabled = true;
    x.classList.toggle('selected');
    const items = document.getElementById('items');
    const ne = document.createElement("li");
    ne.setAttribute('id', `item${nm}`)
    const row = document.createElement("div");
    row.setAttribute('class', 'row');
    const coltxt = document.createElement("div");
    coltxt.setAttribute('class', 'col-sm-4');
    const colcnt = document.createElement("div");
    colcnt.setAttribute('class', 'col-sm-8');
    const nde = document.createElement("h5");
    nde.setAttribute('class', 'pb-4')
    const node = document.createTextNode(nm);
    nde.appendChild(node);
    const span1 = document.createElement("span");
    span1.setAttribute('class', 'text-end');
    const btnrem = document.createElement("button")
    btnrem.setAttribute('onclick', `itemRemove("${nm}", ${pr}, 1)`);
    btnrem.setAttribute('class', 'btn btn-danger');
    const btnremi = document.createTextNode("-");
    btnrem.appendChild(btnremi);
    const cont = document.createElement("span");
    cont.setAttribute('id', `count${nm}`);
    cont.setAttribute('class', 'px-2')
    const btnadd = document.createElement("button")
    btnadd.setAttribute('onclick', `itemAdd("${nm}", ${pr}, 1)`);
    btnadd.setAttribute('class', 'btn btn-primary');
    const btnaddi = document.createTextNode("+");
    btnadd.appendChild(btnaddi);
    span1.appendChild(btnrem);
    span1.appendChild(cont);
    span1.appendChild(btnadd);
    row.appendChild(coltxt);
    coltxt.appendChild(nde);
    row.appendChild(colcnt);
    colcnt.appendChild(span1);
    ne.appendChild(row);
    items.appendChild(ne);
    itemstot[nm] = 1;
    const count = document.getElementById(`count${nm}`);
    count.innerHTML = itemstot[nm];
    calcsub(pr);
}
//Calcular subtotal
function calcsub(pr){
    sub += pr;
    const se = document.getElementById("st");
    se.innerHTML = (Math.round((sub + Number.EPSILON) * 100) / 100).toFixed(2);
    if (sub >= 0) {
        document.getElementById("submitPayement").disabled = false;
    }
}
//Contar Item
function countitem(nm, x){
    itemstot[nm] += x;
    const count = document.getElementById(`count${nm}`);
    count.innerHTML = itemstot[nm];
}
//Remover Item
function itemRemove(nm, pr, modifier){
    if ((itemstot[nm]-modifier) > 0) {
        countitem(nm, -modifier);
        calcsub(-pr*modifier)

    } else {
        const btn = document.getElementById(nm);
        const litem = document.getElementById(`item${nm}`);
        litem.remove();
        btn.disabled = false;
        btn.classList.toggle('selected');
        calcsub(-pr);
        if (sub <= 0) {
            document.getElementById("submitPayement").disabled = true;
        }
    }
}
//Añadir Item
function itemAdd(nm, pr, modifier){
    countitem(nm, modifier);
    calcsub(pr*modifier)
}
//Event Listener Radio Credito
document.body.addEventListener('change', function(e) {
    let target = e.target;
    let classroomSelector = document.getElementById("clrm");
    switch (target.id) {
        case 'efectivo':
            classroomSelector.classList.add("hidden");
            let tabcont = document.getElementsByClassName("tabcontent");
            for (let i = 0; i < tabcont.length; i++) {
                tabcont[i].style.display="none";
            }
            break;
        case 'credito':
            classroomSelector.classList.remove("hidden");
            document.getElementById("submitPayement").disabled = true;
            break;
        default:
            break;
    }
});
function clrmGet(){
    var d = document.getElementById("clrm").value;
    crlmShow(Event, d);
}
function crlmShow(evt, clrm){
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}
document.getElementById("studentInfo").classList.add("hidden");
// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(clrm).style.display = "block";
evt.currentTarget.className += " active";
}

function displayInfoStudent(studentSection){
    let classroomID = studentSection.parentNode.id;
    let studentName = studentSection.options[studentSection.selectedIndex].text;
    let studentNamePlace = document.getElementById("studentName");
    let studentClassroom = document.getElementById("studentClassroom");
    let display = document.getElementById("studentInfo");
    studentNamePlace.innerHTML = studentName;
    studentClassroom.innerHTML = classroomID.toUpperCase();
    display.classList.remove("hidden");
    if (sub > 0) {
        document.getElementById("submitPayement").disabled = false;
    }
}

function submitPayement(){
    Swal.fire({
        title: "Compra Realizada!",
        text: "Se ha pagado: S/." + sub,
        icon: "success"
      });
    console.log(Object.keys(itemstot)[0]);
    for (let i = 0; i < Object.keys(itemstot).length; i++) {
        key = Object.keys(itemstot)[i];
        itemRemove(key, sub, itemstot[key])
    }
      
}
(async function() {
    const data = [
      { mes: 1, count: 1300 },
      { mes: 2, count: 1250 },
      { mes: 3, count: 1000 },
      { mes: 4, count: 1500 },
      { mes: 5, count: 2600 },
      { mes: 6, count: 900 },
      { mes: 7, count: 1200 },
    ];
    
  
    new Chart(
      document.getElementById('chartSales'),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.mes),
          datasets: [
            {
              label: 'Ingresos por mes',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  })();
  (async function() {
    const data = [
      { mes: 1, count: 800 },
      { mes: 2, count: 450 },
      { mes: 3, count: 100 },
      { mes: 4, count: 1000 },
      { mes: 5, count: 2100 },
      { mes: 6, count: 600 },
      { mes: 7, count: 400 },
    ];
    
  
    new Chart(
      document.getElementById('chartProfit'),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.mes),
          datasets: [
            {
              label: 'Ingresos por mes',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  })();
  document.body.addEventListener('change', function(e) {
    let target = e.target;
    let income;
    let incomeShow = document.getElementById("income");
    switch (target.id) {
        case 'today':
            income = 150;
            incomeShow.innerHTML = income;
            break;
        case 'thisWeek':
            income = 750;
            incomeShow.innerHTML = income;
            break;
        case 'thisMonth':
            income = 3000;
            incomeShow.innerHTML = income;
            break;
        case 'total':
            income = 18000;
            incomeShow.innerHTML = income;
            break;
        default:
            break;
    }
});
let inventory = [
    {sku: 1, itemName: "Inka Chips", cost: 2, stock: 12, price: 4},
    {sku: 2, itemName: "Canchita", cost: 1.5, stock: 14, price: 1.5},
    {sku: 3, itemName: "Chifles", cost: 3, stock: 4, price: 3},
    {sku: 4, itemName: "Brownie", cost: 3.45, stock: 5, price: 5},
    {sku: 5, itemName: "Galleton", cost: 2, stock: 6, price: 5},
    {sku: 6, itemName: "Triangulo", cost: 0.5, stock: 8, price: 2.5},
    {sku: 7, itemName: "Hamburguesa", cost: 6, stock: 10, price: 8},
    {sku: 8, itemName: "Pan de queso", cost: 4, stock: 20, price: 6},
    {sku: 9, itemName: "Free Tea", cost: 2.5, stock: 23, price: 4},
    {sku: 10, itemName: "Coca Cola", cost: 2, stock: 18, price: 3},
    {sku: 11, itemName: "Inka Cola", cost: 2, stock: 18, price: 3},
    {sku: 12, itemName: "Sublime", cost: 0.20, stock: 19, price: 1.5},
    {sku: 13, itemName: "Tic Tac", cost: 0.20, stock: 12, price: 2},
    {sku: 1, itemName: "Inka Chips", cost: 2, stock: 12, price: 4},
    {sku: 2, itemName: "Canchita", cost: 1.5, stock: 14, price: 1.5},
    {sku: 3, itemName: "Chifles", cost: 3, stock: 4, price: 3},
    {sku: 4, itemName: "Brownie", cost: 3.45, stock: 5, price: 5},
    {sku: 5, itemName: "Galleton", cost: 2, stock: 6, price: 5},
    {sku: 6, itemName: "Triangulo", cost: 0.5, stock: 8, price: 2.5},
    {sku: 7, itemName: "Hamburguesa", cost: 6, stock: 10, price: 8},
    {sku: 8, itemName: "Pan de queso", cost: 4, stock: 20, price: 6},
    {sku: 9, itemName: "Free Tea", cost: 2.5, stock: 23, price: 4},
    {sku: 10, itemName: "Coca Cola", cost: 2, stock: 18, price: 3},
    {sku: 11, itemName: "Inka Cola", cost: 2, stock: 18, price: 3},
    {sku: 12, itemName: "Sublime", cost: 0.20, stock: 19, price: 1.5},
    {sku: 13, itemName: "Tic Tac", cost: 0.20, stock: 12, price: 2},
];

function loadInventory(){
    const tbody= document.getElementById("inventoryTable");
    for (let i = 0; i < Object.keys(inventory).length; i++) {
        const trGeneral = document.createElement('tr');
        trGeneral.setAttribute('id', i)
        trGeneral.classList.add('tableElements');
        const obj = Object.values(inventory)[i];
        const thSku = document.createElement('th');
        thSku.setAttribute('scope', 'row');
        const skuNode = document.createTextNode(obj.sku);
        thSku.appendChild(skuNode)
        const tdName = document.createElement('td');
        tdName.setAttribute('colspan', '4');
        const tdNameNode = document.createTextNode(obj.itemName);
        tdName.appendChild(tdNameNode);
        const tdCost = document.createElement('td');
        const tdCostNode = document.createTextNode("S/. "+ obj.cost.toFixed(2));
        tdCost.appendChild(tdCostNode);
        const tdStock = document.createElement('td');
        const tdStockNode = document.createTextNode(obj.stock);
        tdStock.appendChild(tdStockNode);
        const tdPrice = document.createElement('td');
        const tdPriceNode = document.createTextNode("S/. "+ obj.price.toFixed(2));
        tdPrice.appendChild(tdPriceNode);
        trGeneral.appendChild(thSku);
        trGeneral.appendChild(tdName);
        trGeneral.appendChild(tdCost);
        trGeneral.appendChild(tdStock);
        trGeneral.appendChild(tdPrice);
        tbody.appendChild(trGeneral);
    }
    for (let i = 0; i < Object.keys(inventory).length; i++) {
        const element = document.getElementById(i)
        if(checkVisible(element, 80, 'below')){
            element.classList.add('hidden');
            element.classList.add('nextpage')
        }
        
    }
}
function checkVisible(elm, threshold, mode) {
    threshold = threshold || 0;
    mode = mode || 'visible';
  
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var above = rect.bottom - threshold < 0;
    var below = rect.top - viewHeight + threshold >= 0;
  
    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}
let page = 1;
function nextPage(){
    page += 1;
    document.getElementById("buttonPrevPage").disabled = false;
    const tElements = document.getElementsByClassName('tableElements');
    const pElements = document.getElementsByClassName('nextpage');
    for (let i = 0; i < tElements.length; i++) {
        if (tElements[i].classList.contains('nextpage')) {
            console.log('pass')
            tElements[i].classList.remove('hidden');
            tElements[i].classList.remove('nextpage');
            for (let i = 0; i < Object.keys(inventory).length; i++) {
                const element = document.getElementById(i)
                if(checkVisible(element, 80, 'below')){
                    element.classList.add('hidden');
                    element.classList.add('nextpage')
                }
                
            }
        } else {
            tElements[i].classList.add('hidden');
            tElements[i].classList.add('prevpage');
        }
        
    }
    for (let i = 0; i < Object.keys(inventory).length; i++) {
        const element = document.getElementById(i)
        if(checkVisible(element, 80, 'below')){
            element.classList.add('hidden');
            element.classList.add('nextpage')
        }
        
    }
}
function prevPage(){
    page -= 1;
    if (page = 1) {
        document.getElementById("buttonPrevPage").disabled = true;
    }
    const tElements = document.getElementsByClassName('tableElements');
    const pElements = document.getElementsByClassName('nextpage');
    for (let i = 0; i < tElements.length; i++) {
        if (tElements[i].classList.contains('prevpage')) {
            console.log('pass')
            tElements[i].classList.remove('hidden');
            tElements[i].classList.remove('prevpage');
            for (let i = 0; i < Object.keys(inventory).length; i++) {
                const element = document.getElementById(i)
                if(checkVisible(element, 80, 'below')){
                    element.classList.add('hidden');
                    element.classList.add('nextpage');
                }
                
            }
        } else {
            tElements[i].classList.add('hidden');
            tElements[i].classList.add('nextpage');
            
        }
        
    }
}
function loadInventorySelect(){
    const genSelect = document.getElementById("invItem");
    for (let i = 0; i < Object.keys(inventory).length; i++) {
        const obj = Object.values(inventory)[i];
        const option = document.createElement('option')
        option.setAttribute('value', obj.sku);
        const optionText = document.createTextNode(obj.sku + " - " + obj.itemName);
        option.appendChild(optionText);
        genSelect.appendChild(option);

    }
}
function invChange(){
    var d = document.getElementById("invItem").value;
    const key = Object.keys(inventory).find(key => Object.values(inventory)[key].sku == d);
    const obj = Object.values(inventory)[key];
    document.getElementById("itemSku").appendChild(document.createTextNode(obj.sku));
    document.getElementById("itemName").setAttribute('value', obj.itemName);
    document.getElementById("itemCost").setAttribute('value', obj.cost);
    document.getElementById("itemStock").setAttribute('value', obj.stock);
    document.getElementById("itemPrice").setAttribute('value', obj.price);
}
const form = document.getElementById('updateInventoryForm');
form.addEventListener('submit', function(event) {
    var d = document.getElementById("invItem").value;
    if (d != null) {
        const key = Object.keys(inventory).find(key => Object.values(inventory)[key].sku == d);
        const obj = Object.values(inventory)[key];
        obj.itemName = form.elements.itemName.value;
        obj.cost = form.elements.itemCost.value;
        obj.stock = form.elements.itemStock.value;
        obj.price = form.elements.itemStock.value;
    }else{
        Object.assign(inventory, {sku: Object.keys(inventory).length + 2, 
            itemName: form.elements.itemName.value, 
            cost: form.elements.itemCost.value,
            stock: form.elements.itemStock.value,
            price: form.elements.itemStock.value
        })
    }
    
    event.preventDefault();
    window.location.replace("inventory.html");
});
document.body.addEventListener('change', function(e) {
    let target = e.target;
    let select = document.getElementById("invItem");
    switch (target.id) {
        case 'add':
            select.classList.add("hidden");
            break;
        case 'modify':
            select.classList.remove("hidden");
            break;
        default:
            break;
    }
});
function clrmGetShow(){
    var d = document.getElementById("clrmShow").value;
    changeTab(Event, d);
}
function changeTab(evt, chName){
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(chName).style.display = "block";
evt.currentTarget.className += " active";
}
function accDelete(id){
    let accountCard = document.getElementById(id);
    accountCard.classList.add('hidden');
}
//Login Redirect
