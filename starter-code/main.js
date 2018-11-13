var chocolateItems = [
  {
      img: "starter-code/images/chocolate/ferrero.jpg",
      name: "Ferrero"
  },
  { 
      img: "starter-code/images/chocolate/hersheys.jpeg",
      name: "Hershey's"
  },
  {
      img: "starter-code/images/chocolate/japanese-kit-kat.jpg",
      name: "Kit-Kat"
  },
  {
      img: "starter-code/images/chocolate/mms.jpeg",
      name: "M&M's"
  },
  {
      img: "starter-code/images/chocolate/snickers.jpg",
      name: "Snickers"
  }
]

var sourCandy = [
  {
      img: "starter-code/images/sour/gummy-worms.jpg",
      name: "Gummy Worms"
  },
  {
      img: "starter-code/images/sour/hi-chew.jpeg",
      name: "Hi-Chew",
  },
  {
      img: "starter-code/images/sour/skittles.png",
      name: "Skittles"
  },
  {
      img: "starter-code/images/sour/sour-patch.jpeg",
      name: "Sour patch"
  },
  {
      img: "starter-code/images/sour/warheads.png",
      name: "Warheads"
  }
]

var mexCandy = [
  {
      img: "starter-code/images/mexican-candy/duvalin.jpg",
      name: "Duvalin"
  },
  {
      img: "starter-code/images/mexican-candy/lucas.jpeg",
      name: "Mango Lucas"
  },
  {
      img: "starter-code/images/mexican-candy/mango-pop.jpg",
      name: "Mango Lollipop"
  },
  {
      img: "starter-code/images/mexican-candy/mazapan.jpg",
      name: "Mazapan"
  },
  {
      img: "starter-code/images/mexican-candy/pulparindo.jpeg",
      name: "Pulparindo"
  }
]


var chocolateGallery = function() {
  var newList = ("<ul>");

  for(var i = 0; i < chocolateItems.length; i++) {
    var currentItem = chocolateItems[i];

    newList.append(
        `<li class="item-list">
          <img src="${currentItem.img}">
          <p> ${currentItem.name}</p>
        </li>
        </ul>`);
  }

  ('#item-list').append(newList);
}

document.getElementById('chocolate').addEventListener('click', chocolateGallery);