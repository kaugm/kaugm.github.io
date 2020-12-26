const jsonData = {
      "data": [{
         "ID": 0,
         "ingredient": "Asparagus",
         "size": 100,
         "units": "g",
         "carbohydrates": 4,
         "protein": 2.2,
         "fat": 0.1,
         "calories": 20
   }, {
         "ID": 1,
         "ingredient": "Broccoli",
         "size": 100,
         "units": "g",
         "carbohydrates": 7,
         "protein": 2.8,
         "fat": 0.4,
         "calories": 34
   }, {
         "ID": 2,
         "ingredient": "Brussel Sprouts",
         "size": 100,
         "units": "g",
         "carbohydrates": 9,
         "protein": 3.4,
         "fat": 0.3,
         "calories": 43
   }, {
         "ID": 3,
         "ingredient": "Chicken Breast",
         "size": 100,
         "units": "g",
         "carbohydrates": 0,
         "protein": 31,
         "fat": 3.6,
         "calories": 165
   }, {
         "ID": 4,
         "ingredient": "Eggs (X-large White)",
         "size": 1,
         "units": "egg(s)",
         "carbohydrates": 0.6,
         "protein": 7,
         "fat": 5,
         "calories": 80
   }, {
         "ID": 5,
         "ingredient": "English Muffin (Publix Sourdough)",
         "size": 1,
         "units": "Muffin",
         "carbohydrates": 26,
         "protein": 4,
         "fat": 1.5,
         "calories": 140
   }, {
         "ID": 6,
         "ingredient": "Garlic",
         "size": 5,
         "units": "g",
         "carbohydrates": 1.7,
         "protein": 0.3,
         "fat": 0,
         "calories": 7
   }, {
         "ID": 7,
         "ingredient": "Garlic Powder",
         "size": 1,
         "units": "Tsp",
         "carbohydrates": 2,
         "protein": 0.5,
         "fat": 0,
         "calories": 9
   }, {
         "ID": 8,
         "ingredient": "Honey",
         "size": 1,
         "units": "Tbsp",
         "carbohydrates": 17,
         "protein": 0,
         "fat": 0,
         "calories": 64
   }, {
         "ID": 22,
         "ingredient": "Kale (Cooked)",
         "size": 100,
         "units": "g",
         "carbohydrates": 5.5,
         "protein": 2,
         "fat": 0.5,
         "calories": 34
   }, {
         "ID": 22,
         "ingredient": "Lemon Juice",
         "size": 1,
         "units": "Tbsp",
         "carbohydrates": 1,
         "protein": 0,
         "fat": 0,
         "calories": 4
   }, {
         "ID": 9,
         "ingredient": "Mushrooms (White)",
         "size": 100,
         "units": "g",
         "carbohydrates": 3.3,
         "protein": 3.1,
         "fat": 0.3,
         "calories": 22
   }, {
         "ID": 10,
         "ingredient": "Noodles (Roland Buckwheat Soba)",
         "size": 56,
         "units": "g",
         "carbohydrates": 36,
         "protein": 6,
         "fat": 1,
         "calories": 180
   }, {
         "ID": 11,
         "ingredient": "Olive Oil",
         "size": 1,
         "units": "Tbsp",
         "carbohydrates": 0,
         "protein": 0,
         "fat": 14,
         "calories": 120
   }, {
         "ID": 12,
         "ingredient": "Onion",
         "size": 100,
         "units": "g",
         "carbohydrates": 10.1,
         "protein": 0.9,
         "fat": 0,
         "calories": 42
   }, {
         "ID": 22,
         "ingredient": "Onions, Chopped (Publix)",
         "size": 0.667,
         "units": "Cup",
         "carbohydrates": 6,
         "protein": 1,
         "fat": 0,
         "calories": 28
   }, {
         "ID": 13,
         "ingredient": "Onion Powder",
         "size": 1,
         "units": "Tsp",
         "carbohydrates": 1.9,
         "protein": 0.2,
         "fat": 0,
         "calories": 8
   }, {
         "ID": 14,
         "ingredient": "Oyster Sauce (Hokan)",
         "size": 1,
         "units": "Tbsp",
         "carbohydrates": 4,
         "protein": 0,
         "fat": 0,
         "calories": 15
   }, {
         "ID": 15,
         "ingredient": "Pasta (Barilla Farfalle)",
         "size": 56,
         "units": "g",
         "carbohydrates": 42,
         "protein": 7,
         "fat": 1,
         "calories": 200
   }, {
         "ID": 16,
         "ingredient": "Pepper (Green Bell)",
         "size": 100,
         "units": "g",
         "carbohydrates": 4.6,
         "protein": 0.9,
         "fat": 0.2,
         "calories": 20
   }, {
         "ID": 17,
         "ingredient": "Pepper (Red Bell)",
         "size": 100,
         "units": "g",
         "carbohydrates": 6,
         "protein": 1,
         "fat": 0.3,
         "calories": 31
   }, {
         "ID": 22,
         "ingredient": "Pepper & Onion Mix (PictSweet Farms)",
         "size": 1,
         "units": "Cup",
         "carbohydrates": 5,
         "protein": 1,
         "fat": 0,
         "calories": 25
   }, {
         "ID": 18,
         "ingredient": "Peanut Butter (Publix Chunky)",
         "size": 2,
         "units": "Tbsp",
         "carbohydrates": 6,
         "protein": 7,
         "fat": 15,
         "calories": 190
   }, {
         "ID": 19,
         "ingredient": "Rice (Brown)",
         "size": 100,
         "units": "g",
         "carbohydrates": 23,
         "protein": 2.6,
         "fat": 0.9,
         "calories": 111
   }, {
         "ID": 20,
         "ingredient": "Rice (White)",
         "size": 100,
         "units": "g",
         "carbohydrates": 28,
         "protein": 2.7,
         "fat": 0.3,
         "calories": 130
   }, {
         "ID": 21,
         "ingredient": "Rice (Yellow Mahatma)",
         "size": 57,
         "units": "g",
         "carbohydrates": 44,
         "protein": 4,
         "fat": 0,
         "calories": 200
   }, {
         "ID": 22,
         "ingredient": "Sauce, Hoisin (Kikkoman)",
         "size": 2,
         "units": "Tbsp",
         "carbohydrates": 21,
         "protein": 0.5,
         "fat": 0,
         "calories": 90
   }, {
         "ID": 22,
         "ingredient": "Sauce (Recaito Iberia)",
         "size": 2,
         "units": "Tbsp",
         "carbohydrates": 3,
         "protein": 0.6,
         "fat": 0,
         "calories": 15
   }, {
         "ID": 23,
         "ingredient": "Sauce (Sofrito Goya)",
         "size": 1,
         "units": "Tbsp",
         "carbohydrates": 3,
         "protein": 0,
         "fat": 0,
         "calories": 15
   }, {
         "ID": 24,
         "ingredient": "Soy Sauce (Kikkoman Regular)",
         "size": 1,
         "units": "Tbsp",
         "carbohydrates": 1,
         "protein": 2,
         "fat": 0,
         "calories": 10
   }, {
         "ID": 25,
         "ingredient": "Spinach",
         "size": 100,
         "units": "g",
         "carbohydrates": 3.6,
         "protein": 2.9,
         "fat": 0.4,
         "calories": 23
   }, {
         "ID": 26,
         "ingredient": "Sriracha",
         "size": 1,
         "units": "Tsp",
         "carbohydrates": 1,
         "protein": 0,
         "fat": 0,
         "calories": 5
   }, {
         "ID": 27,
         "ingredient": "Tilapia",
         "size": 100,
         "units": "g",
         "carbohydrates": 0,
         "protein": 26.2,
         "fat": 2.7,
         "calories": 128
   }, {
         "ID": 28,
         "ingredient": "Tomato Paste (Hunt's Small Can)",
         "size": 1,
         "units": "Can(s)",
         "carbohydrates": 7,
         "protein": 1,
         "fat": 0,
         "calories": 35
       }]
   };

