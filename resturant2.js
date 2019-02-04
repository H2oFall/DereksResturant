var itemone ;
var itemoneinfo ;
var itemonecost ;
var itemonesubcost = 0;

var itemtwo ;
var itemtwoinfo ;
var itemtwocost ;
var itemtwosubcost = 0;

var itemthree ;
var itemthreeinfo ;
var itemthreecost ;
var itemthreesubcost = 0;

var itemfour ;
var itemfourinfo ;
var itemfourcost ;
var itemfoursubcost = 0;

var itemfive ;
var itemfiveinfo ;
var itemfivecost ;
var itemfivesubcost = 0;

var itemsix ;
var itemsixinfo ;
var itemsixcost ;
var itemsixsubcost = 0;

var itemgrandtotal ;
var itemGrandsubcost = [];

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var menudata = JSON.parse(this.responseText);
    itemone = menudata.menuItems[0].tacotacoburrito.name
    itemoneinfo = menudata.menuItems[0].tacotacoburrito.description
    itemonecost = menudata.menuItems[0].tacotacoburrito.price

    itemtwo = menudata.menuItems[0].peach.name
    itemtwoinfo = menudata.menuItems[0].peach.description
    itemtwocost = menudata.menuItems[0].peach.price

    itemthree = menudata.menuItems[0].mashedpotatoes.name
    itemthreeinfo = menudata.menuItems[0].mashedpotatoes.description
    itemthreecost = menudata.menuItems[0].mashedpotatoes.price

    itemfour = menudata.menuItems[0].spaghetti.name
    itemfourinfo = menudata.menuItems[0].spaghetti.description
    itemfourcost = menudata.menuItems[0].spaghetti.price

    itemfive = menudata.menuItems[0].ramen.name
    itemfiveinfo = menudata.menuItems[0].ramen.description
    itemfivecost = menudata.menuItems[0].ramen.price

    itemsix = menudata.menuItems[0].stringcheese.name
    itemsixinfo = menudata.menuItems[0].stringcheese.description
    itemsixcost = menudata.menuItems[0].stringcheese.price

    document.getElementById('itemone').innerHTML = itemone;
    document.getElementById('itemoneinfo').innerHTML = itemoneinfo;
    document.getElementById('itemonecost').innerHTML = itemonecost;

    document.getElementById('itemtwo').innerHTML = itemtwo;
    document.getElementById('itemtwoinfo').innerHTML = itemtwoinfo;
    document.getElementById('itemtwocost').innerHTML = itemtwocost;
    
    document.getElementById('itemthree').innerHTML = itemthree;
    document.getElementById('itemthreeinfo').innerHTML = itemthreeinfo;
    document.getElementById('itemthreecost').innerHTML = itemthreecost;
    
    document.getElementById('itemfour').innerHTML = itemfour;
    document.getElementById('itemfourinfo').innerHTML = itemfourinfo;
    document.getElementById('itemfourcost').innerHTML = itemfourcost;
    
    document.getElementById('itemfive').innerHTML = itemfive;
    document.getElementById('itemfiveinfo').innerHTML = itemfiveinfo;
    document.getElementById('itemfivecost').innerHTML = itemfivecost;
    
    document.getElementById('itemsix').innerHTML = itemsix;
    document.getElementById('itemsixinfo').innerHTML = itemsixinfo;
    document.getElementById('itemsixcost').innerHTML = itemsixcost;
  }
};
xmlhttp.open("GET", "Itemlist2.json", true);
xmlhttp.send();

function addamountitem1() {
   itemonesubcost = document.getElementById('itemoneamount').value * itemonecost;

   const lilist = document.createElement('li'); 
   const textlist = document.createTextNode(itemone + " * " + document.getElementById('itemoneamount').value +" = $"+ itemonesubcost.toFixed(2));
   lilist.appendChild(textlist); 
   const totallog = document.getElementById('list'); 
   totallog.appendChild(lilist); 
   itemGrandsubcost.push(itemonesubcost);
  itemgrandtotal = itemGrandsubcost.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandtotal').innerHTML = "Your Current subtotal: $" + itemgrandtotal.toFixed(2);
  document.getElementById('itemoneamount').innerHTML = "";
}

