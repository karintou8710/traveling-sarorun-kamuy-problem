import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import styled from "styled-components";

import CityPanel from "./CityPanel";

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

    const city_name = "小樽";
    return (
    <div>
      {route.map((city, index) =>
        <>
            <CityPanel city_name={city_name} arrival_time={"10:10"} />
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
