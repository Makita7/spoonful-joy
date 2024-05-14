import { defineStore } from 'pinia';
import RecipeServices from '@/services/RecipeServices';
import { ref } from 'vue';
import appetizer from '../assets/food-appetizer.png';
import foodBreakfast from '../assets/food-breakfast.png';
import coldBeverage from '../assets/food-cold-beverage.png';
import dessert from '../assets/food-dessert.png';
import dinner from '../assets/food-dinner.png';
import hotBeverage from '../assets/food-hot-beverage.png';
import pasta from '../assets/food-pasta.png';
import salad from '../assets/food-salad.png';
import seafood from '../assets/food-seafood.png';

export const useRecipesStore = defineStore('recipeStore', () => {
    let randomRecipes = ref(null);
    let myRecipes = ref([]);

    randomRecipes.value = {
        "recipes": [
            {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": false,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 14,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 3,
                "healthScore": 1,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 125.13,
                "extendedIngredients": [
                    {
                        "id": 1145,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "butter-sliced.jpg",
                        "consistency": "SOLID",
                        "name": "butter",
                        "nameClean": "unsalted butter",
                        "original": "8 tablespoons (1 stick) unsalted butter melted",
                        "originalName": "(1 stick) unsalted butter melted",
                        "amount": 8.0,
                        "unit": "tablespoons",
                        "meta": [
                            "unsalted",
                            "melted",
                            "(1 stick)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 8.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 8.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "SOLID",
                        "name": "garlic",
                        "nameClean": "garlic",
                        "original": "1 clove garlic crushed with a little salt",
                        "originalName": "garlic crushed with a little salt",
                        "amount": 1.0,
                        "unit": "clove",
                        "meta": [
                            "with a little salt",
                            "crushed"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "clove",
                                "unitLong": "clove"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "clove",
                                "unitLong": "clove"
                            }
                        }
                    },
                    {
                        "id": 19296,
                        "aisle": "Nut butters, Jams, and Honey",
                        "image": "honey.png",
                        "consistency": "LIQUID",
                        "name": "honey",
                        "nameClean": "honey",
                        "original": "1 tablespoon honey",
                        "originalName": "honey",
                        "amount": 1.0,
                        "unit": "tablespoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            }
                        }
                    },
                    {
                        "id": 2009,
                        "aisle": "Spices and Seasonings",
                        "image": "chili-powder.jpg",
                        "consistency": "SOLID",
                        "name": "chilli powder",
                        "nameClean": "chili powder",
                        "original": "1 teaspoon chilli powder",
                        "originalName": "chilli powder",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 1012014,
                        "aisle": "Spices and Seasonings",
                        "image": "ground-cumin.jpg",
                        "consistency": "SOLID",
                        "name": "ground cumin",
                        "nameClean": "ground cumin",
                        "original": "1 teaspoon ground cumin",
                        "originalName": "ground cumin",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 1002013,
                        "aisle": "Spices and Seasonings",
                        "image": "ground-coriander.jpg",
                        "consistency": "SOLID",
                        "name": "ground coriander",
                        "nameClean": "ground coriander",
                        "original": "1 teaspoon ground coriander",
                        "originalName": "ground coriander",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 1002030,
                        "aisle": "Spices and Seasonings",
                        "image": "pepper.jpg",
                        "consistency": "SOLID",
                        "name": "ground pepper",
                        "nameClean": "black pepper",
                        "original": "1 teaspoon ground black pepper",
                        "originalName": "ground black pepper",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [
                            "black"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 11167,
                        "aisle": "Produce",
                        "image": "corn-on-the-cob.jpg",
                        "consistency": "SOLID",
                        "name": "corn cobs",
                        "nameClean": "corn on the cob",
                        "original": "4 corn cobs, husks removed",
                        "originalName": "corn cobs, husks removed",
                        "amount": 4.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    }
                ],
                "id": 634300,
                "title": "Barbecued Corn on the Cob With Spiced Butter",
                "readyInMinutes": 45,
                "servings": 4,
                "sourceUrl": "https://www.foodista.com/recipe/BNKJW2JQ/barbecued-corn-on-the-cob-with-spiced-butter",
                "image": "https://img.spoonacular.com/recipes/634300-556x370.jpg",
                "imageType": "jpg",
                "summary": "Barbecued Corn on the Cob With Spiced Butter takes roughly <b>45 minutes</b> from beginning to end. This recipe makes 4 servings with <b>301 calories</b>, <b>4g of protein</b>, and <b>24g of fat</b> each. For <b>$1.25 per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. It works well as a side dish. Head to the store and pick up ground cumin, garlic, honey, and a few other things to make it today. It is a <b>reasonably priced</b> recipe for fans of American food. Not a lot of people made this recipe, and 3 would say it hit the spot. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 21%</b>, which is rather bad. <a href=\"https://spoonacular.com/recipes/barbecued-corn-on-the-cob-with-bacon-and-chili-butter-148077\">Barbecued Corn on the Cob with Bacon and Chili Butter</a>, <a href=\"https://spoonacular.com/recipes/curry-butter-corn-on-the-cob-798344\">Curry Butter Corn on the Cob</a>, and <a href=\"https://spoonacular.com/recipes/corn-on-the-cob-with-smoked-butter-338713\">Corn on the Cob with Smoked Butter</a> are very similar to this recipe.",
                "cuisines": [
                    "American"
                ],
                "dishTypes": [
                    "side dish"
                ],
                "diets": [
                    "gluten free",
                    "lacto ovo vegetarian"
                ],
                "occasions": [],
                "instructions": "Combine the butter, garlic, honey, and spices in a small saucepan and cook over a gentle heat.\nBrush corn with the flavored butter and cook on the barbecue or under the grill turning regularly until golden.\nBaste continually during the cooking process.",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Combine the butter, garlic, honey, and spices in a small saucepan and cook over a gentle heat.",
                                "ingredients": [
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    },
                                    {
                                        "id": 11215,
                                        "name": "garlic",
                                        "localizedName": "garlic",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                                    },
                                    {
                                        "id": 2035,
                                        "name": "spices",
                                        "localizedName": "spices",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spices.png"
                                    },
                                    {
                                        "id": 19296,
                                        "name": "honey",
                                        "localizedName": "honey",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/honey.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404669,
                                        "name": "sauce pan",
                                        "localizedName": "sauce pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Brush corn with the flavored butter and cook on the barbecue or under the grill turning regularly until golden.",
                                "ingredients": [
                                    {
                                        "id": 1021001,
                                        "name": "flavored butter",
                                        "localizedName": "flavored butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    },
                                    {
                                        "id": 11168,
                                        "name": "corn",
                                        "localizedName": "corn",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/corn.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404706,
                                        "name": "grill",
                                        "localizedName": "grill",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/grill.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 3,
                                "step": "Baste continually during the cooking process.",
                                "ingredients": [],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 28.163227081298828,
                "spoonacularSourceUrl": "https://spoonacular.com/barbecued-corn-on-the-cob-with-spiced-butter-634300"
            },
            {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": false,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 14,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 205,
                "healthScore": 35,
                "creditsText": "Afrolems",
                "license": "CC BY 4.0",
                "sourceName": "Afrolems",
                "pricePerServing": 67.93,
                "extendedIngredients": [
                    {
                        "id": 20081,
                        "aisle": "Baking",
                        "image": "flour.png",
                        "consistency": "SOLID",
                        "name": "flour",
                        "nameClean": "wheat flour",
                        "original": "1.5 cups of flour",
                        "originalName": "flour",
                        "amount": 1.5,
                        "unit": "cups",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 187.5,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 19296,
                        "aisle": "Nut butters, Jams, and Honey",
                        "image": "honey.png",
                        "consistency": "LIQUID",
                        "name": "honey",
                        "nameClean": "honey",
                        "original": "30 ml honey",
                        "originalName": "honey",
                        "amount": 30.0,
                        "unit": "ml",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.454,
                                "unitShort": "fl. oz",
                                "unitLong": "fl. ozs"
                            },
                            "metric": {
                                "amount": 30.0,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 1090,
                        "aisle": "Baking",
                        "image": "milk-powdered.jpg",
                        "consistency": "SOLID",
                        "name": "powdered milk",
                        "nameClean": "powdered milk",
                        "original": "1 tablespoon of powdered milk",
                        "originalName": "powdered milk",
                        "amount": 1.0,
                        "unit": "tablespoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            }
                        }
                    },
                    {
                        "id": 2047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "SOLID",
                        "name": "salt",
                        "nameClean": "table salt",
                        "original": "1/2 teaspoon salt",
                        "originalName": "salt",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 14412,
                        "aisle": "Beverages",
                        "image": "water.png",
                        "consistency": "LIQUID",
                        "name": "warm water",
                        "nameClean": "water",
                        "original": "150 ml warm water",
                        "originalName": "warm water",
                        "amount": 150.0,
                        "unit": "ml",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 5.073,
                                "unitShort": "fl. oz",
                                "unitLong": "fl. ozs"
                            },
                            "metric": {
                                "amount": 150.0,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 18375,
                        "aisle": "Baking",
                        "image": "yeast-granules.jpg",
                        "consistency": "SOLID",
                        "name": "yeast",
                        "nameClean": "dry yeast",
                        "original": "1 teaspoon yeast",
                        "originalName": "yeast",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    }
                ],
                "id": 716276,
                "title": "Doughnuts",
                "readyInMinutes": 45,
                "servings": 2,
                "sourceUrl": "https://www.afrolems.com/2014/03/25/doughnuts-recipe/",
                "image": "https://img.spoonacular.com/recipes/716276-556x370.jpg",
                "imageType": "jpg",
                "summary": "If you have around <b>45 minutes</b> to spend in the kitchen, Doughnuts might be an amazing <b>lacto ovo vegetarian</b> recipe to try. For <b>68 cents per serving</b>, you get a breakfast that serves 2. One serving contains <b>445 calories</b>, <b>13g of protein</b>, and <b>2g of fat</b>. If you have warm water, honey, powdered milk, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. Several people made this recipe, and 205 would say it hit the spot. With a spoonacular <b>score of 96%</b>, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/how-to-make-doughnuts-with-video-and-coffee-biscoff-bacon-doughnuts-573590\">How to make doughnuts (with video) and Coffee-Biscoff-Bacon Doughnuts</a>, <a href=\"https://spoonacular.com/recipes/everything-doughnuts-742597\">Everything Doughnuts</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-doughnuts-428199\">Cranberry Doughnuts</a>.",
                "cuisines": [],
                "dishTypes": [
                    "morning meal",
                    "brunch",
                    "breakfast"
                ],
                "diets": [
                    "lacto ovo vegetarian"
                ],
                "occasions": [],
                "instructions": "In a bowl mix the water with the yeast and honey, whisk and allow to sit for 15 minutes or until the mixture is foamy.Mix the flour with the salt and powdered milk and pour the yeast mixture into the bowl.Knead the dough till its elastic and not sticky and cover and leave to double in size. This could take 1-2 hours.On a lightly floured surface, roll out your dough but not to thin so your doughnuts are not flat and cut the dough into circles. If You have a doughnut cutter use that, if not use a small round shaped cover or bowl to make your circles and a smaller container for the middle hole. You can improvise and use the mouth of a plastic bottle to make the hole in the middle.Leave to rise for another 45 minutes.Heat up your oil and fry the doughnuts till they are brown on both sides.Vanilla GlazeMix 1 cup of powdered sugar with 30 ml of milk and 1 teaspoon of vanilla. Whisk till its properly mixed and drizzle the doughnuts with it. Add sprinkles for garnishingChocolate GlazeI used a chocolate sauce and drizzled over the doughnuts with sprinkles to top it.",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "In a bowl mix the water with the yeast and honey, whisk and allow to sit for 15 minutes or until the mixture is foamy.",
                                "ingredients": [
                                    {
                                        "id": 19296,
                                        "name": "honey",
                                        "localizedName": "honey",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/honey.png"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                                    },
                                    {
                                        "id": 18375,
                                        "name": "yeast",
                                        "localizedName": "yeast",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/yeast-granules.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404661,
                                        "name": "whisk",
                                        "localizedName": "whisk",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                                    },
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 15,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 2,
                                "step": "Mix the flour with the salt and powdered milk and pour the yeast mixture into the bowl.Knead the dough till its elastic and not sticky and cover and leave to double in size. This could take 1-2 hours.On a lightly floured surface, roll out your dough but not to thin so your doughnuts are not flat and cut the dough into circles. If You have a doughnut cutter use that, if not use a small round shaped cover or bowl to make your circles and a smaller container for the middle hole. You can improvise and use the mouth of a plastic bottle to make the hole in the middle.Leave to rise for another 45 minutes.",
                                "ingredients": [
                                    {
                                        "id": 1090,
                                        "name": "powdered milk",
                                        "localizedName": "powdered milk",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk-powdered.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "dough",
                                        "localizedName": "dough",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/pizza-dough"
                                    },
                                    {
                                        "id": 20081,
                                        "name": "all purpose flour",
                                        "localizedName": "all purpose flour",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                                    },
                                    {
                                        "id": 18375,
                                        "name": "yeast",
                                        "localizedName": "yeast",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/yeast-granules.jpg"
                                    },
                                    {
                                        "id": 12135,
                                        "name": "nuts",
                                        "localizedName": "nuts",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/nuts-mixed.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "roll",
                                        "localizedName": "roll",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dinner-yeast-rolls.jpg"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 165,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 3,
                                "step": "Heat up your oil and fry the doughnuts till they are brown on both sides.Vanilla Glaze",
                                "ingredients": [
                                    {
                                        "id": 1052050,
                                        "name": "vanilla",
                                        "localizedName": "vanilla",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "glaze",
                                        "localizedName": "glaze",
                                        "image": ""
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 4,
                                "step": "Mix 1 cup of powdered sugar with 30 ml of milk and 1 teaspoon of vanilla.",
                                "ingredients": [
                                    {
                                        "id": 19336,
                                        "name": "powdered sugar",
                                        "localizedName": "powdered sugar",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/powdered-sugar.jpg"
                                    },
                                    {
                                        "id": 1052050,
                                        "name": "vanilla",
                                        "localizedName": "vanilla",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                                    },
                                    {
                                        "id": 1077,
                                        "name": "milk",
                                        "localizedName": "milk",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 5,
                                "step": "Whisk till its properly mixed and drizzle the doughnuts with it.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404661,
                                        "name": "whisk",
                                        "localizedName": "whisk",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                                    }
                                ]
                            },
                            {
                                "number": 6,
                                "step": "Add sprinkles for garnishing",
                                "ingredients": [
                                    {
                                        "id": 93645,
                                        "name": "sprinkles",
                                        "localizedName": "sprinkles",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/colorful-sprinkles.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 7,
                                "step": "Chocolate GlazeI used a chocolate sauce and drizzled over the doughnuts with sprinkles to top it.",
                                "ingredients": [
                                    {
                                        "id": 10019348,
                                        "name": "hot fudge sauce",
                                        "localizedName": "hot fudge sauce",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/chocolate-glaze.png"
                                    },
                                    {
                                        "id": 19081,
                                        "name": "chocolate",
                                        "localizedName": "chocolate",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk-chocolate.jpg"
                                    },
                                    {
                                        "id": 93645,
                                        "name": "sprinkles",
                                        "localizedName": "sprinkles",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/colorful-sprinkles.jpg"
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 95.62109375,
                "spoonacularSourceUrl": "https://spoonacular.com/doughnuts-716276"
            },
            {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": false,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 8,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 34,
                "healthScore": 0,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 49.84,
                "extendedIngredients": [
                    {
                        "id": 18369,
                        "aisle": "Baking",
                        "image": "white-powder.jpg",
                        "consistency": "SOLID",
                        "name": "baking powder",
                        "nameClean": "baking powder",
                        "original": "2 teaspoons baking powder",
                        "originalName": "baking powder",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 9050,
                        "aisle": "Produce",
                        "image": "blueberries.jpg",
                        "consistency": "SOLID",
                        "name": "driscoll's blueberries",
                        "nameClean": "blueberries",
                        "original": "1 1/2 cups Driscoll's Blueberries",
                        "originalName": "Driscoll's Blueberries",
                        "amount": 1.5,
                        "unit": "cups",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 222.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 1123,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "egg.png",
                        "consistency": "SOLID",
                        "name": "eggs",
                        "nameClean": "egg",
                        "original": "2 large eggs",
                        "originalName": "eggs",
                        "amount": 2.0,
                        "unit": "large",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "large",
                                "unitLong": "larges"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "large",
                                "unitLong": "larges"
                            }
                        }
                    },
                    {
                        "id": 93620,
                        "aisle": "Gluten Free",
                        "image": "gluten-free-flour.jpg",
                        "consistency": "SOLID",
                        "name": "flour",
                        "nameClean": "gluten free all purpose flour",
                        "original": "2 cups gluten-free all-purpose flour",
                        "originalName": "gluten-free all-purpose flour",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [
                            "gluten-free",
                            "all-purpose"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 272.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 9156,
                        "aisle": "Produce",
                        "image": "zest-lemon.jpg",
                        "consistency": "SOLID",
                        "name": "lemon zest",
                        "nameClean": "lemon peel",
                        "original": "2 teaspoons grated lemon zest",
                        "originalName": "grated lemon zest",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [
                            "grated"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 2047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "SOLID",
                        "name": "salt",
                        "nameClean": "table salt",
                        "original": "1/2 teaspoon salt",
                        "originalName": "salt",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 19335,
                        "aisle": "Baking",
                        "image": "sugar-in-bowl.png",
                        "consistency": "SOLID",
                        "name": "sugar",
                        "nameClean": "sugar",
                        "original": "3/4 cup sugar",
                        "originalName": "sugar",
                        "amount": 0.75,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.75,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 150.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 1145,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "butter-sliced.jpg",
                        "consistency": "SOLID",
                        "name": "butter",
                        "nameClean": "unsalted butter",
                        "original": "1/2 cup (1 stick) unsalted butter, melted and cooled",
                        "originalName": "(1 stick) unsalted butter, melted and cooled",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [
                            "unsalted",
                            "cooled",
                            "melted",
                            "(1 stick)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 113.5,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 2050,
                        "aisle": "Baking",
                        "image": "vanilla-extract.jpg",
                        "consistency": "LIQUID",
                        "name": "vanilla extract",
                        "nameClean": "vanilla extract",
                        "original": "1 teaspoon vanilla extract",
                        "originalName": "vanilla extract",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 1011077,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "milk.png",
                        "consistency": "LIQUID",
                        "name": "milk",
                        "nameClean": "whole milk",
                        "original": "1/2 cup whole milk",
                        "originalName": "whole milk",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [
                            "whole"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 122.0,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 93626,
                        "aisle": "Baking",
                        "image": "white-powder.jpg",
                        "consistency": "SOLID",
                        "name": "xanthan gum",
                        "nameClean": "xanthan gum",
                        "original": "1 teaspoon xanthan gum",
                        "originalName": "xanthan gum",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    }
                ],
                "id": 644800,
                "title": "Gluten Free Blueberry Muffins",
                "readyInMinutes": 45,
                "servings": 12,
                "sourceUrl": "https://www.foodista.com/recipe/V3JWYJCL/gluten-free-blueberry-muffins",
                "image": "https://img.spoonacular.com/recipes/644800-556x370.jpg",
                "imageType": "jpg",
                "summary": "Gluten Free Blueberry Muffins is a <b>gluten free and lacto ovo vegetarian</b> breakfast. One serving contains <b>213 calories</b>, <b>4g of protein</b>, and <b>10g of fat</b>. This recipe serves 12. For <b>50 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 34 people were impressed by this recipe. It is brought to you by Foodista. If you have lemon zest, salt, butter, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe <b>earns a spoonacular score of 16%</b>, which is rather bad. <a href=\"https://spoonacular.com/recipes/the-best-healthy-blueberry-oatmeal-muffins-gluten-free-dairy-free-1101951\">The Best Healthy Blueberry Oatmeal Muffins (gluten free & dairy free)</a>, <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-blueberry-oatmeal-muffins-890097\">Gluten-Free, Dairy-Free, Blueberry Oatmeal Muffins</a>, and <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-blueberry-oatmeal-muffins-1382221\">Gluten-Free, Dairy-Free, Blueberry Oatmeal Muffins</a> are very similar to this recipe.",
                "cuisines": [],
                "dishTypes": [
                    "morning meal",
                    "brunch",
                    "breakfast"
                ],
                "diets": [
                    "gluten free",
                    "lacto ovo vegetarian"
                ],
                "occasions": [],
                "instructions": "<ol><li>Preheat oven to 375F. Lightly butter or grease a 12-cup muffin pan or line with paper liners.</li><li>Stir together flour, sugar, baking powder, xanthan gum and salt in a medium bowl until blended. Whisk together butter, milk, eggs, lemon zest and vanilla in a large bowl until combined. Stir in flour mixture until partially moistened. Fold in blueberries until evenly mixed. Batter will be thick, do not over stir.</li><li>Divide batter evenly between muffin cups, filling each about three-fourths full.</li><li>Bake 10 minutes. Rotate pan and continue to bake about 10 minutes longer or until muffins are golden brown and toothpick inserted in center comes out clean. Cool in pan 3 minutes. Serve warm or remove to wire rack to cool completely.</li></ol>",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Preheat oven to 375F. Lightly butter or grease a 12-cup muffin pan or line with paper liners.Stir together flour, sugar, baking powder, xanthan gum and salt in a medium bowl until blended.",
                                "ingredients": [
                                    {
                                        "id": 18369,
                                        "name": "baking powder",
                                        "localizedName": "baking powder",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                                    },
                                    {
                                        "id": 93626,
                                        "name": "xanthan gum",
                                        "localizedName": "xanthan gum",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                                    },
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    },
                                    {
                                        "id": 20081,
                                        "name": "all purpose flour",
                                        "localizedName": "all purpose flour",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                                    },
                                    {
                                        "id": 19335,
                                        "name": "sugar",
                                        "localizedName": "sugar",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404671,
                                        "name": "muffin tray",
                                        "localizedName": "muffin tray",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-tray.jpg"
                                    },
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                                    },
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        "temperature": {
                                            "number": 375.0,
                                            "unit": "Fahrenheit"
                                        }
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Whisk together butter, milk, eggs, lemon zest and vanilla in a large bowl until combined. Stir in flour mixture until partially moistened. Fold in blueberries until evenly mixed. Batter will be thick, do not over stir.Divide batter evenly between muffin cups, filling each about three-fourths full.",
                                "ingredients": [
                                    {
                                        "id": 9050,
                                        "name": "blueberries",
                                        "localizedName": "blueberries",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg"
                                    },
                                    {
                                        "id": 9156,
                                        "name": "lemon zest",
                                        "localizedName": "lemon zest",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg"
                                    },
                                    {
                                        "id": 1052050,
                                        "name": "vanilla",
                                        "localizedName": "vanilla",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                                    },
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    },
                                    {
                                        "id": 20081,
                                        "name": "all purpose flour",
                                        "localizedName": "all purpose flour",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                                    },
                                    {
                                        "id": 1123,
                                        "name": "egg",
                                        "localizedName": "egg",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                                    },
                                    {
                                        "id": 1077,
                                        "name": "milk",
                                        "localizedName": "milk",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404676,
                                        "name": "muffin liners",
                                        "localizedName": "muffin liners",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-or-cupcake-forms.png"
                                    },
                                    {
                                        "id": 404661,
                                        "name": "whisk",
                                        "localizedName": "whisk",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                                    },
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 3,
                                "step": "Bake 10 minutes. Rotate pan and continue to bake about 10 minutes longer or until muffins are golden brown and toothpick inserted in center comes out clean. Cool in pan 3 minutes.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404644,
                                        "name": "toothpicks",
                                        "localizedName": "toothpicks",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/toothpicks.jpg"
                                    },
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                    },
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ],
                                "length": {
                                    "number": 23,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 4,
                                "step": "Serve warm or remove to wire rack to cool completely.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 405900,
                                        "name": "wire rack",
                                        "localizedName": "wire rack",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 6.172097206115723,
                "spoonacularSourceUrl": "https://spoonacular.com/gluten-free-blueberry-muffins-644800"
            },
            {
                "vegetarian": true,
                "vegan": true,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 0,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 2,
                "healthScore": 18,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 20.21,
                "extendedIngredients": [
                    {
                        "id": 11507,
                        "aisle": "Produce",
                        "image": "sweet-potato.png",
                        "consistency": "SOLID",
                        "name": "sweet potatoes",
                        "nameClean": "sweet potato",
                        "original": "1 pound sweet potatoes",
                        "originalName": "sweet potatoes",
                        "amount": 1.0,
                        "unit": "pound",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "lb",
                                "unitLong": "pound"
                            },
                            "metric": {
                                "amount": 453.592,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 11143,
                        "aisle": "Produce",
                        "image": "celery.jpg",
                        "consistency": "SOLID",
                        "name": "celery",
                        "nameClean": "celery",
                        "original": "1 cup celery chopped",
                        "originalName": "celery chopped",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 101.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 11282,
                        "aisle": "Produce",
                        "image": "brown-onion.png",
                        "consistency": "SOLID",
                        "name": "onion",
                        "nameClean": "onion",
                        "original": "1 small onion chopped",
                        "originalName": "onion chopped",
                        "amount": 1.0,
                        "unit": "small",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "small",
                                "unitLong": "small"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "small",
                                "unitLong": "small"
                            }
                        }
                    },
                    {
                        "id": 4053,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "olive-oil.jpg",
                        "consistency": "LIQUID",
                        "name": "olive oil",
                        "nameClean": "olive oil",
                        "original": "2 tablespoons olive oil",
                        "originalName": "olive oil",
                        "amount": 2.0,
                        "unit": "tablespoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 2044,
                        "aisle": "Produce",
                        "image": "basil.jpg",
                        "consistency": "SOLID",
                        "name": "basil",
                        "nameClean": "fresh basil",
                        "original": "1/2 teaspoon sweet basil",
                        "originalName": "sweet basil",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [
                            "sweet"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 2044,
                        "aisle": "Produce",
                        "image": "fresh-basil.jpg",
                        "consistency": "SOLID",
                        "name": "basil",
                        "nameClean": "fresh basil",
                        "original": "1/2 teaspoon sweet basil",
                        "originalName": "sweet basil",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [
                            "sweet"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 2004,
                        "aisle": "Produce",
                        "image": "bay-leaves.jpg",
                        "consistency": "SOLID",
                        "name": "bay leaves",
                        "nameClean": "bay leaves",
                        "original": "2 bay leaves",
                        "originalName": "bay leaves",
                        "amount": 2.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 1102047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt-and-pepper.jpg",
                        "consistency": "SOLID",
                        "name": "salt and pepper",
                        "nameClean": "salt and pepper",
                        "original": "salt and pepper to taste",
                        "originalName": "salt and pepper to taste",
                        "amount": 12.0,
                        "unit": "servings",
                        "meta": [
                            "to taste"
                        ],
                        "measures": {
                            "us": {
                                "amount": 12.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 12.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    }
                ],
                "id": 662551,
                "title": "Sweet Potato and Celery Soup",
                "readyInMinutes": 45,
                "servings": 12,
                "sourceUrl": "https://www.foodista.com/recipe/FKHM8SQR/sweet-potato-and-celery-soup",
                "image": "https://img.spoonacular.com/recipes/662551-556x370.jpg",
                "imageType": "jpg",
                "summary": "Sweet Potato and Celery Soup takes roughly <b>45 minutes</b> from beginning to end. One portion of this dish contains about <b>1g of protein</b>, <b>2g of fat</b>, and a total of <b>57 calories</b>. For <b>20 cents per serving</b>, you get a hor d'oeuvre that serves 12. This recipe from Foodista has 2 fans. If you have olive oil, celery, basil, and a few other ingredients on hand, you can make it. It will be a hit at your <b>Autumn</b> event. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 81%</b>, this dish is outstanding. <a href=\"https://spoonacular.com/recipes/celery-root-fennel-and-sweet-potato-soup-with-almond-parsley-12641\">Celery Root, Fennel, And Sweet Potato Soup With Almond Parsley</a>, <a href=\"https://spoonacular.com/recipes/sweet-potato-celery-and-apple-salad-11919\">Sweet Potato, Celery, And Apple Salad</a>, and <a href=\"https://spoonacular.com/recipes/carrot-celery-potato-cream-soup-516568\">Carrot, Celery & Potato Cream Soup</a> are very similar to this recipe.",
                "cuisines": [],
                "dishTypes": [
                    "antipasti",
                    "soup",
                    "starter",
                    "snack",
                    "appetizer",
                    "antipasto",
                    "hor d'oeuvre"
                ],
                "diets": [
                    "gluten free",
                    "dairy free",
                    "paleolithic",
                    "lacto ovo vegetarian",
                    "primal",
                    "whole 30",
                    "vegan"
                ],
                "occasions": [
                    "fall",
                    "winter"
                ],
                "instructions": "In a large soup pot add the olive and saute the vegetable about 3 minutes.  Add the bay leaves, basil and vegetable broth.\nBring to a boil and then turn down the heat and simmer 25-30 minutes until the vegetables are very soft.\nRemove the pot from the heat and allow to cool enough to place in a food processor.\nProcess until smooth and then reheat.\nAdd croutons if desired and some chopped fresh basil.",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "In a large soup pot add the olive and saute the vegetable about 3 minutes.",
                                "ingredients": [
                                    {
                                        "id": 11583,
                                        "name": "vegetable",
                                        "localizedName": "vegetable",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/mixed-vegetables.png"
                                    },
                                    {
                                        "id": 9195,
                                        "name": "olives",
                                        "localizedName": "olives",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/olives-mixed.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "soup",
                                        "localizedName": "soup",
                                        "image": ""
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404752,
                                        "name": "pot",
                                        "localizedName": "pot",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 3,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 2,
                                "step": "Add the bay leaves, basil and vegetable broth.",
                                "ingredients": [
                                    {
                                        "id": 6615,
                                        "name": "vegetable broth",
                                        "localizedName": "vegetable broth",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png"
                                    },
                                    {
                                        "id": 2004,
                                        "name": "bay leaves",
                                        "localizedName": "bay leaves",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/bay-leaves.jpg"
                                    },
                                    {
                                        "id": 2044,
                                        "name": "basil",
                                        "localizedName": "basil",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/basil.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 3,
                                "step": "Bring to a boil and then turn down the heat and simmer 25-30 minutes until the vegetables are very soft.",
                                "ingredients": [
                                    {
                                        "id": 11583,
                                        "name": "vegetable",
                                        "localizedName": "vegetable",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/mixed-vegetables.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 30,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 4,
                                "step": "Remove the pot from the heat and allow to cool enough to place in a food processor.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404771,
                                        "name": "food processor",
                                        "localizedName": "food processor",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                                    },
                                    {
                                        "id": 404752,
                                        "name": "pot",
                                        "localizedName": "pot",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 5,
                                "step": "Process until smooth and then reheat.",
                                "ingredients": [],
                                "equipment": []
                            },
                            {
                                "number": 6,
                                "step": "Add croutons if desired and some chopped fresh basil.",
                                "ingredients": [
                                    {
                                        "id": 2044,
                                        "name": "fresh basil",
                                        "localizedName": "fresh basil",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-basil.jpg"
                                    },
                                    {
                                        "id": 18242,
                                        "name": "croutons",
                                        "localizedName": "croutons",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/croutons.png"
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 70.11689758300781,
                "spoonacularSourceUrl": "https://spoonacular.com/sweet-potato-and-celery-soup-662551"
            },
            {
                "vegetarian": false,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": false,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 19,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 2,
                "healthScore": 17,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 387.92,
                "extendedIngredients": [
                    {
                        "id": 1001,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "butter-sliced.jpg",
                        "consistency": "SOLID",
                        "name": "butter",
                        "nameClean": "butter",
                        "original": "2 T. melted butter",
                        "originalName": "melted butter",
                        "amount": 2.0,
                        "unit": "T",
                        "meta": [
                            "melted"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.029,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.029,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 15015,
                        "aisle": "Seafood",
                        "image": "cod-fillet.jpg",
                        "consistency": "SOLID",
                        "name": "another fish",
                        "nameClean": "cod fillets",
                        "original": "1 1/2 lb. cod fillet, or another white fish, cut into 4 serving-sized pieces",
                        "originalName": "cod fillet, or another white fish, cut into 4 serving-sized pieces",
                        "amount": 1.5,
                        "unit": "lb",
                        "meta": [
                            "white",
                            "cut into 4 serving-sized pieces"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "lb",
                                "unitLong": "pounds"
                            },
                            "metric": {
                                "amount": 680.389,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 10511297,
                        "aisle": "Produce",
                        "image": "parsley.jpg",
                        "consistency": "SOLID",
                        "name": "parsley",
                        "nameClean": "fresh parsley",
                        "original": "1 1/2 T. minced fresh parsley",
                        "originalName": "minced fresh parsley",
                        "amount": 1.5,
                        "unit": "T",
                        "meta": [
                            "fresh",
                            "minced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.425,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 1.425,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 10211215,
                        "aisle": "Produce",
                        "image": "garlic.jpg",
                        "consistency": "SOLID",
                        "name": "garlic clove",
                        "nameClean": "whole garlic cloves",
                        "original": "1 garlic clove, very finely minced",
                        "originalName": "garlic clove, very finely minced",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [
                            "finely minced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 18350,
                        "aisle": "Bakery/Bread",
                        "image": "hamburger-bun.jpg",
                        "consistency": "SOLID",
                        "name": "hamburger buns",
                        "nameClean": "hamburger bun",
                        "original": "4 hamburger buns",
                        "originalName": "hamburger buns",
                        "amount": 4.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 9152,
                        "aisle": "Produce",
                        "image": "lemon-juice.jpg",
                        "consistency": "LIQUID",
                        "name": "lemon juice",
                        "nameClean": "lemon juice",
                        "original": "2 T. fresh lemon juice",
                        "originalName": "fresh lemon juice",
                        "amount": 2.0,
                        "unit": "T",
                        "meta": [
                            "fresh"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 4025,
                        "aisle": "Condiments",
                        "image": "mayonnaise.png",
                        "consistency": "LIQUID",
                        "name": "mayonnaise",
                        "nameClean": "mayonnaise",
                        "original": "1/2 c. mayonnaise",
                        "originalName": "mayonnaise",
                        "amount": 0.5,
                        "unit": "c",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 112.0,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11937,
                        "aisle": null,
                        "image": "dill-pickles.jpg",
                        "consistency": "SOLID",
                        "name": "toppings: such as pickles",
                        "nameClean": "pickles",
                        "original": "toppings: such as pickles, lettuce and avocado",
                        "originalName": "toppings: such as pickles, lettuce and avocado",
                        "amount": 4.0,
                        "unit": "servings",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 2047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "SOLID",
                        "name": "salt",
                        "nameClean": "table salt",
                        "original": "1/2 teaspoon salt",
                        "originalName": "salt",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 1102047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt-and-pepper.jpg",
                        "consistency": "SOLID",
                        "name": "salt & pepper",
                        "nameClean": "salt and pepper",
                        "original": "salt & pepper (or seasoning, I used seasoned salt & pepper)",
                        "originalName": "salt & pepper (or seasoning, I used seasoned salt & pepper)",
                        "amount": 4.0,
                        "unit": "servings",
                        "meta": [
                            "(or seasoning, I used seasoned salt & pepper)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 1012028,
                        "aisle": "Spices and Seasonings",
                        "image": "paprika.jpg",
                        "consistency": "SOLID",
                        "name": "paprika",
                        "nameClean": "smoked paprika",
                        "original": "1/2 t. smoked paprika",
                        "originalName": "smoked paprika",
                        "amount": 0.5,
                        "unit": "t",
                        "meta": [
                            "smoked"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.143,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.143,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 4669,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "vegetable-oil.jpg",
                        "consistency": "LIQUID",
                        "name": "vegetable oil",
                        "nameClean": "vegetable oil",
                        "original": "vegetable oil",
                        "originalName": "vegetable oil",
                        "amount": 4.0,
                        "unit": "servings",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 1042046,
                        "aisle": "Condiments",
                        "image": "regular-mustard.jpg",
                        "consistency": "LIQUID",
                        "name": "mustard",
                        "nameClean": "yellow mustard",
                        "original": "3/4 t. yellow mustard",
                        "originalName": "yellow mustard",
                        "amount": 0.75,
                        "unit": "t",
                        "meta": [
                            "yellow"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.25,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    }
                ],
                "id": 645710,
                "title": "Grilled Fish Sandwiches",
                "readyInMinutes": 45,
                "servings": 4,
                "sourceUrl": "https://www.foodista.com/recipe/GTGKFTFH/grilled-fish-sandwiches",
                "image": "https://img.spoonacular.com/recipes/645710-556x370.jpg",
                "imageType": "jpg",
                "summary": "If you have approximately <b>45 minutes</b> to spend in the kitchen, Grilled Fish Sandwiches might be an outstanding <b>pescatarian</b> recipe to try. One portion of this dish contains roughly <b>35g of protein</b>, <b>44g of fat</b>, and a total of <b>637 calories</b>. For <b>$3.88 per serving</b>, you get a main course that serves 4. This recipe from Foodista has 2 fans. A mixture of garlic clove, salt, parsley, and a handful of other ingredients are all it takes to make this recipe so delicious. It is perfect for <b>The Fourth Of July</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 59%</b>. This score is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/grilled-fish-sandwiches-1367893\">Grilled Fish Sandwiches</a>, <a href=\"https://spoonacular.com/recipes/grilled-fish-sandwiches-86051\">Grilled Fish Sandwiches</a>, and <a href=\"https://spoonacular.com/recipes/fish-sandwiches-92724\">Fish Sandwiches</a>.",
                "cuisines": [],
                "dishTypes": [
                    "lunch",
                    "main course",
                    "main dish",
                    "dinner"
                ],
                "diets": [
                    "pescatarian"
                ],
                "occasions": [
                    "father's day",
                    "4th of july",
                    "summer"
                ],
                "instructions": "<ol><li>In a small bowl, combine all of the ingredients for the aioli, season to taste with salt.</li><li>Preheat a grill pan (a nonstick skillet can be used as well) over med-high heat until very hot. Brush the cut-sides of the buns with melted butter. Drizzle a little bit of oil into the pan and using a wad of paper towel, carefully wipe out the excess (you are just reinforcing your nonstick surface). Toast the buttered sides of the buns, then set aside while cooking the fish.</li><li>Pat the fish dry and season with salt & pepper (or seasoning of your choice). Drizzle a little bit of oil over the fish and rub it over the entire surface of the fish to evenly coat with oil. Add the fish to the hot pan and cook, turning once, until the fish is cooked through (cooking time will vary based on the thickness of your fish, somewhere between 2-4 minutes per side).</li><li>erve the fish on the toasted buns, slathered with the aioli and toppings of choice.</li></ol>",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "In a small bowl, combine all of the ingredients for the aioli, season to taste with salt.Preheat a grill pan (a nonstick skillet can be used as well) over med-high heat until very hot.",
                                "ingredients": [
                                    {
                                        "id": 93758,
                                        "name": "aioli",
                                        "localizedName": "aioli",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/aioli.jpg"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404648,
                                        "name": "grill pan",
                                        "localizedName": "grill pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/grill-pan.jpg"
                                    },
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    },
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Brush the cut-sides of the buns with melted butter.",
                                "ingredients": [
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "roll",
                                        "localizedName": "roll",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dinner-yeast-rolls.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 3,
                                "step": "Drizzle a little bit of oil into the pan and using a wad of paper towel, carefully wipe out the excess (you are just reinforcing your nonstick surface). Toast the buttered sides of the buns, then set aside while cooking the fish.Pat the fish dry and season with salt & pepper (or seasoning of your choice).",
                                "ingredients": [
                                    {
                                        "id": 1102047,
                                        "name": "salt and pepper",
                                        "localizedName": "salt and pepper",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                                    },
                                    {
                                        "id": 1042027,
                                        "name": "seasoning",
                                        "localizedName": "seasoning",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png"
                                    },
                                    {
                                        "id": 0,
                                        "name": "sandwich bread",
                                        "localizedName": "sandwich bread",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-bread.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "roll",
                                        "localizedName": "roll",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dinner-yeast-rolls.jpg"
                                    },
                                    {
                                        "id": 10115261,
                                        "name": "fish",
                                        "localizedName": "fish",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/fish-fillet.jpg"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 405895,
                                        "name": "paper towels",
                                        "localizedName": "paper towels",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/paper-towels.jpg"
                                    },
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ]
                            },
                            {
                                "number": 4,
                                "step": "Drizzle a little bit of oil over the fish and rub it over the entire surface of the fish to evenly coat with oil.",
                                "ingredients": [
                                    {
                                        "id": 10115261,
                                        "name": "fish",
                                        "localizedName": "fish",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/fish-fillet.jpg"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                                    },
                                    {
                                        "id": 1012034,
                                        "name": "dry seasoning rub",
                                        "localizedName": "dry seasoning rub",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 5,
                                "step": "Add the fish to the hot pan and cook, turning once, until the fish is cooked through (cooking time will vary based on the thickness of your fish, somewhere between 2-4 minutes per side).erve the fish on the toasted buns, slathered with the aioli and toppings of choice.",
                                "ingredients": [
                                    {
                                        "id": 93758,
                                        "name": "aioli",
                                        "localizedName": "aioli",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/aioli.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "roll",
                                        "localizedName": "roll",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dinner-yeast-rolls.jpg"
                                    },
                                    {
                                        "id": 10115261,
                                        "name": "fish",
                                        "localizedName": "fish",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/fish-fillet.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ],
                                "length": {
                                    "number": 4,
                                    "unit": "minutes"
                                }
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 63.795108795166016,
                "spoonacularSourceUrl": "https://spoonacular.com/grilled-fish-sandwiches-645710"
            },
            {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": false,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 5,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 48,
                "healthScore": 3,
                "creditsText": "foodandspice.com",
                "sourceName": "foodandspice.com",
                "pricePerServing": 56.71,
                "extendedIngredients": [
                    {
                        "id": 12195,
                        "aisle": "Nut butters, Jams, and Honey",
                        "image": "nut-butter.png",
                        "consistency": "SOLID",
                        "name": "almond butter",
                        "nameClean": "nut butter",
                        "original": "4 tablespoons of almond butter",
                        "originalName": "almond butter",
                        "amount": 4.0,
                        "unit": "tablespoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 12195,
                        "aisle": "Nut butters, Jams, and Honey",
                        "image": "almond-butter.jpg",
                        "consistency": "SOLID",
                        "name": "almond butter",
                        "nameClean": "nut butter",
                        "original": "4 tablespoons of almond butter",
                        "originalName": "almond butter",
                        "amount": 4.0,
                        "unit": "tablespoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 93740,
                        "aisle": "Health Foods",
                        "image": "almond-meal-or-almond-flour.jpg",
                        "consistency": "SOLID",
                        "name": "almond flour",
                        "nameClean": "almond meal",
                        "original": "1/2 cup of almond flour",
                        "originalName": "almond flour",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 56.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 18369,
                        "aisle": "Baking",
                        "image": "white-powder.jpg",
                        "consistency": "SOLID",
                        "name": "baking powder",
                        "nameClean": "baking powder",
                        "original": "2 teaspoons of baking powder",
                        "originalName": "baking powder",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 18372,
                        "aisle": "Baking",
                        "image": "white-powder.jpg",
                        "consistency": "SOLID",
                        "name": "baking soda",
                        "nameClean": "baking soda",
                        "original": "1/8 teaspoon of baking soda",
                        "originalName": "baking soda",
                        "amount": 0.125,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.125,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.125,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 9050,
                        "aisle": "Produce",
                        "image": "blueberries.jpg",
                        "consistency": "SOLID",
                        "name": "blueberries",
                        "nameClean": "blueberries",
                        "original": "1/2 cup of blueberries",
                        "originalName": "blueberries",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 74.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 9070,
                        "aisle": "Produce",
                        "image": "cherries.jpg",
                        "consistency": "SOLID",
                        "name": "cherries",
                        "nameClean": "cherries",
                        "original": "1 cup of pitted cherries, roughly chopped",
                        "originalName": "pitted cherries, roughly chopped",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [
                            "pitted",
                            "roughly chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 138.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 1123,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "egg.png",
                        "consistency": "SOLID",
                        "name": "eggs",
                        "nameClean": "egg",
                        "original": "2 eggs",
                        "originalName": "eggs",
                        "amount": 2.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 9152,
                        "aisle": "Produce",
                        "image": "lemon-juice.jpg",
                        "consistency": "LIQUID",
                        "name": "lemon juice",
                        "nameClean": "lemon juice",
                        "original": "1 tablespoon of lemon juice",
                        "originalName": "lemon juice",
                        "amount": 1.0,
                        "unit": "tablespoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            }
                        }
                    },
                    {
                        "id": 9156,
                        "aisle": "Produce",
                        "image": "zest-lemon.jpg",
                        "consistency": "SOLID",
                        "name": "lemon zest",
                        "nameClean": "lemon peel",
                        "original": "2 teaspoons of lemon zest",
                        "originalName": "lemon zest",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 1012047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "SOLID",
                        "name": "sea salt",
                        "nameClean": "coarse sea salt",
                        "original": "1/2 teaspoon of sea salt",
                        "originalName": "sea salt",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 19335,
                        "aisle": "Baking",
                        "image": "sugar-in-bowl.png",
                        "consistency": "SOLID",
                        "name": "sugar",
                        "nameClean": "sugar",
                        "original": "1/4 cup of sugar",
                        "originalName": "sugar",
                        "amount": 0.25,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 50.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 10020081,
                        "aisle": "Baking",
                        "image": "flour.png",
                        "consistency": "SOLID",
                        "name": "unbleached flour",
                        "nameClean": "unbleached flour",
                        "original": "1 1/2 cups of unbleached white flour",
                        "originalName": "unbleached white flour",
                        "amount": 1.5,
                        "unit": "cups",
                        "meta": [
                            "white"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 187.5,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 1052050,
                        "aisle": "Baking",
                        "image": "vanilla.jpg",
                        "consistency": "SOLID",
                        "name": "vanilla",
                        "nameClean": "vanilla",
                        "original": "2 teaspoons of vanilla",
                        "originalName": "vanilla",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 1106,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "milk.png",
                        "consistency": "LIQUID",
                        "name": "yogurt",
                        "nameClean": "goat milk",
                        "original": "1 cup of yogurt (I used goat milk yogurt)",
                        "originalName": "yogurt (I used goat milk yogurt)",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [
                            "(I used goat milk yogurt)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 244.0,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    }
                ],
                "id": 716211,
                "title": "Cherry Blueberry Muffins",
                "readyInMinutes": 45,
                "servings": 12,
                "sourceUrl": "https://www.foodandspice.com/2009/07/cherry-blueberry-muffins.html",
                "image": "https://img.spoonacular.com/recipes/716211-556x370.jpg",
                "imageType": "jpg",
                "summary": "Cherry Blueberry Muffins might be just the breakfast you are searching for. One portion of this dish contains approximately <b>6g of protein</b>, <b>7g of fat</b>, and a total of <b>170 calories</b>. For <b>57 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe serves 12. If you have sea salt, vanilla, unbleached flour, and a few other ingredients on hand, you can make it. 48 people have made this recipe and would make it again. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. It is brought to you by foodandspice.blogspot.com. With a spoonacular <b>score of 39%</b>, this dish is not so spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cherry-and-blueberry-muffins-497142\">Cherry and Blueberry Muffins</a>, <a href=\"https://spoonacular.com/recipes/blueberry-muffins-with-blueberry-jam-535789\">Blueberry Muffins with Blueberry Jam</a>, and <a href=\"https://spoonacular.com/recipes/amazingly-blueberry-ey-blueberry-muffins-510119\">Amazingly Blueberry-ey Blueberry Muffins</a>.",
                "cuisines": [],
                "dishTypes": [
                    "morning meal",
                    "brunch",
                    "breakfast"
                ],
                "diets": [
                    "lacto ovo vegetarian"
                ],
                "occasions": [],
                "instructions": "<p>Grease twelve regular sized muffin cups well with butter or oil.In a large bowl, combine the flours, baking powder, baking soda, sugar, lemon zest and salt. Make a well in the center of the ingredients and set aside.In another bowl, combine the yogurt with the lemon juice. Add the eggs, one at a time, whisking well after each addition. Now add the vanilla and almond butter and whisk until well combined. Pour this mixture into the dry ingredients and stir just to combine. Gently fold in the cherries and blueberries.Divide the batter evenly into the prepared muffin cups and bake in a preheat 350 degree oven for 20 - 25 minutes, or until a cake tester or toothpick comes out clean. Leave the muffins in the pan for 10 minutes and then transfer to a wire rack to cool.Yields 12 berry filled muffins.</p>",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Grease twelve regular sized muffin cups well with butter or oil.In a large bowl, combine the flours, baking powder, baking soda, sugar, lemon zest and salt. Make a well in the center of the ingredients and set aside.In another bowl, combine the yogurt with the lemon juice.",
                                "ingredients": [
                                    {
                                        "id": 18369,
                                        "name": "baking powder",
                                        "localizedName": "baking powder",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                                    },
                                    {
                                        "id": 18372,
                                        "name": "baking soda",
                                        "localizedName": "baking soda",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
                                    },
                                    {
                                        "id": 9152,
                                        "name": "lemon juice",
                                        "localizedName": "lemon juice",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
                                    },
                                    {
                                        "id": 9156,
                                        "name": "lemon zest",
                                        "localizedName": "lemon zest",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg"
                                    },
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    },
                                    {
                                        "id": 1116,
                                        "name": "yogurt",
                                        "localizedName": "yogurt",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/plain-yogurt.jpg"
                                    },
                                    {
                                        "id": 19335,
                                        "name": "sugar",
                                        "localizedName": "sugar",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404676,
                                        "name": "muffin liners",
                                        "localizedName": "muffin liners",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-or-cupcake-forms.png"
                                    },
                                    {
                                        "id": 404783,
                                        "name": "bowl",
                                        "localizedName": "bowl",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Add the eggs, one at a time, whisking well after each addition. Now add the vanilla and almond butter and whisk until well combined.",
                                "ingredients": [
                                    {
                                        "id": 12195,
                                        "name": "almond butter",
                                        "localizedName": "almond butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/almond-butter.jpg"
                                    },
                                    {
                                        "id": 1052050,
                                        "name": "vanilla",
                                        "localizedName": "vanilla",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                                    },
                                    {
                                        "id": 1123,
                                        "name": "egg",
                                        "localizedName": "egg",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404661,
                                        "name": "whisk",
                                        "localizedName": "whisk",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                                    }
                                ]
                            },
                            {
                                "number": 3,
                                "step": "Pour this mixture into the dry ingredients and stir just to combine. Gently fold in the cherries and blueberries.Divide the batter evenly into the prepared muffin cups and bake in a preheat 350 degree oven for 20 - 25 minutes, or until a cake tester or toothpick comes out clean. Leave the muffins in the pan for 10 minutes and then transfer to a wire rack to cool.Yields 12 berry filled muffins.",
                                "ingredients": [
                                    {
                                        "id": 9050,
                                        "name": "blueberries",
                                        "localizedName": "blueberries",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/blueberries.jpg"
                                    },
                                    {
                                        "id": 9070,
                                        "name": "cherries",
                                        "localizedName": "cherries",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/cherries.jpg"
                                    },
                                    {
                                        "id": 1009054,
                                        "name": "berries",
                                        "localizedName": "berries",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404676,
                                        "name": "muffin liners",
                                        "localizedName": "muffin liners",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/muffin-or-cupcake-forms.png"
                                    },
                                    {
                                        "id": 404644,
                                        "name": "toothpicks",
                                        "localizedName": "toothpicks",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/toothpicks.jpg"
                                    },
                                    {
                                        "id": 405900,
                                        "name": "wire rack",
                                        "localizedName": "wire rack",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                                    },
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                    },
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ],
                                "length": {
                                    "number": 35,
                                    "unit": "minutes"
                                }
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 44.7384147644043,
                "spoonacularSourceUrl": "https://spoonacular.com/cherry-blueberry-muffins-716211"
            },
            {
                "vegetarian": false,
                "vegan": false,
                "glutenFree": true,
                "dairyFree": true,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 5,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 3,
                "healthScore": 55,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 279.46,
                "extendedIngredients": [
                    {
                        "id": 20035,
                        "aisle": "Health Foods",
                        "image": "uncooked-quinoa.png",
                        "consistency": "SOLID",
                        "name": "quinoa",
                        "nameClean": "quinoa",
                        "original": "1 cup Quinoa",
                        "originalName": "Quinoa",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 170.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 14412,
                        "aisle": "Beverages",
                        "image": "water.png",
                        "consistency": "LIQUID",
                        "name": "water",
                        "nameClean": "water",
                        "original": "2 cups water",
                        "originalName": "water",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 473.176,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 1012047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "SOLID",
                        "name": "sea salt",
                        "nameClean": "coarse sea salt",
                        "original": "2 teaspoons sea salt",
                        "originalName": "sea salt",
                        "amount": 2.0,
                        "unit": "teaspoons",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 10111143,
                        "aisle": "Produce",
                        "image": "celery.jpg",
                        "consistency": "SOLID",
                        "name": "celery stalks",
                        "nameClean": "celery sticks",
                        "original": "2 celery stalks",
                        "originalName": "celery stalks",
                        "amount": 2.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 10011821,
                        "aisle": "Produce",
                        "image": "bell-pepper-orange.png",
                        "consistency": "SOLID",
                        "name": "and orange peppers",
                        "nameClean": "orange pepper",
                        "original": "each red, yellow and orange peppers",
                        "originalName": "each red, yellow and orange peppers",
                        "amount": 4.0,
                        "unit": "servings",
                        "meta": [
                            "red",
                            "yellow"
                        ],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 11291,
                        "aisle": "Produce",
                        "image": "spring-onions.jpg",
                        "consistency": "SOLID",
                        "name": "green onions",
                        "nameClean": "spring onions",
                        "original": "2 green onions",
                        "originalName": "green onions",
                        "amount": 2.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11955,
                        "aisle": "Produce",
                        "image": "sundried-tomatoes.jpg",
                        "consistency": "SOLID",
                        "name": "sun-dried olives",
                        "nameClean": "sun dried tomatoes",
                        "original": "12 kalamatas olives or sun-dried olives",
                        "originalName": "kalamatas olives or sun-dried olives",
                        "amount": 12.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 12.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 12.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 10611529,
                        "aisle": "Produce",
                        "image": "roma-tomatoes.png",
                        "consistency": "SOLID",
                        "name": "vine ripened tomato",
                        "nameClean": "vine ripened tomatoes",
                        "original": "1 vine ripened tomato, seeded",
                        "originalName": "vine ripened tomato, seeded",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [
                            "seeded"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11913,
                        "aisle": "Frozen",
                        "image": "corn.png",
                        "consistency": "SOLID",
                        "name": "corn",
                        "nameClean": "frozen corn",
                        "original": "1/4 cup frozen corn (may be omitted)",
                        "originalName": "frozen corn (may be omitted)",
                        "amount": 0.25,
                        "unit": "cup",
                        "meta": [
                            "frozen",
                            "(may be omitted)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 41.25,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 10511297,
                        "aisle": "Produce",
                        "image": "parsley.jpg",
                        "consistency": "SOLID",
                        "name": "parsley",
                        "nameClean": "fresh parsley",
                        "original": "1/2 cup chopped fresh parsley",
                        "originalName": "chopped fresh parsley",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [
                            "fresh",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 30.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 2064,
                        "aisle": "Produce",
                        "image": "mint.jpg",
                        "consistency": "SOLID",
                        "name": "mint leaves",
                        "nameClean": "mint",
                        "original": "6 mint leaves",
                        "originalName": "mint leaves",
                        "amount": 6.0,
                        "unit": "",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 6.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 6.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 11215,
                        "aisle": "Produce",
                        "image": "garlic.png",
                        "consistency": "SOLID",
                        "name": "garlic",
                        "nameClean": "garlic",
                        "original": "6 cloves finely minced garlic",
                        "originalName": "finely minced garlic",
                        "amount": 6.0,
                        "unit": "cloves",
                        "meta": [
                            "finely minced"
                        ],
                        "measures": {
                            "us": {
                                "amount": 6.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            },
                            "metric": {
                                "amount": 6.0,
                                "unitShort": "cloves",
                                "unitLong": "cloves"
                            }
                        }
                    },
                    {
                        "id": 9152,
                        "aisle": "Produce",
                        "image": "lemon-juice.jpg",
                        "consistency": "LIQUID",
                        "name": "lemon juice",
                        "nameClean": "lemon juice",
                        "original": "1/2 cup lemon juice",
                        "originalName": "lemon juice",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 122.0,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 1012047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "SOLID",
                        "name": "sea salt",
                        "nameClean": "coarse sea salt",
                        "original": "Sea Salt",
                        "originalName": "Sea Salt",
                        "amount": 4.0,
                        "unit": "servings",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 15270,
                        "aisle": "Seafood",
                        "image": "shrimp.png",
                        "consistency": "SOLID",
                        "name": "grilled shrimp seasoned",
                        "nameClean": "shrimp",
                        "original": "10 grilled shrimp seasoned with lemon juice and garlic (jui",
                        "originalName": "grilled shrimp seasoned with lemon juice and garlic (jui",
                        "amount": 10.0,
                        "unit": "",
                        "meta": [
                            "with lemon juice and garlic (jui"
                        ],
                        "measures": {
                            "us": {
                                "amount": 10.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 10.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    }
                ],
                "id": 657689,
                "title": "Quinoa Tabouli with Lemon Garlic Grilled Shrimp",
                "readyInMinutes": 45,
                "servings": 4,
                "sourceUrl": "https://www.foodista.com/recipe/Y4633GSK/quinoa-tabouli-with-lemon-garlic-grilled-shrimp",
                "image": "https://img.spoonacular.com/recipes/657689-556x370.jpg",
                "imageType": "jpg",
                "summary": "Quinoa Tabouli with Lemon Garlic Grilled Shrimp is a side dish that serves 4. One portion of this dish contains about <b>14g of protein</b>, <b>3g of fat</b>, and a total of <b>248 calories</b>. For <b>$2.79 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. It is a good option if you're following a <b>gluten free, dairy free, and pescatarian</b> diet. This recipe is liked by 3 foodies and cooks. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. If you have quinoa, mint leaves, sea salt, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 82%</b>, which is great. Similar recipes include <a href=\"https://spoonacular.com/recipes/grilled-quail-with-pomegranate-orange-bbq-sauce-and-tabouli-with-quinoa-and-shredded-kale-286151\">Grilled Quail with Pomegranate-Orange BBQ Sauce and Tabouli with Quinoan and Shredded Kale</a>, <a href=\"https://spoonacular.com/recipes/lemon-garlic-shrimp-with-quinoa-arugula-peas-556991\">Lemon Garlic Shrimp with Quinoa, Arugula & Peas</a>, and <a href=\"https://spoonacular.com/recipes/lemon-garlic-shrimp-with-radish-and-green-bean-quinoa-1422009\">Lemon-Garlic Shrimp with Radish and Green Bean Quinoa</a>.",
                "cuisines": [],
                "dishTypes": [
                    "side dish"
                ],
                "diets": [
                    "gluten free",
                    "dairy free",
                    "pescatarian"
                ],
                "occasions": [
                    "father's day",
                    "4th of july",
                    "summer"
                ],
                "instructions": "Add salt to water and boil.\nToast Quinoa for a couple of minutes in a dry pan  moving around so it doesnt burn (when you hear it pop, count to 5 and remove immediately)\nAdd Quinoa and cook for 12 minutes on a soft boil, or until all the water is soaked into the Quinoa.\nWhile cooking the Quinoa, add minced garlic to lemon juice, allow to sit.\nRemove Quinoa from heat and add lemon juice and garlic mixture, mix well. Allow to absorb and cool.\nChop all veg into similar sized pieces (I like about 1/4 dice).\nChop parsley and mint finely.\nWhen Quinoa has cooled, mix everything together. Serve with grilled shrimp!",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Add salt to water and boil.",
                                "ingredients": [
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 2,
                                "step": "Toast Quinoa for a couple of minutes in a dry pan  moving around so it doesnt burn (when you hear it pop, count to 5 and remove immediately)",
                                "ingredients": [
                                    {
                                        "id": 20035,
                                        "name": "quinoa",
                                        "localizedName": "quinoa",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-quinoa.png"
                                    },
                                    {
                                        "id": 0,
                                        "name": "sandwich bread",
                                        "localizedName": "sandwich bread",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-bread.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "pop",
                                        "localizedName": "soft drink",
                                        "image": ""
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ]
                            },
                            {
                                "number": 3,
                                "step": "Add Quinoa and cook for 12 minutes on a soft boil, or until all the water is soaked into the Quinoa.",
                                "ingredients": [
                                    {
                                        "id": 20035,
                                        "name": "quinoa",
                                        "localizedName": "quinoa",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-quinoa.png"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                                    }
                                ],
                                "equipment": [],
                                "length": {
                                    "number": 12,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 4,
                                "step": "While cooking the Quinoa, add minced garlic to lemon juice, allow to sit.",
                                "ingredients": [
                                    {
                                        "id": 0,
                                        "name": "minced garlic",
                                        "localizedName": "minced garlic",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                                    },
                                    {
                                        "id": 9152,
                                        "name": "lemon juice",
                                        "localizedName": "lemon juice",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
                                    },
                                    {
                                        "id": 20035,
                                        "name": "quinoa",
                                        "localizedName": "quinoa",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-quinoa.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 5,
                                "step": "Remove Quinoa from heat and add lemon juice and garlic mixture, mix well. Allow to absorb and cool.",
                                "ingredients": [
                                    {
                                        "id": 9152,
                                        "name": "lemon juice",
                                        "localizedName": "lemon juice",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
                                    },
                                    {
                                        "id": 11215,
                                        "name": "garlic",
                                        "localizedName": "garlic",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
                                    },
                                    {
                                        "id": 20035,
                                        "name": "quinoa",
                                        "localizedName": "quinoa",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-quinoa.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 6,
                                "step": "Chop all veg into similar sized pieces (I like about 1/4 dice).",
                                "ingredients": [],
                                "equipment": []
                            },
                            {
                                "number": 7,
                                "step": "Chop parsley and mint finely.",
                                "ingredients": [
                                    {
                                        "id": 11297,
                                        "name": "parsley",
                                        "localizedName": "parsley",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg"
                                    },
                                    {
                                        "id": 2064,
                                        "name": "mint",
                                        "localizedName": "mint",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/mint.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 8,
                                "step": "When Quinoa has cooled, mix everything together.",
                                "ingredients": [
                                    {
                                        "id": 20035,
                                        "name": "quinoa",
                                        "localizedName": "quinoa",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/uncooked-quinoa.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 9,
                                "step": "Serve with grilled shrimp!",
                                "ingredients": [
                                    {
                                        "id": 0,
                                        "name": "grilled shrimp",
                                        "localizedName": "grilled shrimp",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/shrimp.png"
                                    }
                                ],
                                "equipment": []
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 88.68785858154297,
                "spoonacularSourceUrl": "https://spoonacular.com/quinoa-tabouli-with-lemon-garlic-grilled-shrimp-657689"
            },
            {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": false,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 7,
                "gaps": "no",
                "preparationMinutes": 20,
                "cookingMinutes": 50,
                "aggregateLikes": 43,
                "healthScore": 0,
                "creditsText": "Jen West",
                "sourceName": "Pink When",
                "pricePerServing": 27.3,
                "extendedIngredients": [
                    {
                        "id": 1001,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "butter-sliced.jpg",
                        "consistency": "SOLID",
                        "name": "butter",
                        "nameClean": "butter",
                        "original": "1 cup softened butter",
                        "originalName": "softened butter",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [
                            "softened"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 227.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 1001,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "butter-sliced.jpg",
                        "consistency": "SOLID",
                        "name": "butter vanilla bakery emulsion",
                        "nameClean": "butter",
                        "original": "1 teaspoon vanilla or butter vanilla bakery emulsion",
                        "originalName": "vanilla or butter vanilla bakery emulsion",
                        "amount": 1.0,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "tsp",
                                "unitLong": "teaspoon"
                            }
                        }
                    },
                    {
                        "id": 2010,
                        "aisle": "Spices and Seasonings",
                        "image": "cinnamon.jpg",
                        "consistency": "SOLID",
                        "name": "cinnamon",
                        "nameClean": "cinnamon",
                        "original": "1 tablespoon cinnamon",
                        "originalName": "cinnamon",
                        "amount": 1.0,
                        "unit": "tablespoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "Tbsp",
                                "unitLong": "Tbsp"
                            }
                        }
                    },
                    {
                        "id": 1123,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "egg.png",
                        "consistency": "SOLID",
                        "name": "egg",
                        "nameClean": "egg",
                        "original": "1 egg, separated",
                        "originalName": "egg, separated",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [
                            "separated"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 20081,
                        "aisle": "Baking",
                        "image": "flour.png",
                        "consistency": "SOLID",
                        "name": "flour",
                        "nameClean": "wheat flour",
                        "original": "2 cups flour",
                        "originalName": "flour",
                        "amount": 2.0,
                        "unit": "cups",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 250.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 10012142,
                        "aisle": "Nuts",
                        "image": "pecans.jpg",
                        "consistency": "SOLID",
                        "name": "pecans",
                        "nameClean": "pecan pieces",
                        "original": "1 cup chopped pecans",
                        "originalName": "chopped pecans",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 109.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 2047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "SOLID",
                        "name": "salt",
                        "nameClean": "table salt",
                        "original": "½ teaspoon salt",
                        "originalName": "salt",
                        "amount": 0.5,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.5,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 19335,
                        "aisle": "Baking",
                        "image": "sugar-in-bowl.png",
                        "consistency": "SOLID",
                        "name": "sugar",
                        "nameClean": "sugar",
                        "original": "1 cup sugar",
                        "originalName": "sugar",
                        "amount": 1.0,
                        "unit": "cup",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "cup",
                                "unitLong": "cup"
                            },
                            "metric": {
                                "amount": 200.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    }
                ],
                "id": 715389,
                "title": "Cinnamon Nut Squares",
                "readyInMinutes": 70,
                "servings": 24,
                "sourceUrl": "https://www.pinkwhen.com/cinnamon-nut-squares/",
                "image": "https://img.spoonacular.com/recipes/715389-556x370.jpg",
                "imageType": "jpg",
                "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your repertoire, Cinnamon Nut Squares might be a recipe you should try. For <b>27 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. One serving contains <b>174 calories</b>, <b>2g of protein</b>, and <b>11g of fat</b>. This recipe serves 24. Head to the store and pick up egg, sugar, pecans, and a few other things to make it today. It works well as a hor d'oeuvre. 43 people found this recipe to be yummy and satisfying. From preparation to the plate, this recipe takes roughly <b>1 hour and 10 minutes</b>. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 16%</b>, which is not so spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/honey-nut-squares-152998\">Honey Nut Squares</a>, <a href=\"https://spoonacular.com/recipes/toffee-nut-squares-218059\">Toffee nut squares</a>, and <a href=\"https://spoonacular.com/recipes/salted-nut-squares-406338\">Salted Nut Squares</a>.",
                "cuisines": [],
                "dishTypes": [
                    "antipasti",
                    "starter",
                    "snack",
                    "appetizer",
                    "antipasto",
                    "hor d'oeuvre"
                ],
                "diets": [
                    "lacto ovo vegetarian"
                ],
                "occasions": [],
                "instructions": "Preheat oven to 300 degrees.Spray an oblong baking pan with baking spray. I used a 14x8x2 pan.Cream butter; gradually add sugar and continue beating until mixture is light and fluffy.Add egg yolk, flour, cinnamon, salt and vanilla. Mix well; dough will be thick.Press dough evenly into prepared pan; crust will not be very thick.Lightly beat egg white and brush over top of dough.Sprinkle nuts evenly over dough and lightly press nuts into dough.Bake about 50 minutes or until edges are golden.Remove from oven and cut into square while still hot. Let cool and remove from pan with a spatula.Store in a tightly covered container; square will keep at a week.",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Preheat oven to 300 degrees.Spray an oblong baking pan with baking spray. I used a 14x8x2 pan.Cream butter; gradually add sugar and continue beating until mixture is light and fluffy.",
                                "ingredients": [
                                    {
                                        "id": 0,
                                        "name": "baking spray",
                                        "localizedName": "baking spray",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/cooking-spray.png"
                                    },
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    },
                                    {
                                        "id": 1053,
                                        "name": "cream",
                                        "localizedName": "cream",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg"
                                    },
                                    {
                                        "id": 19335,
                                        "name": "sugar",
                                        "localizedName": "sugar",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404646,
                                        "name": "baking pan",
                                        "localizedName": "baking pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/roasting-pan.jpg"
                                    },
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Add egg yolk, flour, cinnamon, salt and vanilla.",
                                "ingredients": [
                                    {
                                        "id": 2010,
                                        "name": "cinnamon",
                                        "localizedName": "cinnamon",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
                                    },
                                    {
                                        "id": 1125,
                                        "name": "egg yolk",
                                        "localizedName": "egg yolk",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg-yolk.jpg"
                                    },
                                    {
                                        "id": 1052050,
                                        "name": "vanilla",
                                        "localizedName": "vanilla",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg"
                                    },
                                    {
                                        "id": 20081,
                                        "name": "all purpose flour",
                                        "localizedName": "all purpose flour",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                                    },
                                    {
                                        "id": 2047,
                                        "name": "salt",
                                        "localizedName": "salt",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 3,
                                "step": "Mix well; dough will be thick.Press dough evenly into prepared pan; crust will not be very thick.Lightly beat egg white and brush over top of dough.",
                                "ingredients": [
                                    {
                                        "id": 1124,
                                        "name": "egg whites",
                                        "localizedName": "egg whites",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg-white.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "crust",
                                        "localizedName": "crust",
                                        "image": ""
                                    },
                                    {
                                        "id": 0,
                                        "name": "dough",
                                        "localizedName": "dough",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/pizza-dough"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ]
                            },
                            {
                                "number": 4,
                                "step": "Sprinkle nuts evenly over dough and lightly press nuts into dough.",
                                "ingredients": [
                                    {
                                        "id": 0,
                                        "name": "dough",
                                        "localizedName": "dough",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/pizza-dough"
                                    },
                                    {
                                        "id": 12135,
                                        "name": "nuts",
                                        "localizedName": "nuts",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/nuts-mixed.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 5,
                                "step": "Bake about 50 minutes or until edges are golden.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 50,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 6,
                                "step": "Remove from oven and cut into square while still hot.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 7,
                                "step": "Let cool and remove from pan with a spatula.Store in a tightly covered container; square will keep at a week.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404642,
                                        "name": "spatula",
                                        "localizedName": "spatula",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                                    },
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 3.2731831073760986,
                "spoonacularSourceUrl": "https://spoonacular.com/cinnamon-nut-squares-715389"
            },
            {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": true,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 9,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 5,
                "healthScore": 7,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 58.83,
                "extendedIngredients": [
                    {
                        "id": 18079,
                        "aisle": "Pasta and Rice",
                        "image": "breadcrumbs.jpg",
                        "consistency": "SOLID",
                        "name": "breadcrumbs",
                        "nameClean": "breadcrumbs",
                        "original": "4 handfuls fresh breadcrumbs",
                        "originalName": "fresh breadcrumbs",
                        "amount": 4.0,
                        "unit": "handfuls",
                        "meta": [
                            "fresh"
                        ],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "handfuls",
                                "unitLong": "handfuls"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "handfuls",
                                "unitLong": "handfuls"
                            }
                        }
                    },
                    {
                        "id": 11156,
                        "aisle": "Produce",
                        "image": "fresh-chives.jpg",
                        "consistency": "SOLID",
                        "name": "dessert spoon chives",
                        "nameClean": "chives",
                        "original": "1 dessert spoon finely chopped fresh chives",
                        "originalName": "dessert spoon finely chopped fresh chives",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [
                            "fresh",
                            "finely chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 1123,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "egg.png",
                        "consistency": "SOLID",
                        "name": "eggs",
                        "nameClean": "egg",
                        "original": "5 medium eggs",
                        "originalName": "eggs",
                        "amount": 5.0,
                        "unit": "medium",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 5.0,
                                "unitShort": "medium",
                                "unitLong": "mediums"
                            },
                            "metric": {
                                "amount": 5.0,
                                "unitShort": "medium",
                                "unitLong": "mediums"
                            }
                        }
                    },
                    {
                        "id": 10211297,
                        "aisle": "Produce",
                        "image": "parsley.jpg",
                        "consistency": "SOLID",
                        "name": "dessert spoon flat leaf parsley",
                        "nameClean": "fresh flat leaf parsley",
                        "original": "1 dessert spoon finely chopped fresh flat leaf parsley",
                        "originalName": "dessert spoon finely chopped fresh flat leaf parsley",
                        "amount": 1.0,
                        "unit": "",
                        "meta": [
                            "fresh",
                            "finely chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "",
                                "unitLong": ""
                            }
                        }
                    },
                    {
                        "id": 1002030,
                        "aisle": "Spices and Seasonings",
                        "image": "pepper.jpg",
                        "consistency": "SOLID",
                        "name": "salt and pepper",
                        "nameClean": "black pepper",
                        "original": "Salt and freshly ground black pepper",
                        "originalName": "Salt and freshly ground black pepper",
                        "amount": 4.0,
                        "unit": "servings",
                        "meta": [
                            "black",
                            "freshly ground"
                        ],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    },
                    {
                        "id": 4669,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "vegetable-oil.jpg",
                        "consistency": "LIQUID",
                        "name": "vegetable oil",
                        "nameClean": "vegetable oil",
                        "original": "vegetable oil for frying",
                        "originalName": "vegetable oil for frying",
                        "amount": 4.0,
                        "unit": "servings",
                        "meta": [
                            "for frying"
                        ],
                        "measures": {
                            "us": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            },
                            "metric": {
                                "amount": 4.0,
                                "unitShort": "servings",
                                "unitLong": "servings"
                            }
                        }
                    }
                ],
                "id": 664697,
                "title": "Vegetarian Scotch Eggs",
                "readyInMinutes": 45,
                "servings": 4,
                "sourceUrl": "http://www.foodista.com/recipe/W5KMZ6VZ/vegetarian-scotch-eggs",
                "image": "https://img.spoonacular.com/recipes/664697-556x370.jpg",
                "imageType": "jpg",
                "summary": "Vegetarian Scotch Eggs takes approximately <b>45 minutes</b> from beginning to end. This dairy free and lacto ovo vegetarian recipe serves 4 and costs <b>59 cents per serving</b>. One serving contains <b>317 calories</b>, <b>14g of protein</b>, and <b>11g of fat</b>. 5 people have made this recipe and would make it again. It is brought to you by Foodista. Not a lot of people really liked this hor d'oeuvre. Head to the store and pick up vegetable oil, dessert spoon chives, eggs, and a few other things to make it today. With a spoonacular <b>score of 46%</b>, this dish is solid. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/vegetarian-scotch-eggs-919229\">Vegetarian Scotch eggs</a>, <a href=\"https://spoonacular.com/recipes/scotch-eggs-659581\">Scotch Eggs</a>, and <a href=\"https://spoonacular.com/recipes/scotch-eggs-1014960\">Scotch Eggs</a>.",
                "cuisines": [],
                "dishTypes": [
                    "antipasti",
                    "starter",
                    "snack",
                    "appetizer",
                    "antipasto",
                    "hor d'oeuvre"
                ],
                "diets": [
                    "dairy free",
                    "lacto ovo vegetarian"
                ],
                "occasions": [],
                "instructions": "<ol><li>Preheat the oven to 325F/170C.</li><li>Place 4 of the eggs in a pan and cover completely with cold water.</li><li>Bring to the boil then reduce the heat and simmer for 4 minutes.</li><li>Cool in cold water before peeling.</li><li>Whisk the remaining egg.</li><li>Combine the chopped herbs with the breadcrumbs and season.</li><li>Gently roll each boiled egg in flour, then the egg mixture then the breadcrumbs.</li><li>Put the oil in a pan to a depth of 2 inches/5 cm and heat.</li><li>Fry the eggs until golden, turning occasionally so as not to burn - about 2-3 minutes.</li><li>Remove the eggs with a slotted spoon and place in the oven in an ovenproof dish to heat through for about 3-4 minutes.</li></ol>",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Preheat the oven to 325F/170C.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        "temperature": {
                                            "number": 325.0,
                                            "unit": "Fahrenheit"
                                        }
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Place 4 of the eggs in a pan and cover completely with cold water.Bring to the boil then reduce the heat and simmer for 4 minutes.Cool in cold water before peeling.",
                                "ingredients": [
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                                    },
                                    {
                                        "id": 1123,
                                        "name": "egg",
                                        "localizedName": "egg",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ],
                                "length": {
                                    "number": 4,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 3,
                                "step": "Whisk the remaining egg.",
                                "ingredients": [
                                    {
                                        "id": 1123,
                                        "name": "egg",
                                        "localizedName": "egg",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404661,
                                        "name": "whisk",
                                        "localizedName": "whisk",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                                    }
                                ]
                            },
                            {
                                "number": 4,
                                "step": "Combine the chopped herbs with the breadcrumbs and season.Gently roll each boiled egg in flour, then the egg mixture then the breadcrumbs.",
                                "ingredients": [
                                    {
                                        "id": 18079,
                                        "name": "breadcrumbs",
                                        "localizedName": "breadcrumbs",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
                                    },
                                    {
                                        "id": 20081,
                                        "name": "all purpose flour",
                                        "localizedName": "all purpose flour",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/flour.png"
                                    },
                                    {
                                        "id": 1002044,
                                        "name": "herbs",
                                        "localizedName": "herbs",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/mixed-fresh-herbs.jpg"
                                    },
                                    {
                                        "id": 0,
                                        "name": "roll",
                                        "localizedName": "roll",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dinner-yeast-rolls.jpg"
                                    },
                                    {
                                        "id": 1123,
                                        "name": "egg",
                                        "localizedName": "egg",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 5,
                                "step": "Put the oil in a pan to a depth of 2 inches/5 cm and heat.Fry the eggs until golden, turning occasionally so as not to burn - about 2-3 minutes.",
                                "ingredients": [
                                    {
                                        "id": 1123,
                                        "name": "egg",
                                        "localizedName": "egg",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ],
                                "length": {
                                    "number": 3,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 6,
                                "step": "Remove the eggs with a slotted spoon and place in the oven in an ovenproof dish to heat through for about 3-4 minutes.",
                                "ingredients": [
                                    {
                                        "id": 1123,
                                        "name": "egg",
                                        "localizedName": "egg",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404636,
                                        "name": "slotted spoon",
                                        "localizedName": "slotted spoon",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/slotted-spoon.jpg"
                                    },
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 4,
                                    "unit": "minutes"
                                }
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 51.74531936645508,
                "spoonacularSourceUrl": "https://spoonacular.com/vegetarian-scotch-eggs-664697"
            },
            {
                "vegetarian": true,
                "vegan": false,
                "glutenFree": false,
                "dairyFree": false,
                "veryHealthy": false,
                "cheap": false,
                "veryPopular": false,
                "sustainable": false,
                "lowFodmap": false,
                "weightWatcherSmartPoints": 5,
                "gaps": "no",
                "preparationMinutes": -1,
                "cookingMinutes": -1,
                "aggregateLikes": 10,
                "healthScore": 4,
                "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                "license": "CC BY 3.0",
                "sourceName": "Foodista",
                "pricePerServing": 59.0,
                "extendedIngredients": [
                    {
                        "id": 4053,
                        "aisle": "Oil, Vinegar, Salad Dressing",
                        "image": "olive-oil.jpg",
                        "consistency": "LIQUID",
                        "name": "olive oil",
                        "nameClean": "olive oil",
                        "original": "1/2 cup (120 ml) olive oil",
                        "originalName": "1/2 cup olive oil",
                        "amount": 120.0,
                        "unit": "ml",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 3.705,
                                "unitShort": "fl. oz",
                                "unitLong": "fl. ozs"
                            },
                            "metric": {
                                "amount": 120.0,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    },
                    {
                        "id": 11291,
                        "aisle": "Produce",
                        "image": "spring-onions.jpg",
                        "consistency": "SOLID",
                        "name": "scallions",
                        "nameClean": "spring onions",
                        "original": "1 bunch chopped scallions, white and green parts",
                        "originalName": "chopped scallions, white and green parts",
                        "amount": 1.0,
                        "unit": "bunch",
                        "meta": [
                            "white",
                            "green",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.0,
                                "unitShort": "bunch",
                                "unitLong": "bunch"
                            },
                            "metric": {
                                "amount": 1.0,
                                "unitShort": "bunch",
                                "unitLong": "bunch"
                            }
                        }
                    },
                    {
                        "id": 11463,
                        "aisle": "Frozen",
                        "image": "spinach-frozen.jpg",
                        "consistency": "SOLID",
                        "name": "spinach",
                        "nameClean": "frozen spinach",
                        "original": "20 ounces (560 g) frozen chopped spinach, defrosted",
                        "originalName": "20 ounces frozen chopped spinach, defrosted",
                        "amount": 560.0,
                        "unit": "g",
                        "meta": [
                            "frozen",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 1.235,
                                "unitShort": "lb",
                                "unitLong": "pounds"
                            },
                            "metric": {
                                "amount": 560.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 2045,
                        "aisle": "Produce",
                        "image": "dill.jpg",
                        "consistency": "SOLID",
                        "name": "dill",
                        "nameClean": "dill",
                        "original": "2 tablespoons chopped fresh dill",
                        "originalName": "chopped fresh dill",
                        "amount": 2.0,
                        "unit": "tablespoons",
                        "meta": [
                            "fresh",
                            "chopped"
                        ],
                        "measures": {
                            "us": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            },
                            "metric": {
                                "amount": 2.0,
                                "unitShort": "Tbsps",
                                "unitLong": "Tbsps"
                            }
                        }
                    },
                    {
                        "id": 1123,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "egg.png",
                        "consistency": "SOLID",
                        "name": "eggs",
                        "nameClean": "egg",
                        "original": "3 extra-large eggs, lightly beaten",
                        "originalName": "eggs, lightly beaten",
                        "amount": 3.0,
                        "unit": "extra large",
                        "meta": [
                            "lightly beaten"
                        ],
                        "measures": {
                            "us": {
                                "amount": 3.0,
                                "unitShort": "extra large",
                                "unitLong": "extra larges"
                            },
                            "metric": {
                                "amount": 3.0,
                                "unitShort": "extra large",
                                "unitLong": "extra larges"
                            }
                        }
                    },
                    {
                        "id": 1019,
                        "aisle": "Cheese",
                        "image": "feta.png",
                        "consistency": "SOLID",
                        "name": "feta cheese",
                        "nameClean": "feta cheese",
                        "original": "7 ounces (200 g) feta cheese, crumbled",
                        "originalName": "ounces feta cheese, crumbled",
                        "amount": 200.0,
                        "unit": "g",
                        "meta": [
                            "crumbled"
                        ],
                        "measures": {
                            "us": {
                                "amount": 7.055,
                                "unitShort": "oz",
                                "unitLong": "ounces"
                            },
                            "metric": {
                                "amount": 200.0,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 1082047,
                        "aisle": "Spices and Seasonings",
                        "image": "salt.jpg",
                        "consistency": "SOLID",
                        "name": "kosher salt",
                        "nameClean": "kosher salt",
                        "original": "1/4 teaspoon kosher salt",
                        "originalName": "kosher salt",
                        "amount": 0.25,
                        "unit": "teaspoon",
                        "meta": [],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.25,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 1002030,
                        "aisle": "Spices and Seasonings",
                        "image": "pepper.jpg",
                        "consistency": "SOLID",
                        "name": "pepper",
                        "nameClean": "black pepper",
                        "original": "1/4 teaspoon freshly ground black pepper",
                        "originalName": "freshly ground black pepper",
                        "amount": 0.25,
                        "unit": "teaspoon",
                        "meta": [
                            "black",
                            "freshly ground"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.25,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            },
                            "metric": {
                                "amount": 0.25,
                                "unitShort": "tsps",
                                "unitLong": "teaspoons"
                            }
                        }
                    },
                    {
                        "id": 18338,
                        "aisle": "Refrigerated",
                        "image": "filo-dough.png",
                        "consistency": "SOLID",
                        "name": "phyllo dough",
                        "nameClean": "filo pastry",
                        "original": "40 sheets (1 box) frozen phyllo dough (such as Pepperidge Farm), defrosted overnight in the refrigerator",
                        "originalName": "(1 box) frozen phyllo dough (such as Pepperidge Farm), defrosted overnight in the refrigerator",
                        "amount": 40.0,
                        "unit": "sheets",
                        "meta": [
                            "frozen",
                            "(1 box)",
                            "(such as Pepperidge Farm)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 40.0,
                                "unitShort": "sheets",
                                "unitLong": "sheets"
                            },
                            "metric": {
                                "amount": 40.0,
                                "unitShort": "sheets",
                                "unitLong": "sheets"
                            }
                        }
                    },
                    {
                        "id": 1145,
                        "aisle": "Milk, Eggs, Other Dairy",
                        "image": "butter-sliced.jpg",
                        "consistency": "SOLID",
                        "name": "butter",
                        "nameClean": "unsalted butter",
                        "original": "1/2 pound (2 sticks, 226 g)) unsalted butter, melted",
                        "originalName": "(2 sticks, 226 g)) unsalted butter, melted",
                        "amount": 0.5,
                        "unit": "pound",
                        "meta": [
                            "unsalted",
                            "melted",
                            "(2 sticks, 226 g)"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "lb",
                                "unitLong": "pounds"
                            },
                            "metric": {
                                "amount": 226.796,
                                "unitShort": "g",
                                "unitLong": "grams"
                            }
                        }
                    },
                    {
                        "id": 18079,
                        "aisle": "Pasta and Rice",
                        "image": "breadcrumbs.jpg",
                        "consistency": "SOLID",
                        "name": "breadcrumbs",
                        "nameClean": "breadcrumbs",
                        "original": "1/2 cup plain dry breadcrumbs",
                        "originalName": "plain dry breadcrumbs",
                        "amount": 0.5,
                        "unit": "cup",
                        "meta": [
                            "plain",
                            "dry"
                        ],
                        "measures": {
                            "us": {
                                "amount": 0.5,
                                "unitShort": "cups",
                                "unitLong": "cups"
                            },
                            "metric": {
                                "amount": 54.0,
                                "unitShort": "ml",
                                "unitLong": "milliliters"
                            }
                        }
                    }
                ],
                "id": 660842,
                "title": "Spanakopita Cups",
                "readyInMinutes": 45,
                "servings": 36,
                "sourceUrl": "https://www.foodista.com/recipe/747T8S42/spanakopita-cups",
                "image": "https://img.spoonacular.com/recipes/660842-556x370.jpg",
                "imageType": "jpg",
                "summary": "Spanakopita Cups is a Mediterranean recipe that serves 36. One portion of this dish contains approximately <b>4g of protein</b>, <b>11g of fat</b>, and a total of <b>167 calories</b>. For <b>59 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. It works well as an inexpensive hor d'oeuvre. 10 people have made this recipe and would make it again. This recipe from Foodista requires kosher salt, feta cheese, spinach, and breadcrumbs. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 36%</b>. This score is not so great. <a href=\"https://spoonacular.com/recipes/spanakopita-543953\">Spanakopita</a>, <a href=\"https://spoonacular.com/recipes/spanakopita-69627\">Spanakopita</a>, and <a href=\"https://spoonacular.com/recipes/spanakopita-1154366\">Spanakopita</a> are very similar to this recipe.",
                "cuisines": [
                    "Mediterranean",
                    "European",
                    "Greek"
                ],
                "dishTypes": [
                    "side dish",
                    "antipasti",
                    "starter",
                    "snack",
                    "appetizer",
                    "antipasto",
                    "hor d'oeuvre"
                ],
                "diets": [
                    "lacto ovo vegetarian"
                ],
                "occasions": [],
                "instructions": "Preheat your oven to 400 F.\nHeat oil in a pan on medium heat and add the scallions. Cook for about 5 minutes.\nSqueeze most of the water out of the spinach and mix with scallions, dill, eggs and feta cheese. Season the mixture with salt and pepper.\nKeep the phyllo dough sheets covered with a damp kitchen towel.\nUnfold 1 sheet of the phyllo dough. Brush the sheet with melted butter and sprinkle with breadcrumbs.\nRepeat the process by laying a second sheet of phyllo dough over the first sheet, brush it with melted butter and sprinkle with breadcrumbs until 4 sheets have been used.\nCut circles out of the dough that fit as a shell into mini muffin pans. Place the phyllo circles into the pan molds and fill with the spinach mixture.\nRepeat until all the spinach mixture is used.\nBake the spanakopita cups for 17 mins.",
                "analyzedInstructions": [
                    {
                        "name": "",
                        "steps": [
                            {
                                "number": 1,
                                "step": "Preheat your oven to 400 F.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                                        "temperature": {
                                            "number": 400.0,
                                            "unit": "Fahrenheit"
                                        }
                                    }
                                ]
                            },
                            {
                                "number": 2,
                                "step": "Heat oil in a pan on medium heat and add the scallions. Cook for about 5 minutes.",
                                "ingredients": [
                                    {
                                        "id": 11291,
                                        "name": "green onions",
                                        "localizedName": "green onions",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
                                    },
                                    {
                                        "id": 4582,
                                        "name": "cooking oil",
                                        "localizedName": "cooking oil",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ],
                                "length": {
                                    "number": 5,
                                    "unit": "minutes"
                                }
                            },
                            {
                                "number": 3,
                                "step": "Squeeze most of the water out of the spinach and mix with scallions, dill, eggs and feta cheese. Season the mixture with salt and pepper.",
                                "ingredients": [
                                    {
                                        "id": 1102047,
                                        "name": "salt and pepper",
                                        "localizedName": "salt and pepper",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                                    },
                                    {
                                        "id": 1019,
                                        "name": "feta cheese",
                                        "localizedName": "feta cheese",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/feta.png"
                                    },
                                    {
                                        "id": 11291,
                                        "name": "green onions",
                                        "localizedName": "green onions",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
                                    },
                                    {
                                        "id": 10011457,
                                        "name": "spinach",
                                        "localizedName": "spinach",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
                                    },
                                    {
                                        "id": 14412,
                                        "name": "water",
                                        "localizedName": "water",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/water.png"
                                    },
                                    {
                                        "id": 2045,
                                        "name": "dill",
                                        "localizedName": "dill",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dill.jpg"
                                    },
                                    {
                                        "id": 1123,
                                        "name": "egg",
                                        "localizedName": "egg",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 4,
                                "step": "Keep the phyllo dough sheets covered with a damp kitchen towel.",
                                "ingredients": [
                                    {
                                        "id": 18338,
                                        "name": "filo pastry",
                                        "localizedName": "filo pastry",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/filo-dough.png"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 221439,
                                        "name": "kitchen towels",
                                        "localizedName": "kitchen towels",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/dish-towel.jpg"
                                    }
                                ]
                            },
                            {
                                "number": 5,
                                "step": "Unfold 1 sheet of the phyllo dough.",
                                "ingredients": [
                                    {
                                        "id": 18338,
                                        "name": "filo pastry",
                                        "localizedName": "filo pastry",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/filo-dough.png"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 6,
                                "step": "Brush the sheet with melted butter and sprinkle with breadcrumbs.",
                                "ingredients": [
                                    {
                                        "id": 18079,
                                        "name": "breadcrumbs",
                                        "localizedName": "breadcrumbs",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
                                    },
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 7,
                                "step": "Repeat the process by laying a second sheet of phyllo dough over the first sheet, brush it with melted butter and sprinkle with breadcrumbs until 4 sheets have been used.",
                                "ingredients": [
                                    {
                                        "id": 18338,
                                        "name": "filo pastry",
                                        "localizedName": "filo pastry",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/filo-dough.png"
                                    },
                                    {
                                        "id": 18079,
                                        "name": "breadcrumbs",
                                        "localizedName": "breadcrumbs",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
                                    },
                                    {
                                        "id": 1001,
                                        "name": "butter",
                                        "localizedName": "butter",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 8,
                                "step": "Cut circles out of the dough that fit as a shell into mini muffin pans.",
                                "ingredients": [
                                    {
                                        "id": 0,
                                        "name": "dough",
                                        "localizedName": "dough",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/pizza-dough"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 9,
                                "step": "Place the phyllo circles into the pan molds and fill with the spinach mixture.",
                                "ingredients": [
                                    {
                                        "id": 10011457,
                                        "name": "spinach",
                                        "localizedName": "spinach",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
                                    }
                                ],
                                "equipment": [
                                    {
                                        "id": 404645,
                                        "name": "frying pan",
                                        "localizedName": "frying pan",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                                    }
                                ]
                            },
                            {
                                "number": 10,
                                "step": "Repeat until all the spinach mixture is used.",
                                "ingredients": [
                                    {
                                        "id": 10011457,
                                        "name": "spinach",
                                        "localizedName": "spinach",
                                        "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
                                    }
                                ],
                                "equipment": []
                            },
                            {
                                "number": 11,
                                "step": "Bake the spanakopita cups for 17 mins.",
                                "ingredients": [],
                                "equipment": [
                                    {
                                        "id": 404784,
                                        "name": "oven",
                                        "localizedName": "oven",
                                        "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                                    }
                                ],
                                "length": {
                                    "number": 17,
                                    "unit": "minutes"
                                }
                            }
                        ]
                    }
                ],
                "originalId": null,
                "spoonacularScore": 45.00754928588867,
                "spoonacularSourceUrl": "https://spoonacular.com/spanakopita-cups-660842"
            }
        ]
    }

    // myRecipes.value = [
    //     {
    //     "vegetarian": true,
    //     "vegan": false,
    //     "glutenFree": true,
    //     "dairyFree": false,
    //     "veryHealthy": false,
    //     "cheap": false,
    //     "veryPopular": false,
    //     "sustainable": false,
    //     "lowFodmap": false,
    //     "weightWatcherSmartPoints": 14,
    //     "gaps": "no",
    //     "preparationMinutes": -1,
    //     "cookingMinutes": -1,
    //     "aggregateLikes": 3,
    //     "healthScore": 1,
    //     "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //     "license": "CC BY 3.0",
    //     "sourceName": "Foodista",
    //     "pricePerServing": 125.13,
    //     "extendedIngredients": [
    //         {
    //             "id": 1145,
    //             "aisle": "Milk, Eggs, Other Dairy",
    //             "image": "butter-sliced.jpg",
    //             "consistency": "SOLID",
    //             "name": "butter",
    //             "nameClean": "unsalted butter",
    //             "original": "8 tablespoons (1 stick) unsalted butter melted",
    //             "originalName": "(1 stick) unsalted butter melted",
    //             "amount": 8.0,
    //             "unit": "tablespoons",
    //             "meta": [
    //                 "unsalted",
    //                 "melted",
    //                 "(1 stick)"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 8.0,
    //                     "unitShort": "Tbsps",
    //                     "unitLong": "Tbsps"
    //                 },
    //                 "metric": {
    //                     "amount": 8.0,
    //                     "unitShort": "Tbsps",
    //                     "unitLong": "Tbsps"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11215,
    //             "aisle": "Produce",
    //             "image": "garlic.png",
    //             "consistency": "SOLID",
    //             "name": "garlic",
    //             "nameClean": "garlic",
    //             "original": "1 clove garlic crushed with a little salt",
    //             "originalName": "garlic crushed with a little salt",
    //             "amount": 1.0,
    //             "unit": "clove",
    //             "meta": [
    //                 "with a little salt",
    //                 "crushed"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "clove",
    //                     "unitLong": "clove"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "clove",
    //                     "unitLong": "clove"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 19296,
    //             "aisle": "Nut butters, Jams, and Honey",
    //             "image": "honey.png",
    //             "consistency": "LIQUID",
    //             "name": "honey",
    //             "nameClean": "honey",
    //             "original": "1 tablespoon honey",
    //             "originalName": "honey",
    //             "amount": 1.0,
    //             "unit": "tablespoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "Tbsp",
    //                     "unitLong": "Tbsp"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "Tbsp",
    //                     "unitLong": "Tbsp"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 2009,
    //             "aisle": "Spices and Seasonings",
    //             "image": "chili-powder.jpg",
    //             "consistency": "SOLID",
    //             "name": "chilli powder",
    //             "nameClean": "chili powder",
    //             "original": "1 teaspoon chilli powder",
    //             "originalName": "chilli powder",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 1012014,
    //             "aisle": "Spices and Seasonings",
    //             "image": "ground-cumin.jpg",
    //             "consistency": "SOLID",
    //             "name": "ground cumin",
    //             "nameClean": "ground cumin",
    //             "original": "1 teaspoon ground cumin",
    //             "originalName": "ground cumin",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 1002013,
    //             "aisle": "Spices and Seasonings",
    //             "image": "ground-coriander.jpg",
    //             "consistency": "SOLID",
    //             "name": "ground coriander",
    //             "nameClean": "ground coriander",
    //             "original": "1 teaspoon ground coriander",
    //             "originalName": "ground coriander",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 1002030,
    //             "aisle": "Spices and Seasonings",
    //             "image": "pepper.jpg",
    //             "consistency": "SOLID",
    //             "name": "ground pepper",
    //             "nameClean": "black pepper",
    //             "original": "1 teaspoon ground black pepper",
    //             "originalName": "ground black pepper",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [
    //                 "black"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11167,
    //             "aisle": "Produce",
    //             "image": "corn-on-the-cob.jpg",
    //             "consistency": "SOLID",
    //             "name": "corn cobs",
    //             "nameClean": "corn on the cob",
    //             "original": "4 corn cobs, husks removed",
    //             "originalName": "corn cobs, husks removed",
    //             "amount": 4.0,
    //             "unit": "",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 4.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 },
    //                 "metric": {
    //                     "amount": 4.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 }
    //             }
    //         }
    //     ],
    //     "id": 634300,
    //     "title": "Barbecued Corn on the Cob With Spiced Butter",
    //     "readyInMinutes": 45,
    //     "servings": 4,
    //     "sourceUrl": "https://www.foodista.com/recipe/BNKJW2JQ/barbecued-corn-on-the-cob-with-spiced-butter",
    //     "image": "https://img.spoonacular.com/recipes/634300-556x370.jpg",
    //     "imageType": "jpg",
    //     "summary": "Barbecued Corn on the Cob With Spiced Butter takes roughly <b>45 minutes</b> from beginning to end. This recipe makes 4 servings with <b>301 calories</b>, <b>4g of protein</b>, and <b>24g of fat</b> each. For <b>$1.25 per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. It works well as a side dish. Head to the store and pick up ground cumin, garlic, honey, and a few other things to make it today. It is a <b>reasonably priced</b> recipe for fans of American food. Not a lot of people made this recipe, and 3 would say it hit the spot. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 21%</b>, which is rather bad. <a href=\"https://spoonacular.com/recipes/barbecued-corn-on-the-cob-with-bacon-and-chili-butter-148077\">Barbecued Corn on the Cob with Bacon and Chili Butter</a>, <a href=\"https://spoonacular.com/recipes/curry-butter-corn-on-the-cob-798344\">Curry Butter Corn on the Cob</a>, and <a href=\"https://spoonacular.com/recipes/corn-on-the-cob-with-smoked-butter-338713\">Corn on the Cob with Smoked Butter</a> are very similar to this recipe.",
    //     "cuisines": [
    //         "American"
    //     ],
    //     "dishTypes": [
    //         "side dish"
    //     ],
    //     "diets": [
    //         "gluten free",
    //         "lacto ovo vegetarian"
    //     ],
    //     "occasions": [],
    //     "instructions": "Combine the butter, garlic, honey, and spices in a small saucepan and cook over a gentle heat.\nBrush corn with the flavored butter and cook on the barbecue or under the grill turning regularly until golden.\nBaste continually during the cooking process.",
    //     "analyzedInstructions": [
    //         {
    //             "name": "",
    //             "steps": [
    //                 {
    //                     "number": 1,
    //                     "step": "Combine the butter, garlic, honey, and spices in a small saucepan and cook over a gentle heat.",
    //                     "ingredients": [
    //                         {
    //                             "id": 1001,
    //                             "name": "butter",
    //                             "localizedName": "butter",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
    //                         },
    //                         {
    //                             "id": 11215,
    //                             "name": "garlic",
    //                             "localizedName": "garlic",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
    //                         },
    //                         {
    //                             "id": 2035,
    //                             "name": "spices",
    //                             "localizedName": "spices",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/spices.png"
    //                         },
    //                         {
    //                             "id": 19296,
    //                             "name": "honey",
    //                             "localizedName": "honey",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/honey.png"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404669,
    //                             "name": "sauce pan",
    //                             "localizedName": "sauce pan",
    //                             "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "number": 2,
    //                     "step": "Brush corn with the flavored butter and cook on the barbecue or under the grill turning regularly until golden.",
    //                     "ingredients": [
    //                         {
    //                             "id": 1021001,
    //                             "name": "flavored butter",
    //                             "localizedName": "flavored butter",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
    //                         },
    //                         {
    //                             "id": 11168,
    //                             "name": "corn",
    //                             "localizedName": "corn",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/corn.png"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404706,
    //                             "name": "grill",
    //                             "localizedName": "grill",
    //                             "image": "https://spoonacular.com/cdn/equipment_100x100/grill.jpg"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "number": 3,
    //                     "step": "Baste continually during the cooking process.",
    //                     "ingredients": [],
    //                     "equipment": []
    //                 }
    //             ]
    //         }
    //     ],
    //     "originalId": null,
    //     "spoonacularScore": 28.163227081298828,
    //     "spoonacularSourceUrl": "https://spoonacular.com/barbecued-corn-on-the-cob-with-spiced-butter-634300"
    //     },
    //     {
    //     "vegetarian": true,
    //     "vegan": false,
    //     "glutenFree": true,
    //     "dairyFree": false,
    //     "veryHealthy": false,
    //     "cheap": false,
    //     "veryPopular": false,
    //     "sustainable": false,
    //     "lowFodmap": false,
    //     "weightWatcherSmartPoints": 14,
    //     "gaps": "no",
    //     "preparationMinutes": -1,
    //     "cookingMinutes": -1,
    //     "aggregateLikes": 3,
    //     "healthScore": 1,
    //     "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //     "license": "CC BY 3.0",
    //     "sourceName": "Foodista",
    //     "pricePerServing": 125.13,
    //     "extendedIngredients": [
    //         {
    //             "id": 1145,
    //             "aisle": "Milk, Eggs, Other Dairy",
    //             "image": "butter-sliced.jpg",
    //             "consistency": "SOLID",
    //             "name": "butter",
    //             "nameClean": "unsalted butter",
    //             "original": "8 tablespoons (1 stick) unsalted butter melted",
    //             "originalName": "(1 stick) unsalted butter melted",
    //             "amount": 8.0,
    //             "unit": "tablespoons",
    //             "meta": [
    //                 "unsalted",
    //                 "melted",
    //                 "(1 stick)"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 8.0,
    //                     "unitShort": "Tbsps",
    //                     "unitLong": "Tbsps"
    //                 },
    //                 "metric": {
    //                     "amount": 8.0,
    //                     "unitShort": "Tbsps",
    //                     "unitLong": "Tbsps"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11215,
    //             "aisle": "Produce",
    //             "image": "garlic.png",
    //             "consistency": "SOLID",
    //             "name": "garlic",
    //             "nameClean": "garlic",
    //             "original": "1 clove garlic crushed with a little salt",
    //             "originalName": "garlic crushed with a little salt",
    //             "amount": 1.0,
    //             "unit": "clove",
    //             "meta": [
    //                 "with a little salt",
    //                 "crushed"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "clove",
    //                     "unitLong": "clove"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "clove",
    //                     "unitLong": "clove"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 19296,
    //             "aisle": "Nut butters, Jams, and Honey",
    //             "image": "honey.png",
    //             "consistency": "LIQUID",
    //             "name": "honey",
    //             "nameClean": "honey",
    //             "original": "1 tablespoon honey",
    //             "originalName": "honey",
    //             "amount": 1.0,
    //             "unit": "tablespoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "Tbsp",
    //                     "unitLong": "Tbsp"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "Tbsp",
    //                     "unitLong": "Tbsp"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 2009,
    //             "aisle": "Spices and Seasonings",
    //             "image": "chili-powder.jpg",
    //             "consistency": "SOLID",
    //             "name": "chilli powder",
    //             "nameClean": "chili powder",
    //             "original": "1 teaspoon chilli powder",
    //             "originalName": "chilli powder",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 1012014,
    //             "aisle": "Spices and Seasonings",
    //             "image": "ground-cumin.jpg",
    //             "consistency": "SOLID",
    //             "name": "ground cumin",
    //             "nameClean": "ground cumin",
    //             "original": "1 teaspoon ground cumin",
    //             "originalName": "ground cumin",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 1002013,
    //             "aisle": "Spices and Seasonings",
    //             "image": "ground-coriander.jpg",
    //             "consistency": "SOLID",
    //             "name": "ground coriander",
    //             "nameClean": "ground coriander",
    //             "original": "1 teaspoon ground coriander",
    //             "originalName": "ground coriander",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 1002030,
    //             "aisle": "Spices and Seasonings",
    //             "image": "pepper.jpg",
    //             "consistency": "SOLID",
    //             "name": "ground pepper",
    //             "nameClean": "black pepper",
    //             "original": "1 teaspoon ground black pepper",
    //             "originalName": "ground black pepper",
    //             "amount": 1.0,
    //             "unit": "teaspoon",
    //             "meta": [
    //                 "black"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "tsp",
    //                     "unitLong": "teaspoon"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11167,
    //             "aisle": "Produce",
    //             "image": "corn-on-the-cob.jpg",
    //             "consistency": "SOLID",
    //             "name": "corn cobs",
    //             "nameClean": "corn on the cob",
    //             "original": "4 corn cobs, husks removed",
    //             "originalName": "corn cobs, husks removed",
    //             "amount": 4.0,
    //             "unit": "",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 4.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 },
    //                 "metric": {
    //                     "amount": 4.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 }
    //             }
    //         }
    //     ],
    //     "id": 634300,
    //     "title": "Barbecued Corn on the Cob With Spiced Butter",
    //     "readyInMinutes": 45,
    //     "servings": 4,
    //     "sourceUrl": "https://www.foodista.com/recipe/BNKJW2JQ/barbecued-corn-on-the-cob-with-spiced-butter",
    //     "image": "https://img.spoonacular.com/recipes/634300-556x370.jpg",
    //     "imageType": "jpg",
    //     "summary": "Barbecued Corn on the Cob With Spiced Butter takes roughly <b>45 minutes</b> from beginning to end. This recipe makes 4 servings with <b>301 calories</b>, <b>4g of protein</b>, and <b>24g of fat</b> each. For <b>$1.25 per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. It works well as a side dish. Head to the store and pick up ground cumin, garlic, honey, and a few other things to make it today. It is a <b>reasonably priced</b> recipe for fans of American food. Not a lot of people made this recipe, and 3 would say it hit the spot. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 21%</b>, which is rather bad. <a href=\"https://spoonacular.com/recipes/barbecued-corn-on-the-cob-with-bacon-and-chili-butter-148077\">Barbecued Corn on the Cob with Bacon and Chili Butter</a>, <a href=\"https://spoonacular.com/recipes/curry-butter-corn-on-the-cob-798344\">Curry Butter Corn on the Cob</a>, and <a href=\"https://spoonacular.com/recipes/corn-on-the-cob-with-smoked-butter-338713\">Corn on the Cob with Smoked Butter</a> are very similar to this recipe.",
    //     "cuisines": [
    //         "American"
    //     ],
    //     "dishTypes": [
    //         "side dish"
    //     ],
    //     "diets": [
    //         "gluten free",
    //         "lacto ovo vegetarian"
    //     ],
    //     "occasions": [],
    //     "instructions": "Combine the butter, garlic, honey, and spices in a small saucepan and cook over a gentle heat.\nBrush corn with the flavored butter and cook on the barbecue or under the grill turning regularly until golden.\nBaste continually during the cooking process.",
    //     "analyzedInstructions": [
    //         {
    //             "name": "",
    //             "steps": [
    //                 {
    //                     "number": 1,
    //                     "step": "Combine the butter, garlic, honey, and spices in a small saucepan and cook over a gentle heat.",
    //                     "ingredients": [
    //                         {
    //                             "id": 1001,
    //                             "name": "butter",
    //                             "localizedName": "butter",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
    //                         },
    //                         {
    //                             "id": 11215,
    //                             "name": "garlic",
    //                             "localizedName": "garlic",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
    //                         },
    //                         {
    //                             "id": 2035,
    //                             "name": "spices",
    //                             "localizedName": "spices",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/spices.png"
    //                         },
    //                         {
    //                             "id": 19296,
    //                             "name": "honey",
    //                             "localizedName": "honey",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/honey.png"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404669,
    //                             "name": "sauce pan",
    //                             "localizedName": "sauce pan",
    //                             "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "number": 2,
    //                     "step": "Brush corn with the flavored butter and cook on the barbecue or under the grill turning regularly until golden.",
    //                     "ingredients": [
    //                         {
    //                             "id": 1021001,
    //                             "name": "flavored butter",
    //                             "localizedName": "flavored butter",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
    //                         },
    //                         {
    //                             "id": 11168,
    //                             "name": "corn",
    //                             "localizedName": "corn",
    //                             "image": "https://spoonacular.com/cdn/ingredients_100x100/corn.png"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404706,
    //                             "name": "grill",
    //                             "localizedName": "grill",
    //                             "image": "https://spoonacular.com/cdn/equipment_100x100/grill.jpg"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "number": 3,
    //                     "step": "Baste continually during the cooking process.",
    //                     "ingredients": [],
    //                     "equipment": []
    //                 }
    //             ]
    //         }
    //     ],
    //     "originalId": null,
    //     "spoonacularScore": 28.163227081298828,
    //     "spoonacularSourceUrl": "https://spoonacular.com/barbecued-corn-on-the-cob-with-spiced-butter-634300"
    //     },
    // ];

    function getMainRecipes(){
        if(!randomRecipes.value){
            return RecipeServices.getRandomRecipes(10)
                .then(res => {
                    randomRecipes.value = res.recipes
                    return res.recipes;
                })
                .catch(err => console.log(err))
                .finally(() => console.log('done'))
        }else{
            return Promise.resolve(randomRecipes.value);
        }
    }

    function AddMyRecipe(recipeTitle, img, ingredients, servings, readyInMinutes, selectedDiets, preperationSteps){
        const newId = myRecipes.value.length <= 0 ? 1 : myRecipes.value.length;
        console.log(newId)

        myRecipes.value.push({
            title: recipeTitle,
            id: newId,
            image: img,
            extendedIngredients: ingredients,
            servings: servings,
            readyInMinutes: readyInMinutes,
            diets: selectedDiets,
            analyzedInstructions: preperationSteps,
        });
    }

    const myrecipeImg = ref([
        {
            id: 1,
            img: appetizer,
            title: 'appetizer',
        },
        {
            id: 2,
            img: foodBreakfast,
            title: 'food-breakfast',
        },
        {
            id: 3,
            img: coldBeverage,
            title: 'cold-beverage',
            beverage: true,
        },
        {
            id: 4,
            img: dessert,
            title: 'dessert',
        },
        {
            id: 5,
            img: dinner,
            title: 'dinner',
        },
        {
            id: 6,
            img: hotBeverage,
            title: 'hot-beverage',
            beverage: true,
        },
        {
            id: 7,
            img: pasta,
            title: 'pasta',
        },
        {
            id: 8,
            img: salad,
            title: 'salad',
        },
        {
            id: 9,
            img: seafood,
            title: 'seafood',
        },
    ]);

    return { randomRecipes, getMainRecipes, myRecipes, AddMyRecipe, myrecipeImg,  };
})
