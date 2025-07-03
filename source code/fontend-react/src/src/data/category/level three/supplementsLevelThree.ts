export interface LevelThreeCategory {
  name: string;
  categoryId: string;
  parentCategoryId: string;
  level: number;
}
export const supplementsLevelThree: LevelThreeCategory[] = [
  // Vitamins & Multivitamins
  { "name": "Vitamin A", "categoryId": "vitamin_a", "parentCategoryId": "vitamins_multivitamins", "level": 3 },
  { "name": "Vitamin B Complex", "categoryId": "vitamin_b_complex", "parentCategoryId": "vitamins_multivitamins", "level": 3 },
  { "name": "Vitamin C", "categoryId": "vitamin_c", "parentCategoryId": "vitamins_multivitamins", "level": 3 },
  { "name": "Vitamin D", "categoryId": "vitamin_d", "parentCategoryId": "vitamins_multivitamins", "level": 3 },
  { "name": "Vitamin E", "categoryId": "vitamin_e", "parentCategoryId": "vitamins_multivitamins", "level": 3 },
  { "name": "Multivitamin for Men", "categoryId": "multivitamin_men", "parentCategoryId": "vitamins_multivitamins", "level": 3 },
  { "name": "Multivitamin for Women", "categoryId": "multivitamin_women", "parentCategoryId": "vitamins_multivitamins", "level": 3 },

  // Minerals & Antioxidants
  { "name": "Zinc", "categoryId": "zinc", "parentCategoryId": "minerals_antioxidants", "level": 3 },
  { "name": "Iron", "categoryId": "iron", "parentCategoryId": "minerals_antioxidants", "level": 3 },
  { "name": "Calcium", "categoryId": "calcium", "parentCategoryId": "minerals_antioxidants", "level": 3 },
  { "name": "Magnesium", "categoryId": "magnesium", "parentCategoryId": "minerals_antioxidants", "level": 3 },
  { "name": "Selenium", "categoryId": "selenium", "parentCategoryId": "minerals_antioxidants", "level": 3 },
  { "name": "Antioxidant Blends", "categoryId": "antioxidant_blends", "parentCategoryId": "minerals_antioxidants", "level": 3 },
  { "name": "Electrolyte Supplements", "categoryId": "electrolyte_supplements", "parentCategoryId": "minerals_antioxidants", "level": 3 },

  // Protein & Workout Supplements
  { "name": "Whey Protein", "categoryId": "whey_protein", "parentCategoryId": "protein_workout_supplements", "level": 3 },
  { "name": "Casein Protein", "categoryId": "casein_protein", "parentCategoryId": "protein_workout_supplements", "level": 3 },
  { "name": "Mass Gainers", "categoryId": "mass_gainers", "parentCategoryId": "protein_workout_supplements", "level": 3 },
  { "name": "Pre-Workout", "categoryId": "pre_workout", "parentCategoryId": "protein_workout_supplements", "level": 3 },
  { "name": "Post-Workout", "categoryId": "post_workout", "parentCategoryId": "protein_workout_supplements", "level": 3 },
  { "name": "BCAAs", "categoryId": "bcaas", "parentCategoryId": "protein_workout_supplements", "level": 3 },
  { "name": "Creatine", "categoryId": "creatine", "parentCategoryId": "protein_workout_supplements", "level": 3 },

  // Omega & Fish Oils
  { "name": "Omega 3", "categoryId": "omega_3", "parentCategoryId": "omega_fish_oils", "level": 3 },
  { "name": "Fish Oil Capsules", "categoryId": "fish_oil_capsules", "parentCategoryId": "omega_fish_oils", "level": 3 },
  { "name": "Krill Oil", "categoryId": "krill_oil", "parentCategoryId": "omega_fish_oils", "level": 3 },
  { "name": "Flaxseed Oil", "categoryId": "flaxseed_oil", "parentCategoryId": "omega_fish_oils", "level": 3 },
  { "name": "Cod Liver Oil", "categoryId": "cod_liver_oil", "parentCategoryId": "omega_fish_oils", "level": 3 },
  { "name": "DHA Supplements", "categoryId": "dha_supplements", "parentCategoryId": "omega_fish_oils", "level": 3 },

  // Weight Management
  { "name": "Fat Burners", "categoryId": "fat_burners", "parentCategoryId": "weight_management", "level": 3 },
  { "name": "Meal Replacements", "categoryId": "meal_replacements", "parentCategoryId": "weight_management", "level": 3 },
  { "name": "Appetite Suppressants", "categoryId": "appetite_suppressants", "parentCategoryId": "weight_management", "level": 3 },
  { "name": "CLA Supplements", "categoryId": "cla_supplements", "parentCategoryId": "weight_management", "level": 3 },
  { "name": "Detox Products", "categoryId": "detox_products", "parentCategoryId": "weight_management", "level": 3 },
  { "name": "Garcinia Cambogia", "categoryId": "garcinia_cambogia", "parentCategoryId": "weight_management", "level": 3 },
  { "name": "Keto Supplements", "categoryId": "keto_supplements", "parentCategoryId": "weight_management", "level": 3 },

  // Herbal & Ayurvedic Supplements
  { "name": "Ashwagandha", "categoryId": "ashwagandha", "parentCategoryId": "herbal_ayurvedic_supplements", "level": 3 },
  { "name": "Turmeric Capsules", "categoryId": "turmeric_capsules", "parentCategoryId": "herbal_ayurvedic_supplements", "level": 3 },
  { "name": "Giloy", "categoryId": "giloy", "parentCategoryId": "herbal_ayurvedic_supplements", "level": 3 },
  { "name": "Tulsi Extracts", "categoryId": "tulsi_extracts", "parentCategoryId": "herbal_ayurvedic_supplements", "level": 3 },
  { "name": "Amla Supplements", "categoryId": "amla_supplements", "parentCategoryId": "herbal_ayurvedic_supplements", "level": 3 },
  { "name": "Shilajit", "categoryId": "shilajit", "parentCategoryId": "herbal_ayurvedic_supplements", "level": 3 },
  { "name": "Neem Capsules", "categoryId": "neem_capsules", "parentCategoryId": "herbal_ayurvedic_supplements", "level": 3 },

  // Joint & Bone Health
  { "name": "Glucosamine", "categoryId": "glucosamine", "parentCategoryId": "joint_bone_health", "level": 3 },
  { "name": "Calcium + D3", "categoryId": "calcium_d3", "parentCategoryId": "joint_bone_health", "level": 3 },
  { "name": "Collagen", "categoryId": "collagen", "parentCategoryId": "joint_bone_health", "level": 3 },
  { "name": "Chondroitin", "categoryId": "chondroitin", "parentCategoryId": "joint_bone_health", "level": 3 },
  { "name": "Joint Pain Relief", "categoryId": "joint_pain_relief", "parentCategoryId": "joint_bone_health", "level": 3 },
  { "name": "Bone Strengthening", "categoryId": "bone_strengthening", "parentCategoryId": "joint_bone_health", "level": 3 },

  // Heart & Cholesterol Care
  { "name": "Cholesterol Control", "categoryId": "cholesterol_control", "parentCategoryId": "heart_cholesterol_care", "level": 3 },
  { "name": "Blood Pressure Support", "categoryId": "bp_support", "parentCategoryId": "heart_cholesterol_care", "level": 3 },
  { "name": "CoQ10", "categoryId": "coq10", "parentCategoryId": "heart_cholesterol_care", "level": 3 },
  { "name": "Omega 3 for Heart", "categoryId": "omega_3_heart", "parentCategoryId": "heart_cholesterol_care", "level": 3 },
  { "name": "Arjuna Extracts", "categoryId": "arjuna_extracts", "parentCategoryId": "heart_cholesterol_care", "level": 3 },
  { "name": "Heart Tonic", "categoryId": "heart_tonic", "parentCategoryId": "heart_cholesterol_care", "level": 3 },

  // Immunity Boosters
  { "name": "Chyawanprash", "categoryId": "chyawanprash", "parentCategoryId": "immunity_boosters", "level": 3 },
  { "name": "Vitamin C + Zinc", "categoryId": "vitamin_c_zinc", "parentCategoryId": "immunity_boosters", "level": 3 },
  { "name": "Probiotics", "categoryId": "probiotics", "parentCategoryId": "immunity_boosters", "level": 3 },
  { "name": "Herbal Immunity Mix", "categoryId": "herbal_immunity_mix", "parentCategoryId": "immunity_boosters", "level": 3 },
  { "name": "Immunity Capsules", "categoryId": "immunity_capsules", "parentCategoryId": "immunity_boosters", "level": 3 },
  { "name": "Echinacea", "categoryId": "echinacea", "parentCategoryId": "immunity_boosters", "level": 3 },

  // Memory & Brain Health
  { "name": "Ginkgo Biloba", "categoryId": "ginkgo_biloba", "parentCategoryId": "memory_brain_health", "level": 3 },
  { "name": "Brahmi", "categoryId": "brahmi", "parentCategoryId": "memory_brain_health", "level": 3 },
  { "name": "Omega 3 for Brain", "categoryId": "omega_3_brain", "parentCategoryId": "memory_brain_health", "level": 3 },
  { "name": "Nootropic Blends", "categoryId": "nootropic_blends", "parentCategoryId": "memory_brain_health", "level": 3 },
  { "name": "Focus Enhancers", "categoryId": "focus_enhancers", "parentCategoryId": "memory_brain_health", "level": 3 },
  { "name": "Mood Support", "categoryId": "mood_support", "parentCategoryId": "memory_brain_health", "level": 3 },
  { "name": "L-Theanine", "categoryId": "l_theanine", "parentCategoryId": "memory_brain_health", "level": 3 }
];
