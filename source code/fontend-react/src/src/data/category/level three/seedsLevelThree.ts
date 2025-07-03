export interface LevelThreeCategory {
  parentCategoryId: string;
  level: number;
  name: string;
  categoryId: string;
}
export const seedsLevelThree: LevelThreeCategory[] = [
   {
    "parentCategoryId": "flower_seeds",
    "level": 3,
    "name": "Marigold Seeds",
    "categoryId": "marigold_seeds"
  },
  {
    "parentCategoryId": "flower_seeds",
    "level": 3,
    "name": "Sunflower Seeds",
    "categoryId": "sunflower_seeds"
  },
   {
    "parentCategoryId": "vegetable_seeds",
    "level": 3,
    "name": "Tomato Seeds",
    "categoryId": "tomato_seeds"
  },
  {
    "parentCategoryId": "vegetable_seeds",
    "level": 3,
    "name": "Carrot Seeds",
    "categoryId": "carrot_seeds"
  },
  {
    "parentCategoryId": "cereal_seeds",
    "level": 3,
    "name": "Wheat Seeds",
    "categoryId": "wheat_seeds"
  },
  {
    "parentCategoryId": "cereal_seeds",
    "level": 3,
    "name": "Rice Seeds",
    "categoryId": "rice_seeds"
  }
];