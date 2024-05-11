const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log("Number of categories:", categoryItems.length);

categoryItems.forEach(function (item) {
  const categoryTitle = item.querySelector("h2").textContent;
  const subItems = item.querySelectorAll("li");
  console.log("Category:", categoryTitle);
  console.log("Elements:", subItems.length);
});
