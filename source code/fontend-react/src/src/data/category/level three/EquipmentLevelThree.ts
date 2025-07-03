export interface LevelThreeCategory {
  parentCategoryId: string;
  level: number;
  name: string;
  categoryId: string;
}
export const equipmentLevelThree: LevelThreeCategory[] =
[
  {
    "parentCategoryId": "irrigation_equipment",
    "level": 3,
    "name": "Sprinkler Systems",
    "categoryId": "sprinkler_systems"
  },
  {
    "parentCategoryId": "irrigation_equipment",
    "level": 3,
    "name": "Drip Irrigation Systems",
    "categoryId": "drip_irrigation_systems"
  },
   {
    "parentCategoryId": "power_tools",
    "level": 3,
    "name": "Tiller",
    "categoryId": "tiller"
  },
  {
    "parentCategoryId": "power_tools",
    "level": 3,
    "name": "Harvester",
    "categoryId": "harvester"
  }, {
    "parentCategoryId": "hand_tools",
    "level": 3,
    "name": "Spade",
    "categoryId": "spade"
  },
  {
    "parentCategoryId": "hand_tools",
    "level": 3,
    "name": "Sickle",
    "categoryId": "sickle"
  }
]
  