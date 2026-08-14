var product = document.getElementsByClassName("add-product");
var list = document.getElementById("product-list");
var searchCategory = document.getElementById("new-category");

function addCategorySearch(category) {
  var options = document.getElementsByClassName("option");
  if (options.length === 0) {
    var sCategory = document.createElement("span");
    sCategory.className = "option";
    sCategory.innerText = category;
    searchCategory.appendChild(sCategory);
    sCategory.onclick = function () {
      searchByCategory(sCategory);
    };
  }
  for (var i = 0; i < options.length; i++) {
    if (options[i].innerText === category) {
      break;
    } else if (i + 1 === options.length) {
      var sCategory = document.createElement("span");
      sCategory.className = "option";
      sCategory.innerText = category;
      searchCategory.appendChild(sCategory);
      sCategory.onclick = function () {
        searchByCategory(sCategory);
      };
      break;
    }
  }
}

function addProduct() {
  var newProduct = document.createElement("div");
  newProduct.className = "product-detail";

  var pName = document.createElement("div");
  pName.className = "new-product name";
  pName.innerText = product[0].value;

  var pCategory = document.createElement("div");
  pCategory.className = "new-product category";
  pCategory.innerText = product[1].value;

  var pPrice = document.createElement("div");
  pPrice.className = "new-product";
  pPrice.innerText = product[2].value;

  var pQuantity = document.createElement("div");
  pQuantity.className = "new-product";
  pQuantity.innerText = product[3].value;

  var action = document.createElement("div");
  action.className = "new-product";
  var btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.onclick = function () {
    newProduct.remove();
  };
  action.appendChild(btnDelete);
  var btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit";
  btnEdit.onclick = function () {
    product[0].value = pName.innerText;
    product[1].value = pCategory.innerText;
    product[2].value = pPrice.innerText;
    product[3].value = pQuantity.innerText;
    newProduct.remove();
  };
  action.appendChild(btnEdit);

  newProduct.appendChild(pName);
  newProduct.appendChild(pCategory);
  newProduct.appendChild(pPrice);
  newProduct.appendChild(pQuantity);
  newProduct.appendChild(action);
  list.appendChild(newProduct);

  addCategorySearch(product[1].value);
}

var searchBox = document.getElementById("all-category-search");
function options() {
  for (var i = 0; i < searchBox.classList.length; i++) {
    if (searchBox.classList[i] === "hide") {
      searchBox.classList.add("show");
      searchBox.classList.remove("hide");
    } else if (searchBox.classList[i] === "show") {
      searchBox.classList.add("hide");
      searchBox.classList.remove("show");
    }
  }
}
function searchByName() {
  var input = document.getElementById("search-name");
  var names = document.getElementsByClassName("name");
  for (var i = 0; i < names.length; i++) {
    if (names[i].innerText !== input.value) {
      names[i].parentElement.classList.add("hide");
    } else {
      names[i].parentElement.classList.remove("hide");
    }
  }
}
function searchByCategory(category) {
  var main = document.getElementById("main-option");
  var def = document.getElementById("default");
  var categories = document.getElementsByClassName("category");
  var options = document.getElementsByClassName("option");
  main.innerText = category.innerText;
  if (category.innerText !== "All") {
    def.classList.remove("hide");
  } else {
    for (var i = 0; i < options.length; i++) {
      options[i].classList.remove("hide");
    }
    category.classList.add("hide");
    return;
  }
  for (var i = 0; i < options.length; i++) {
    if (options[i].innerText !== main.innerText) {
      options[i].classList.remove("hide");
    }
  }
  category.classList.add("hide");
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].innerText !== main.innerText) {
      categories[i].parentElement.classList.add("hide");
    } else if (main.innerText === "All") {
      categories[i].parentElement.classList.remove("hide");
    } else {
      categories[i].parentElement.classList.remove("hide");
    }
  }
}
