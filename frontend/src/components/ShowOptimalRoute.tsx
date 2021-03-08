import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// このコンポーネントがやること：
// 1. 選択された都市の表示
// 2. backend への API コール（TODO）
// 3. 経路を可視化？（TODO）

interface Props {
  cities: string[],
  selectedCityIDs: boolean[],
}

function ShowOptimalRoute(props: Props) {

  const {cities, selectedCityIDs} = props;

  return (
    <div>
      <h1>ShowOptimalRoute</h1>
      <p>選択された都市を表示します</p>
      {cities.map((city, index) =>
        <>
          <p>{selectedCityIDs[index] ? city : null}</p>
        </>
      )}
    </div>
  );
}

export default ShowOptimalRoute;
