import React from "react";
import styled from "styled-components";



const Container = styled.span<{isBlue:boolean}>` //styled-components에서의 props의 타입을 지정해야 할때는 interface로 외부에서 빼서 하지말고 이렇게 인라인방식으로 하는 것을 추천한다. 그렇지 않고 interface로 지정하면 일반적인 props와 헷갈릴수 있다.
    color:${props => (props.isBlue ? props.theme.blueColor : "black")};
`;

interface IProps {
    count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => ( //<IProps>이렇게 interface로 타입의 형식을 지정한 객체를 넣어서 props의 타입의 형식을 지정하는 것이다.
    <Container isBlue={count > 10}>{count}</Container> //isBlue를 보면 count에서 10넘어가면 true, 그렇지 않으면 false라고 해놨다.
);  

export default Number;