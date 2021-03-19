import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import styled from "styled-components";

// このコンポーネントがやること：
// 1. 選択された都市の表示
// 2. 経路を可視化？（TODO）

// こいつは、もらってきた props を綺麗に表示するだけ

interface Props {
  route: string[],
  time: number,
}

function ShowOptimalRoute(props: Props) {

  const {route, time} = props;
  return (
    <div>
      <div>
        <HogeContainer>
            <h1>hoge</h1>
            <h2>hoge です</h2>
        </HogeContainer>
        <HugaContainer>
            huga
            huga です
        </HugaContainer>
      </div>
      <h1>ShowOptimalRoute</h1>
      <p>選択された都市を表示します</p>
      <p>時間は、{time}です</p>
      {route.map((city, index) =>
        <>
          <p>{index}: {city}</p>
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
