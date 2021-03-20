import React, {useState, useEffect} from "react";
import {Button, Checkbox, Dialog, Radio, RadioGroup} from "@blueprintjs/core";
import ShowOptimalRoute from "../components/ShowOptimalRoute";
import { CITIES } from '../config/constant';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import styled from "styled-components";

// このコンポーネントがやること：
// 1. プルダウンから、主要都市を複数選択して、送信ボタンを押してもらう
// 2. 選択数のバリデーションをかける（一件も選択されていなかったら、だめ）（21 件以上選択されていたらだめ）
// 3. 子供コンポーネントに、選択された都市の情報を props で渡す
// 4. 経路の描画、経路の計算（API call）などは、子供に任せる

// TODO かえる
const HOST = 'http://localhost:8000';

function TravelingSarorunKamuy() {

  // TODO, 別の定数ファイルに定義した方が良い？
  // const cities: string[] = ['札幌', '函館', '旭川', '苫小牧', '小樽'];
  // const cities = CITIES
  const [cities, setCities] = useState<string[]>([]);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [selectedCityIDs, setSelectedCityIDs] = useState<boolean[]>([]);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [dialogMode, setDialogMode] = useState<number>(0); // 0: 閉じてる 1: 1 ページ目

  useEffect(() => {
    getCities();
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
    let selected_cities: string[] = [];
    for (let i = 0; i < cities.length; i++) {
      if (selectedCityIDs[i]) {
        selected_cities.push(cities[i]);
      }
    }
    // const url = HOST + '/api/calc';
    const url = HOST + '/api/calc/';
    const method = 'POST';
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
    const body = JSON.stringify({
      cities: selected_cities,
      start: start,
      end: end,
    });
    fetch(url, {method, body, headers}).then((response) => {
      if (response.ok) {
        console.log("called api");
        console.log(response);
      } else {
        alert('failed to call api success')
      }
    });
    setIsSubmit(true);
  }

  const getCities = (): void => {
    const url = HOST + '/api/cities/';
    const method = 'GET';
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
    fetch(url, {method, headers}).then((response) => {
      if (response.ok) {
        // To do
        console.log("called api");
        console.log(response);
        alert("api cities success");
      } else {
        alert('failed to call api cities')
      }
    });
    // TODO 消す
    setCities(CITIES);
  }

  const handleClose = () => {
    setSelectedCityIDs([]);
    setDialogMode(0);
    setStart("");
    setEnd("");
  }

  return (
    <MainContainer>
      <h1>TravelingSarorunKamuy</h1>
      <h3>訪れたい都市を入力すると、最適なルートと必要な時間を表示します</h3>
      <Button icon="search" intent="primary" text="訪れたい都市を入力する" onClick={() => {
        setDialogMode(1);
      }} />

      <Dialog
        isOpen={dialogMode === 1}
        onClose={handleClose}
      >
        <ModalContainer>
          <h3>step 1/3</h3>
          <h3>訪れたい都市を選択してください</h3>
          {cities.map((city, index) =>
            <>
              <p>{city}</p>
              <Checkbox key={index} checked={selectedCityIDs[index]} onChange={() => {
                handleCheckboxChange(index);
              }}/>
            </>
          )}
          <Button icon="book" intent="primary" text="次へ" onClick={() => {
            setDialogMode(2);
          }} />
        </ModalContainer>
      </Dialog>

      <Dialog
        isOpen={dialogMode === 2}
        onClose={handleClose}
      >
        <ModalContainer>
          <h3>step 2/3</h3>
          <h3>出発する都市を選択してください</h3>
          {cities.map((city, index) =>
            <>
              {selectedCityIDs[index] ? (
              <>
                <Radio label={city} value={city} key={index} checked={start === city} onChange={() => {
                  setStart(city);
                }} />
              </>
              ) : null}
            </>
          )}
          <Button icon="book" intent="primary" text="次へ" onClick={() => {
            setDialogMode(3);
          }} />
        </ModalContainer>
      </Dialog>

      <Dialog
        isOpen={dialogMode === 3}
        onClose={handleClose}
      >
        <ModalContainer>
          <h3>step 3/3</h3>
          <h3>到着する都市を選択してください</h3>
          {cities.map((city, index) =>
            <>
              {selectedCityIDs[index] ? (
                <>
                  <Radio label={city} value={city} key={index} checked={end === city} onChange={() => {
                    setEnd(city);
                  }} />
                </>
              ) : null}
            </>
          )}
          <Button icon="search" intent="success" text="Go" onClick={() => {
            setDialogMode(0);
            handleSubmit();
          }}/>
        </ModalContainer>
      </Dialog>
      <ShowOptimalRouteContainer>
        {isSubmit ? <ShowOptimalRoute route={cities} time={[0, 40, 333, 523, 3336]} /> : null}
      </ShowOptimalRouteContainer>
    </MainContainer>
  );
}

export default TravelingSarorunKamuy;

const MainContainer = styled.div`
  margin: 100px;
 `
const ModalContainer = styled.div`
  margin: 20px;
 `
const ShowOptimalRouteContainer = styled.div`
  margin-bottom: 60px;
 `