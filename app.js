const form = document.querySelector("form");
let clearBtn = document.querySelector(".clear");
let productPrice = document.querySelector("#price");
let productName = document.querySelector("#name");
let tbody = document.querySelector("tbody");
// addEvent listeners
// let count = 1;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (productName.value == "" || productPrice.value === "") {
    return;
  }
  getItems(productName.value, productPrice.value);
  display(productName.value, productPrice.value);

  location.reload();
});
const display = (name, price) => {
  tbody.innerHTML += `
     <tr>
       <td>#</td>
         <td>${name}</td>
       <td>1</td>    
       <td>${price}</td>
     </tr>
    `;
};
// get item form the localStorage
let getItems = (name, price) => {
  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", "[]");
  }
  let oldData = JSON.parse(localStorage.getItem("cart"));
  oldData.push({
    count: "#",
    name: name,
    price: price,
  });
  localStorage.setItem("cart", JSON.stringify(oldData));
};

// Load Data
const loadData = () => {
  if (localStorage.getItem("cart") !== null) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    // console.log(cart);
    if (cart.length > 1) {
      clearBtn.style.display = "block";
    }

    cart.map((loadData, index) => {
      tbody.innerHTML += `
     <tr>
       <td>${loadData.count}</td>
       <td class="text-capitalize">${loadData.name}<button class="btn btn-danger ms-3 btn-sm"onClick="deleteItems(${index})">X</button></td>  
       <td>1</td>
       <td>${loadData.price}</td>
     </tr>
    `;
    });
  }
};
loadData();
// delete items from localStorage
const deleteItems = (index) => {
  let confirmBtn = confirm("Are you you want to delete this item");
  if (confirmBtn) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  }
};
// Clear all data from localStorage
clearBtn.addEventListener("click", () => {
  // let cart = JSON.parse(localStorage.getItem("cart"));
  localStorage.removeItem("cart");
  location.reload();
});
let arr = [1, 2, 3];
let r = arr.find((item) => {
  return item > 0;
});
console.log(r);
