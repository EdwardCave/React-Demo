import React from "react";
import { useBearStore } from "../store/bearStore";
export const  BearBox = () => {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  // 如果需要全部的store中的状态，则可以写成下面形式
    // const { bears, increasePopulation, removeAllBears } = useBearStore();

  return (
    <div>
      <h2>Bear Box</h2>
      <button onClick={increasePopulation}>Increase Population</button>
      <button onClick={removeAllBears}>Remove All Bears</button>
      <p>{bears} bears in the box</p>
    </div>
  );
}