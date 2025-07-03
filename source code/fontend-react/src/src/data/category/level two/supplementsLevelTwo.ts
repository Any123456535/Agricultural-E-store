// Interface for Level Two Category
export interface LevelTwoCategory {
  name: string;
  categoryId: string;
  parentCategoryId: string;
  level: number;
}

// Supplements Level Two Category List
export const supplementsLevelTwo: LevelTwoCategory[] = [
  {
    "name": "Vitamins & Multivitamins",
    "categoryId": "vitamins_multivitamins",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Minerals & Antioxidants",
    "categoryId": "minerals_antioxidants",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Protein & Workout Supplements",
    "categoryId": "protein_workout_supplements",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Omega & Fish Oils",
    "categoryId": "omega_fish_oils",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Weight Management",
    "categoryId": "weight_management",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Herbal & Ayurvedic Supplements",
    "categoryId": "herbal_ayurvedic_supplements",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Joint & Bone Health",
    "categoryId": "joint_bone_health",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Heart & Cholesterol Care",
    "categoryId": "heart_cholesterol_care",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Immunity Boosters",
    "categoryId": "immunity_boosters",
    "parentCategoryId": "supplements",
    "level": 2
  },
  {
    "name": "Memory & Brain Health",
    "categoryId": "memory_brain_health",
    "parentCategoryId": "supplements",
    "level": 2
  }
];
