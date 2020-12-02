import styled from "styled-components";

export const Container = styled.View`
flex : 1 ;

`;

export const ButtonPad = styled.View`
flex: 1;
flex-direction: column;
margin-top: 15px;
position: absolute;
bottom: 0px;
right: 0px;
left: 0px;
top: 30%;
`;

export const Row = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity`
width: 80px;
height: 80px;
background-color: lightgray;
align-items: center;
justify-content: center;
border-radius: 25px;
`;

export const Exp = styled.Text`
font-size : 30px;
display: flex;
text-align: right;
margin-left : 50px ;
margin-right: 10px ;
`;

export const Area = styled.View`
border: black;
margin-top: 10px;
flex-direction: row;
justify-content: flex-end;
align-items: center;
height: 20%;
`;

export const Back = styled.TouchableOpacity`
width: 50px;
height: 80%;
margin-right: 5px;
background-color: lightgray;
align-items: center;
justify-content: center;
border-radius: 10px;
`;
export const HistoryBox = styled.View`
height : 10%;
overflow: scroll;
`;

export const History = styled.Text`
font-size: 18px;
text-align: right;
padding: 10px;
color: gray;
`;

export const BtnText = styled.Text`
font-size: 30px;

`;