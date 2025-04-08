import React from 'react'
import { useCatStore } from '../store/catStoreImmer';
export const CatBox = ()=> {
    const bigCats = useCatStore((state) => state.cats.bigCats);
    const smallCats = useCatStore((state) => state.cats.smallCats);
    const increaseBigCats = useCatStore((state) => state.increaseBigCats);
    const increaseSmallCats = useCatStore((state) => state.increaseSmallCats);
    const summary = useCatStore((state) => state.summary);

    console.log("summary",summary());
  return (
    <div>
        <h2>Cat Box</h2>
       
        <p>{bigCats} big cats in the box</p>
        <p>{smallCats}small cats in the box</p>
        <div>
            <button onClick={increaseBigCats}>add Big Cat</button>
            <button onClick={increaseSmallCats}>add Small Cat</button>
        </div>
        
    </div>
  )
}
