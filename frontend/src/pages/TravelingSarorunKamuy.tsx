import React, {useState, useEffect} from "react";
import {Button, Checkbox} from "@blueprintjs/core";
import ShowOptimalRoute from "../components/ShowOptimalRoute";
import { CITIES } from '../config/constant';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// このコンポーネントがやること：
// 1. プルダウンから、主要都市を複数選択して、送信ボタンを押してもらう
// 2. 選択数のバリデーションをかける（一件も選択されていなかったら、だめ）（21 件以上選択されていたらだめ）
// 3. 子供コンポーネントに、選択された都市の情報を props で渡す
// 4. 経路の描画、経路の計算（API call）などは、子供に任せる

function TravelingSarorunKamuy() {

  // TODO, 別の定数ファイルに定義した方が良い？
  // const cities: string[] = ['札幌', '函館', '旭川', '苫小牧', '小樽'];
  // const cities = CITIES
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCityIDs, setSelectedCityIDs] = useState<boolean[]>([]);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    getCities();
    // alert("初期化されました。");
  }, []);

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
    // TODO: ここで API call して、情報詰めて、ShowOptimalRoute くんに props として渡す
    getCalc();
    setIsSubmit(true);
  }

  const getCities = (): void => {
    const url = '/api/cities';
    const method = 'GET';
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
    fetch(url, {method, headers}).then((response) => {
      if (response.ok) {
        // 親コンポーネントに発火させる
        // To do
      }
      setCities(CITIES);
    });
  } 

  const getCalc = (): void => {

    let selected_cities: string[] = [];
    for (let i = 0; i < cities.length; i++) {
      if (selectedCityIDs[i]) {
        selected_cities.push(cities[i]);
      }
    }
    const url = 'api/calc';
    const method = 'POST';
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
    const body = JSON.stringify({
      start: "札幌",
      end: "",
      cities: selected_cities,
    });
    fetch(url, {method, headers, body}).then((response) => {
      if (response.ok) {
        // 親コンポーネントに発火させる
        // To do
      }
    });
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
      {isSubmit ? <ShowOptimalRoute route={cities} time={[0, 40, 333, 523, 3336]} /> : null}
    </div>
  );
}

export default TravelingSarorunKamuy;
