import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import styled from "styled-components";

import CityPanel from "./CityPanel";
import {FormGroup} from "@blueprintjs/core";

// このコンポーネントがやること：
// 1. 選択された都市の表示
// 2. 経路を可視化？（TODO）

// こいつは、もらってきた props を綺麗に表示するだけ

interface Props {
  route: string[],
  time: number[],
}

function ShowOptimalRoute(props: Props) {

  const {route, time} = props;

  const convertToTime = (n: number): string => {
    const hh: number = Math.floor(n / 60);
    const mm: number = n % 60;
    return String(hh) + ":" + String(mm);
  }

  return (
    <div>
      {route.map((city, index) =>
        <>
          <CityPanel city_name={route[index]} arrival_time={convertToTime(time[index])} />
        </>
      )}
    </div>
  );
}

export default ShowOptimalRoute;

const HogeContainer = styled.div`
  color: red;
  size: 40px;
`
const HugaContainer = styled.div`
  color: blue;
`

// css
// #hoge {
//   color: red;  
// }