// INITIAL ITEMS LOAD
let kcalTotal = 0, carbohydratesTotal = 0, proteinTotal = 0, fatTotal = 0;
function loadItems() {

      // SEARCH PAGE
      // HIDE CONTENT FIRST
      const searchContent = document.getElementById("searchContent");
      searchContent.style.display = "none";
      const ingredientsContent = document.getElementById("ingredientsContent");
      ingredientsContent.style.display = "none";

      // APPEND ALL ELEMENTS WITH FUNCTIONS
      let itemListDiv = document.getElementById("itemList");
      for (let i = 0; i < jsonData.data.length; i++) {

            // CREATE AND APPEND MAIN ITEM CONTAINER
            let itemContainer = document.createElement("div");
            itemContainer.className = "itemContainer";
            itemListDiv.appendChild(itemContainer);

            // CREATE AND APPEND 2X SUB CONTAINERS
            let infoContainer = document.createElement("div");
            let infoSubContainer = document.createElement("div");
            infoContainer.className = "infoContainer";
            infoSubContainer.className = "infoSubContainer";
            itemContainer.appendChild(infoContainer);
            infoContainer.appendChild(infoSubContainer);

            infoContainer.addEventListener("click", function showHidden() {
                  let content = this.nextElementSibling;
                  if (content.style.display === "flex") {
                        content.style.display = "none";
                      } else {
                        content.style.display = "flex";
                  }

            })

            // CREATE AMD APPEND INFO ITEMS
            let pTitle = document.createElement("p");
            let pInfo = document.createElement("p");
            pTitle.innerHTML = jsonData.data[i].ingredient.toUpperCase();
            pInfo.innerHTML = jsonData.data[i].calories + ' kcal per ' + jsonData.data[i].size + jsonData.data[i].units.toUpperCase();
            pTitle.className = "itemTitle";
            pInfo.className = "itemInfo";
            infoSubContainer.appendChild(pTitle);
            infoSubContainer.appendChild(pInfo);

            // CREATE AND APPEND IMG -> NEED TO REPLACE THIS WIH AND ACTUAL IMG (MEAT ICON, CARB ICON, VEG, FRUIT, OIL, ETC)
            let imgIcon = document.createElement("p");
            imgIcon.innerHTML = "IMG";
            imgIcon.style.border = "1px solid red";
            infoContainer.appendChild(imgIcon);

            // APPEND CONTENT TO BE SHOWN WHEN ITEM CLICKED
            let inputDiv = document.createElement("div");
            inputDiv.className = "inputContainer";
            inputDiv.style.display = "none";
            itemContainer.appendChild(inputDiv);

            let inputSubDiv = document.createElement("div");
            inputSubDiv.className = "inputSubContainer";
            inputDiv.appendChild(inputSubDiv);

            // INPUT BOX
            let sizeInput = document.createElement("input");
            sizeInput.type = "text";
            sizeInput.placeholder = jsonData.data[i].size + ' ' + jsonData.data[i].units.toUpperCase();
            sizeInput.autocomplete = "off";
            sizeInput.className = "inputCustomAmount";

            // BUTTONS
            let lessButton = document.createElement("button");
            let moreButton = document.createElement("button");
            lessButton.className = "button square left";
            moreButton.className = "button square right";
            lessButton.innerHTML = "-";
            moreButton.innerHTML = "+";

            let NewValue = jsonData.data[i].size;
            lessButton.addEventListener("click", function() {
                  if (NewValue > 1) {
                        if (jsonData.data[i].size == 100) {
                              NewValue = NewValue - 20;
                        } else {
                              NewValue = NewValue - 1;
                        }
                  }
                  sizeInput.placeholder = NewValue + ' ' + jsonData.data[i].units.toUpperCase();
            })
            moreButton.addEventListener("click", function() {
                  if (jsonData.data[i].size == 100) {
                        NewValue = NewValue + 20;
                  } else {
                        NewValue = NewValue + 1;
                  }
                  sizeInput.placeholder = NewValue + ' ' + jsonData.data[i].units.toUpperCase();
                  
                  
            })

            // LOG BUTTON
            let logButton = document.createElement("button");
            logButton.innerHTML = "LOG ITEM";
            logButton.className = "button logButton";
            logButton.addEventListener("click", function() {
                  // CALCULATE MACRO TOTALS AND UPDATE THEM + ADD INGREDIENT TO LIST
                  //console.log(NewValue + ' ' + jsonData.data[i].ingredient);

                  // GET TOTAL P ELEMENTS
                  let pKcalTotal = document.getElementById("kcalTotal");
                  let pCarbohydratesTotal = document.getElementById("carbohydratesTotal");
                  let pProteinTotal = document.getElementById("proteinTotal");
                  let pFatTotal = document.getElementById("fatTotal");

                  // GET USER INPUT AMOUNT
                  let selectedAmount;
                  if (sizeInput.value.length == 0) {
                        selectedAmount = sizeInput.placeholder.split(" ")[0];
                  } else {
                        selectedAmount = sizeInput.value;
                  }

                  // TOTALS FOR INGREDIENT
                  itemKcal = Math.round( jsonData.data[i].calories * ( selectedAmount / jsonData.data[i].size ));
                  itemCarbohydrates = Math.round( jsonData.data[i].carbohydrates * ( selectedAmount / jsonData.data[i].size ));
                  itemProtein = Math.round( jsonData.data[i].protein * ( selectedAmount / jsonData.data[i].size ));
                  itemFat = Math.round( jsonData.data[i].fat * ( selectedAmount / jsonData.data[i].size ));
                  let itemStatArr = ["null", itemKcal, itemCarbohydrates, itemProtein, itemFat];

                  // UPDATE CUMULATIVE TOTALS
                  kcalTotal = Math.round(kcalTotal + itemKcal);
                  carbohydratesTotal = Math.round(carbohydratesTotal + itemCarbohydrates);
                  proteinTotal = Math.round(proteinTotal + itemProtein);
                  fatTotal = Math.round(fatTotal + itemFat);

                  // HOME PAGE - UPDATE TOTAL P ELEMENTS
                  pKcalTotal.innerHTML = kcalTotal;
                  pCarbohydratesTotal.innerHTML = carbohydratesTotal;
                  pProteinTotal.innerHTML = proteinTotal;
                  pFatTotal.innerHTML = fatTotal;

                  // ADD LIST ITEM TO INGREDIENTS PAGE
                  // REMOVE EMPTY TEXT
                  var emptyText =  document.getElementById('emptyText');
                  if (typeof(emptyText) != 'undefined' && emptyText != null)
                  {
                        emptyText.remove();
                  }

                  const selectedItemsList = document.getElementById("selectedItemsList");
                  let selectedFoodItemContainer = document.createElement("div");
                  selectedFoodItemContainer.className = "selectedItemContainer";
                  selectedItemsList.appendChild(selectedFoodItemContainer);

                  const stats = ["ingredient", "kcal", "carbohydrates", "protein", "fat"]
                  for (let l = 0; l < stats.length; l++) {
                        let selectedFoodItemInfoContainer = document.createElement("div");
                        selectedFoodItemInfoContainer.className = "selectedFoodItemInfoContainer";
                        selectedFoodItemContainer.append(selectedFoodItemInfoContainer);
                        let selectedFoodItem = document.createElement("p");
                        let selectedFoodItemStat = document.createElement("p");
                        selectedFoodItemStat.className = "active";
                        if (l == 0) {
                              selectedFoodItem.innerHTML = jsonData.data[i].ingredient;
                              selectedFoodItemStat.innerHTML = selectedAmount + ' ' + jsonData.data[i].units.toUpperCase();
                        } else {
                              selectedFoodItem.innerHTML = stats[l];
                              selectedFoodItemStat.innerHTML = itemStatArr[l];
                        }
                        

                        
                        selectedFoodItemInfoContainer.appendChild(selectedFoodItem);
                        selectedFoodItemInfoContainer.appendChild(selectedFoodItemStat); 
                  }
                  // CLOSE UP EXPANDED DIV
                  // TODO
                  inputDiv.style.display = "none";




            })

            // APPEND ALL HIDDEN ELEMENTS
            inputSubDiv.appendChild(lessButton);
            inputSubDiv.appendChild(sizeInput);
            inputSubDiv.appendChild(moreButton);
            inputDiv.appendChild(logButton);


      }


}

