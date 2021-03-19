import React, {useState} from "react";
import {Button, Checkbox} from "@blueprintjs/core";
import ShowOptimalRoute from "../components/ShowOptimalRoute";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// このコンポーネントがやること：
// 1. プルダウンから、主要都市を複数選択して、送信ボタンを押してもらう
// 2. 選択数のバリデーションをかける（一件も選択されていなかったら、だめ）（21 件以上選択されていたらだめ）
// 3. 子供コンポーネントに、選択された都市の情報を props で渡す
// 4. 経路の描画、経路の計算（API call）などは、子供に任せる

function TravelingSarorunKamuy() {

  // TODO, 別の定数ファイルに定義した方が良い？
  const cities: string[] = ['Sapporo（札幌）', 'Hakodate（函館）', 'Asahikawa（旭川）', 'Tomakomai（苫小牧）'];

  const [selectedCityIDs, setSelectedCityIDs] = useState<boolean[]>([]);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);


  // チェックボックスが押されたタイミングで、状態を更新する
  const handleCheckboxChange = (index: number): void => {
    let arr: boolean[] = [];
    for (let i = 0; i < cities.length; i++) {
      if (i === index) {
        arr.push(!selectedCityIDs[i]);
      } else {
        arr.push(selectedCityIDs[i]);
      }
    }
    setSelectedCityIDs(arr);
  }

  const handleSubmit = (): void => {
    setIsSubmit(true);
  }

  return (
    <div>
      <h1>TravelingSarorunKamuy</h1>
      {cities.map((city, index) =>
        <>
          <p>{city}</p>
          <Checkbox key={index} checked={selectedCityIDs[index]} onChange={() => {
            handleCheckboxChange(index);
          }}/>
        </>
      )}
      <Button icon="search" intent="success" text="Go" onClick={() => {
        handleSubmit();
      }}/>
      {isSubmit ? <ShowOptimalRoute cities={cities} selectedCityIDs={selectedCityIDs}/> : null}
    </div>
  );
}

export default TravelingSarorunKamuy;
