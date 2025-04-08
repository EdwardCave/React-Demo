import React from 'react'
import { useCatStore } from '../store/catStoreImmer';
export const CatController = ()=> {
    
     
    //使用部分的状态，可以使用下面的形式写
    // 需要在until文件中创建createSelectors函数
//    const {increaseBigCats,increaseSmallCats}= useCatStore()

   const increaseBigCats = useCatStore.use.increaseBigCats();
   const increaseSmallCats = useCatStore.use.increaseSmallCats();



  return (
    <div>
        <h2>CatController 选择某些状态</h2>
       <p>{Math.random()}</p>
    
        <div>
            <button onClick={increaseBigCats}>add Big Cat</button>
            <button onClick={increaseSmallCats}>add Small Cat</button>
        </div>
        
    </div>
  )
}