function addamountitem2() {
  itemtwosubcost = document.getElementById('itemtwoamount').value * itemtwocost;

  const lilist = document.createElement('li'); 
  const textlist = document.createTextNode(itemtwo + " * " + document.getElementById('itemtwoamount').value +" = $"+ itemtwosubcost.toFixed(2));
  lilist.appendChild(textlist); 
  const totallog = document.getElementById('list'); 
  totallog.appendChild(lilist); 
  itemGrandsubcost.push(itemtwosubcost);
  itemgrandtotal = itemGrandsubcost.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandtotal').innerHTML = "Your Current subcost: $" + itemgrandtotal.toFixed(2);
  document.getElementById('itemtwoamount').innerHTML = "";
}

function addamountitem3() {
  itemthreesubcost = document.getElementById('itemthreeamount').value * itemthreecost;

  const lilist = document.createElement('li'); 
  const textlist = document.createTextNode(itemthree + " * " + document.getElementById('itemthreeamount').value +" = $"+ itemthreesubcost.toFixed(2));
  lilist.appendChild(textlist); 
  const totallog = document.getElementById('list'); 
  totallog.appendChild(lilist); 
  itemGrandsubcost.push(itemthreesubcost);
  itemgrandtotal = itemGrandsubcost.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandtotal').innerHTML = "Your Current subcost: $" + itemgrandtotal.toFixed(2);
  document.getElementById('itemthreeamount').innerHTML = "";
}

function addamountitem4() {
  itemfoursubcost = document.getElementById('itemfouramount').value * itemfourcost;

  const lilist = document.createElement('li'); 
  const textlist = document.createTextNode(itemfour + " * " + document.getElementById('itemfouramount').value +" = $"+ itemfoursubcost.toFixed(2));
  lilist.appendChild(textlist); 
  const totallog = document.getElementById('list'); 
  totallog.appendChild(lilist); 
  itemGrandsubcost.push(itemfoursubcost);
  itemgrandtotal = itemGrandsubcost.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandtotal').innerHTML = "Your Current subcost: $" + itemgrandtotal.toFixed(2);
  document.getElementById('itemfouramount').innerHTML = "";
}

function addamountitem5() {
  itemfivesubcost = document.getElementById('itemfiveamount').value * itemfivecost;

  const lilist = document.createElement('li'); 
  const textlist = document.createTextNode(itemfive + " * " + document.getElementById('itemfiveamount').value +" = $"+ itemfivesubcost.toFixed(2));
  lilist.appendChild(textlist); 
  const totallog = document.getElementById('list'); 
  totallog.appendChild(lilist); 
  itemGrandsubcost.push(itemfivesubcost);
  itemgrandtotal = itemGrandsubcost.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandtotal').innerHTML = "Your Current subcost: $" + itemgrandtotal.toFixed(2);
  document.getElementById('itemfiveamount').innerHTML = "";
}

function addamountitem6() {
  itemsixsubcost = document.getElementById('itemsixamount').value * itemsixcost;

  const lilist = document.createElement('li'); 
  const textlist = document.createTextNode(itemsix + " * " + document.getElementById('itemsixamount').value +" = $"+ itemsixsubcost.toFixed(2));
  lilist.appendChild(textlist); 
  const totallog = document.getElementById('list'); 
  totallog.appendChild(lilist); 
  itemGrandsubcost.push(itemsixsubcost);
  itemgrandtotal = itemGrandsubcost.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  document.getElementById('grandtotal').innerHTML = "Your Current subcost: $" + itemgrandtotal.toFixed(2);
  document.getElementById('itemsixamount').innerHTML = "";
}
function checkout() {
    if (!itemgrandtotal) {
        stop()
    } else {
        var itemTally = document.getElementById('list').innerText;
        localStorage.setItem('totalItemSum', itemgrandtotal);
        localStorage.setItem('totalItemTally', itemTally)
        location.href = "final.html"; 
    }

}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }