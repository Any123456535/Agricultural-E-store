// Interface for level two categories
export interface LevelTwoCategory {
  parentCategoryId: string;
  level: number;
  name: string;
  categoryId: string;
}

// Updated surgical level two category array
export const seedsLevelTwo: LevelTwoCategory[] =[
  {
    "parentCategoryId": "seeds",
    "level": 2,
    "name": "Cereal Seeds",
    "categoryId": "cereal_seeds"
  },
  {
    "parentCategoryId": "seeds",
    "level": 2,
    "name": "Vegetable Seeds",
    "categoryId": "vegetable_seeds"
  },
  {
    "parentCategoryId": "seeds",
    "level": 2,
    "name": "Flower Seeds",
    "categoryId": "flower_seeds"
  }
];

