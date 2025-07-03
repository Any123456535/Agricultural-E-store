// Interface for care level two categories
export interface LevelTwoCategory {
  parentCategoryId: string;
  level: number;
  name: string;
  categoryId: string;
}

// Updated care level two category array
export const equipmentLevelTwo: LevelTwoCategory[] = [
  {
    "parentCategoryId": "tools_equipment",
    "level": 2,
    "name": "Hand Tools",
    "categoryId": "hand_tools"
  },
  {
    "parentCategoryId": "tools_equipment",
    "level": 2,
    "name": "Power Tools",
    "categoryId": "power_tools"
  },
  {
    "parentCategoryId": "tools_equipment",
    "level": 2,
    "name": "Irrigation Equipment",
    "categoryId": "irrigation_equipment"
  }
]
;
