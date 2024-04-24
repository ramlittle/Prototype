//===============================================

let productContainer =document.querySelector("#products-list");
let productsList=[
  {name: "Gloves", price: 50, image: "https://tolsen.com.ph/cdn/shop/products/ADS.jpg?v=1551676837" ,stockRemaining: 10},
  {name: "Toothbrush", price: 100, image: "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/en-us/products/toothbrush/035000896506-packshot.png",stockRemaining: 12},
  {name: "Kitchen Knife", price: 100, image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ-Kfu062uM5TSzvIeQvmsKrea2hNw180hJ582tORlC5Nh-K0IeqHMupYI5NT6hVcNInnAlt5R9EOCdl4IvX98",stockRemaining: 5},
  {name: "Trashbin", price: 80, image: "https://tolsen.com.ph/cdn/shop/products/ADS.jpg?v=1551676837",stockRemaining: 8},
  {name: "Cups", price: 80, image: "https://tolsen.com.ph/cdn/shop/products/ADS.jpg?v=1551676837",stockRemaining: 20},
  {name: "Mugs", price: 50, image: "https://tolsen.com.ph/cdn/shop/products/ADS.jpg?v=1551676837",stockRemaining: 14},
]

// Function to show the update form
// Function to show the update form
function showUpdateForm(obj) {
  console.log('you tried to show form', obj);
  let form = document.getElementById("update-form");
  form.style.display = "block";

  let productNameInput = document.getElementById("productName");
  let productPriceInput = document.getElementById("productPrice");
  let productImageInput = document.getElementById("productImage");
  let productStockInput = document.getElementById("productStock");

  productNameInput.value = obj.name;
  productPriceInput.value = obj.price;
  productImageInput.value = obj.image;
  productStockInput.value = obj.stockRemaining;

  // Store the index of the selected product
  form.setAttribute("data-product-index", productsList.indexOf(obj));
}

// Function to handle form submission
document.getElementById("product-update-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get the index of the selected product from the form data
  let productIndex = parseInt(document.getElementById("update-form").getAttribute("data-product-index"));
  if (!isNaN(productIndex) && productIndex >= 0 && productIndex < productsList.length) {
    // Update the selected product in the products list
    productsList[productIndex].name = document.getElementById("productName").value;
    productsList[productIndex].price = parseFloat(document.getElementById("productPrice").value);
    productsList[productIndex].image = document.getElementById("productImage").value;
    productsList[productIndex].stockRemaining = parseInt(document.getElementById("productStock").value);

    // Hide the form after updating
    document.getElementById("update-form").style.display = "none";

    // Refresh the table with updated data
    refreshTable();
  }
});
// Function to refresh the table with updated data
function refreshTable() {
  // Clear existing table rows
  let tbody = document.getElementById("product-table-body");
  tbody.innerHTML = '';

  // Iterate over the updated products list and create table rows
  productsList.forEach((obj, index) => {
    let tr = document.createElement("tr");

    // Create and append table cells for each product property
    let numberCell = document.createElement("td");
    numberCell.textContent = index + 1;
    tr.appendChild(numberCell);

    let nameCell = document.createElement("td");
    nameCell.textContent = obj.name;
    tr.appendChild(nameCell);

    let priceCell = document.createElement("td");
    priceCell.textContent = obj.price;
    tr.appendChild(priceCell);

    let stockCell = document.createElement("td");
    stockCell.textContent = obj.stockRemaining;
    tr.appendChild(stockCell);

    let actionButton = document.createElement("button");
    actionButton.textContent = "UPDATE";
    actionButton.addEventListener("click", () => showUpdateForm(obj)); // Show update form on button click
    let actionCell = document.createElement("td");
    actionCell.appendChild(actionButton);
    tr.appendChild(actionCell);

    // Append the row to the tbody
    tbody.appendChild(tr);
  });
}

// Initialize the table with initial data
refreshTable();


//==================================
