
//make array of different products, which has them as objects and its properties include the image to populate and the name of the product

var chocolateItems = [
  {
      img: "../starter-code/images/chocolate/ferrero.jpg",
      name: "Ferrero"
  },
  { 
      img: "../starter-code/images/chocolate/hersheys.jpeg",
      name: "Hershey's"
  },
  {
      img: "../starter-code/images/chocolate/japanese-kit-kat.jpg",
      name: "Kit-Kat"
  },
  {
      img: "../starter-code/images/chocolate/mms.jpeg",
      name: "M&M's"
  },
  {
      img: "../starter-code/images/chocolate/snickers.jpg",
      name: "Snickers"
  }
]

var sourCandy = [
  {
      img: "../starter-code/images/sour/gummy-worms.jpg",
      name: "Gummy Worms"
  },
  {
      img: "../starter-code/images/sour/hi-chew.jpeg",
      name: "Hi-Chew",
  },
  {
      img: "../starter-code/images/sour/skittles.png",
      name: "Skittles"
  },
  {
      img: "../starter-code/images/sour/sour-patch.jpeg",
      name: "Sour patch"
  },
  {
      img: "../starter-code/images/sour/warheads.png",
      name: "Warheads"
  }
]

var mexCandy = [
  {
      img: "../starter-code/images/mexican-candy/duvalin.jpg",
      name: "Duvalin"
  },
  {
      img: "../starter-code/images/mexican-candy/lucas.jpeg",
      name: "Mango Lucas"
  },
  {
      img: "../starter-code/images/mexican-candy/mango-pop.jpg",
      name: "Mango Lollipop"
  },
  {
      img: "../starter-code/images/mexican-candy/mazapan.jpg",
      name: "Mazapan"
  },
  {
      img: "../starter-code/images/mexican-candy/pulparindo.jpeg",
      name: "Pulparindo"
  }
]

//creates a click where 

$('#chocolate').click(function() {
  addShoppingItems('chocolate');
});

$('#sour-candy').click(function() {
  addShoppingItems('sour-candy');
});

$('#mex-candy').click(function() {
  addShoppingItems('mex-candy');
});


$('#item-list').on('click', '.shopping-item', function() {
  var itemName = $(this).find('p').text();
  addItemToShoppingCart(itemName);
});


function addShoppingItems(category) {

clearShoppingItems();

var myItems;
switch(category) {
  case 'chocolate':
    myItems = chocolateItems;
    break;
  case 'sour-candy':
    myItems = sourCandy;
    break
  case 'mex-candy':
    myItems = mexCandy;
    break
  default:
}

var newList = $('<ul>');
for(var i = 0; i < myItems.length; i++) {
  var currentItem = myItems[i];

  newList.append(
    `<li class="shopping-item">
        <img src="${currentItem.img}">
        <p>${currentItem.name}</p>
    </li>`);
}

$('#item-list').append(newList);
}

function clearShoppingItems() {
$('#item-list').empty();
}

function addItemToShoppingCart(item) {
$('#shopping-cart ul').append(`
  <li>
      ${item}
  </li>
`);
}
