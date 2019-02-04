var itemOneName ;
var itemOneInfo ;
var itemOnePrice ;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var menudata = JSON.parse(this.responseText);
    console.log("Updating JSON Values");
    itemOneName = menudata.menuItems[0].salmonBurger.name
    itemOneInfo = menudata.menuItems[0].salmonBurger.description
    itemOnePrice = menudata.menuItems[0].salmonBurger.price

    document.getElementById('itemOneName').innerHTML = itemOneName;
    document.getElementById('itemOneInfo').innerHTML = itemOneInfo;
    document.getElementById('itemOnePrice').innerHTML = itemOnePrice;

    console.log("JSON values updated");
  }
};
xmlhttp.open("GET", "Itemlist.json", true);
xmlhttp.send();

      
      function addamountitem1() {
        ItemOneSubTotal = document.getElementById('itemoneamount').value * itemOnePrice;
   console.log(ItemOneSubTotal);
   var liTotal = document.createElement('li');
   var textLog = document.createTextNode(itemOneName + " x " + document.getElementById('itemoneamount').value +" = $"+ ItemOneSubTotal); 
   liTotal.appendChild(textLog); 
   var amountLog = document.getElementById('List'); 
   amountLog.appendChild(liTotal); 
  document.getElementById("myDropdown").classList.toggle("show");
  
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
