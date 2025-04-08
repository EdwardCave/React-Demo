import { create } from 'zustand';
type CatStoreState = {
  cats: {
    bigCats:number;
    smallCats:number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;           
}

export const useCatStore = create<CatStoreState>()(
    (set) => ({
        cats: {
            bigCats: 0,
            smallCats: 0,
        },
        increaseBigCats: () => set((state) => ({
            cats: {
            ...state.cats,
            // 这里的state.cats是上一个状态
            bigCats: state.cats.bigCats + 1,        
            }
        })),
        increaseSmallCats: () => set((state) => ({
            cats: {
            ...state.cats,
            // 这里的state.cats是上一个状态
            smallCats: state.cats.smallCats + 1,        
            }
        })),
        })
)