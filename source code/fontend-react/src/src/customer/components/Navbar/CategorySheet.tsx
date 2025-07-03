import React from 'react'
import { mainCategory } from "../../../data/category/mainCategory";
import {equipmentLevelTwo } from "../../../data/category/level two/EquipmentLevelTwo";
import { seedsLevelThree } from "../../../data/category/level three/seedsLevelThree";
import { seedsLevelTwo } from "../../../data/category/level two/seedsLevelTwo";
import { fertilizersLevelThree } from "../../../data/category/level three/fertilizers&pestisidesLevelThree";
import { fertilizersLevelTwo } from "../../../data/category/level two/fertilizers&pestisidesLevelTwo";
import { equipmentLevelThree } from "../../../data/category/level three/EquipmentLevelThree";

import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'


const categoryTwo: { [key: string]: any[] } = {

  seeds: seedsLevelTwo,
  fertilizer: fertilizersLevelTwo,
  equipment: equipmentLevelTwo


}

const categoryThree: { [key: string]: any[] } = {
 seeds: seedsLevelThree,
  fertilizer: fertilizersLevelThree,
  equipment: equipmentLevelThree,

}

const CategorySheet = ({ selectedCategory,toggleDrawer,setShowSheet }: any) => {

const navigate=useNavigate()


    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => {
            // console.log("Category", parentCategoryId, child)
            return child.parentCategoryId == parentCategoryId
        })

    }
    const handleCategoryClick = (category:string) => {
        if(toggleDrawer){
            toggleDrawer(false)()
        }
        if(setShowSheet){
            setShowSheet(false)
        }
        
        navigate("/products/"+category)
    }
    return (
        <Box className='bg-white shadow-lg  lg:h-[500px] overflow-y-auto'>
            <div className=' flex text-sm flex-wrap'>
                {categoryTwo[selectedCategory]?.map((item: any,index) => 
                <div  key={item.name} className={`p-8 lg:w-[20%] ${index%2==0?"bg-slate-50":"bg-white"}`}>

                    <p className='text-[#00927c] mb-5 font-semibold'>{item.name}</p>

                    <ul className='space-y-3'>
                        {childCategory(categoryThree[selectedCategory], item.categoryId)?.map((item: any) => <div key={item.name}>

                            <li 
                            onClick={()=>handleCategoryClick(item.categoryId)}
                            className='hover:text-[#00927c] cursor-pointer'>
                                {item.name}
                            </li>

                        </div>)}
                    </ul>


                </div>)}
            </div>
        </Box>
    )
}

export default CategorySheet