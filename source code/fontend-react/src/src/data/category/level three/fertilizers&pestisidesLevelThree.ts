// Interface for level three categories
export interface LevelThreeCategory {
  parentCategoryId: string;
  level: number;
  name: string;
  categoryId: string;
}

// Updated surgical level three category array
export const fertilizersLevelThree: LevelThreeCategory[] =
 [
   {
    "parentCategoryId": "pesticides_insecticides",
    "level": 3,
    "name": "Herbicides",
    "categoryId": "herbicides"
  },
  {
    "parentCategoryId": "pesticides_insecticides",
    "level": 3,
    "name": "Fungicides",
    "categoryId": "fungicides"
  } ,{
    "parentCategoryId": "organic_fertilizers",
    "level": 3,
    "name": "Compost",
    "categoryId": "compost"
  },
  {
    "parentCategoryId": "organic_fertilizers",
    "level": 3,
    "name": "Vermicompost",
    "categoryId": "vermicompost"
  }
 ]