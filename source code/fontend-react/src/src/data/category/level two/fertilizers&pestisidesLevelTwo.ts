// Interface for level two categories
export interface LevelTwoCategory {
  parentCategoryId: string;
  level: number;
  name: string;
  categoryId: string;
}

// Updated medicine level two category array
export const fertilizersLevelTwo: LevelTwoCategory[] = [
  {
    "parentCategoryId": "fertilizer",
    "level": 2,
    "name": "Organic Fertilizers",
    "categoryId": "organic_fertilizers"
  },
  {
    "parentCategoryId": "fertilizer",
    "level": 2,
    "name": "Chemical Fertilizers",
    "categoryId": "chemical"
  },
  {
    "parentCategoryId": "fertilizer",
    "level": 2,
    "name": "Pesticides & Insecticides",
    "categoryId": "pesticides_insecticides"
  }
  
];

