import {create} from 'zustand';
type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  // async异步函数，获取后端数据
    // fetchBears: () => Promise<void>;
};
export const useBearStore = create<BearState>() ((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}));
