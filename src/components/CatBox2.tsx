import React from 'react'
import { useCatStore } from '../store/catStoreImmer';
export const CatBox2 = ()=> {
    
     
    //使用全部的状态，可以使用下面的形式写
   const {cats:{bigCats,smallCats},increaseBigCats,increaseSmallCats}= useCatStore()

  return (
    <div>
        <h2>Cat Box1111</h2>
        <p>{Math.random()}</p>
        <p>{bigCats} big cats in the box</p>
        <p>{smallCats}small cats in the box</p>
        <div>
            <button onClick={increaseBigCats}>add Big Cat</button>
            <button onClick={increaseSmallCats}>add Small Cat</button>
        </div>
        
    </div>
  )
}
