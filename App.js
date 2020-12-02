import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View  , StatusBar } from 'react-native';
import styled from 'styled-components';
import  {Area, Container , ButtonPad, Exp, History, HistoryBox ,Row, Button, BtnText, Back}  from './styled';
import { Ionicons } from '@expo/vector-icons';

const App = () => {

  const [ expression , setExpression ] = useState(" ");
  const [ hist , setHist ] = useState(" ")


  const handleClick = (exp) => {
    
        // console.log(exp);
    if(exp === "CLEAR")
    {
      setExpression(" ");
      setHist(" ");
    }
    else if (exp === "=")
    {
      
      // expression.trim();
      // console.log("evaluate")
      try {
      var res = eval(expression)+" "
      res = res.trim()
      setHist(res+"\n"+res)
      setExpression(res)
      
      } catch (e) {
        console.log(e.name)
        alert("Error : " + e.name)
        
      }

    }
    else
    {
     if(expression == "0" || expression == " 0")
     {
      setExpression(exp)
      setHist(exp)
     }
     
     else
     {
      var val = expression.concat(exp);
      setExpression(val);
      var res = hist.concat(exp)
      setHist(res);
      console.log(expression+"...")
     }
    }
    

  }

  const handleBack = () =>
  {
    var exp = expression.slice(0,-1);
    if(hist.length-1 !== "\n")
      var history = hist.slice(0,-1);
    setHist(history);
    setExpression(exp);
  }

  useEffect(() => {
    
    var len = hist.split(/\r\n|\r|\n/).length;
    if(len>4)
    {
      console.log("............")
      var index = hist.indexOf("\n") + 1;
      var newHist = hist.slice(index)
      console.log(newHist)
      setHist(newHist)
    }
    
  }, [hist])


  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
        <HistoryBox>
        <History>{hist}</History>
        </HistoryBox>
        <Area>
        <Exp>{expression}</Exp>
        <Back onPress={()=>handleBack()} >
        <Ionicons name="backspace-outline" size={34} color="black" />
        </Back>
        </Area>
      <ButtonPad>
        <Row>
          <Button onPress={()=>handleClick("CLEAR")} >
            <BtnText>
              C
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("(")} >
            <BtnText>
              (
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick(")")} >
            <BtnText>
              )
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("/")} >
            <BtnText>
              ÷
            </BtnText>
          </Button>
        </Row>
        <Row>
          <Button onPress={()=>handleClick("7")} >
            <BtnText>
              7
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("8")} >
            <BtnText>
              8
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("9")} >
            <BtnText>
              9
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("*")} >
            <BtnText>
            ×
            </BtnText>
          </Button>
        </Row>
        <Row>
          <Button onPress={()=>handleClick("4")} >
            <BtnText>
              4
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("5")} >
            <BtnText>
              5
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("6")} >
            <BtnText>
              6
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("-")} >
            <BtnText>
              -
            </BtnText>
          </Button>
        </Row>
        <Row>
          <Button onPress={()=>handleClick("1")} >
            <BtnText>
              1
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("2")} >
            <BtnText>
              2
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("3")} >
            <BtnText>
              3
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("+")} >
            <BtnText>
              +
            </BtnText>
          </Button>
        </Row>
        <Row>
          <Button onPress={()=>handleClick(".")} >
            <BtnText>
              .
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("0")} >
            <BtnText>
              0
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("%")} >
            <BtnText>
              %
            </BtnText>
          </Button>
          <Button onPress={()=>handleClick("=")} >
            <BtnText>
              =
            </BtnText>
          </Button>
        </Row>
      </ButtonPad>
    </Container>
  );
}

export default App;