// FILTER ITEMS
function filterItems() {
      const searchBar = document.getElementById('searchBar');
      filter = searchBar.value.toUpperCase();

      let items = document.getElementsByClassName("itemContainer");
      //console.log(filter, items.length);

      for (j = 0; j < items.length; j++) {
            let title = items[j].getElementsByTagName('p')[0];
            let result = title.textContent || title.innerText;

            if (result.toUpperCase().indexOf(filter) > -1) {
                  items[j].style.display = "";
                } else {
                  items[j].style.display = "none";
            }
      }
}


function switchTo(page) {
      // GET PAGE CONTENT + BUTTONS
      const searchContent = document.getElementById("searchContent");
      const mealContent = document.getElementById("mealContent");
      const ingredientsContent = document.getElementById("ingredientsContent");
      const mealButton = document.getElementById("mealSvg");
      const searchButton = document.getElementById("searchSvg");
      const ingredientsButton = document.getElementById("listSvg");
      // SHOW & HIDE CONTENT + SET BUTTON ACTIVE STYLE
      if (page.toString() == "meal") {
            searchContent.style.display = "none";
            ingredientsContent.style.display = "none";
            mealContent.style.display = "";
            mealButton.classList.add("active");
            searchButton.classList.remove("active");
            ingredientsButton.classList.remove("active");
      } else if (page.toString() == "ingredients") {
            mealContent.style.display = "none";
            searchContent.style.display = "none";
            ingredientsContent.style.display = "";
            ingredientsButton.classList.add("active");
            mealButton.classList.remove("active");
            searchButton.classList.remove("active");
      } else if (page.toString() == "search") {
            mealContent.style.display = "none";
            ingredientsContent.style.display = "none";
            searchContent.style.display = "";
            searchButton.classList.add("active");
            mealButton.classList.remove("active");
            ingredientsButton.classList.remove("active");
      }
}


function logMacros() {
      let copyText = kcalTotal + "," + carbohydratesTotal + "," + proteinTotal + "," + fatTotal;
      let el = document.createElement('textarea');
      el.value = copyText;
      el.setAttribute('readonly', '');
      el.style = {
            position: 'absolute',
            left: '-9999px'
      };
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
}
