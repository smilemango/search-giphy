import React from "react";
import { Spring } from "react-spring/renderprops";
import {ResultWrapper} from './styled';

function Result({ result,delay }) {
  console.log(result.toJS());
  return (
    <ResultWrapper>
      <Spring
        from={{ opacity: 0, transform: "translateY(30px)" }}
        to={{ opacity: 1, transform: "translateY(0  )" }}
        config={{ delay: delay*200}}
        >
        {springProps => (
          <div style={springProps}>
            <img src={result.toJS().images.original.url} />
          </div>
        )}
      </Spring>
    </ResultWrapper>
  );
}

export default Result;
