import styled from "styled-components";

interface ButtonProps {
  fontSize?: string; // Tamanho do texto
  fontWeight?: string; // Peso do texto
  letterSpacing?: string;
  left?: string;
  top?: string;
}

export const ButtonContainer = styled.button<ButtonProps> `
    display: flex;
    margin: 5px 8px;
    padding: 10px;  
    position: relative;
    left: 10%;

    flex-direction: column;
    justify-Content: center;  
    align-Items: center;
    align-Self: stretch; 
    font-family: "Kumbh Sans", Helvetica, sans-serif;

    color: #FFF;
    border-Radius: 4px;  
    background: #1976D2;  
    width: 77%;
    border: none;
    cursor: pointer;

    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    letter-spacing: ${(props) => props.letterSpacing || "0px"};

    boxShadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 
               0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
               0px 3px 1px -2px rgba(0, 0, 0, 0.20);
  
    &:hover {
      background: #145EA6; 
    }
  `

  export const ButtonMenu = styled.button<ButtonProps> `
    display: flex;
    margin: 5px 8px;
    padding: 10px;  
    position: relative;
    left: 10%;
    top: 30%;
    
    margin-top: 10%;

    flex-direction: column;
    justify-Content: center;  
    align-Items: center;
    align-Self: stretch; 
    font-family: "Kumbh Sans", Helvetica, sans-serif;

    color: #FFF;
    border-Radius: 4px;  
    background: #202240;  
    width: 60%;
    border: none;
    cursor: pointer;


    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    letter-spacing: ${(props) => props.letterSpacing || "0px"};

    boxShadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 
               0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
               0px 3px 1px -2px rgba(0, 0, 0, 0.20);
  
    &:hover {
      transition: background-color 0.2s;
      background: #FFF; 
      color: #DD4618;
      padding: 8%;
    }
  `

  export const ButtonSmall = styled.button<ButtonProps> `
  display: flex;
  margin: 5px 8px;
  padding: 15px 8px;  
  position: relative;
  left: ${(props) => props.left || "67%"};
  top: ${(props) => props.top || "35%"};


  flex-direction: column;
  justify-Content: center;  
  align-Items: center;
  align-Self: stretch; 
  font-family: "Kumbh Sans", Helvetica, sans-serif;

  color: #FFF;
  border-Radius: 4px;  
  background: #1976D2;  
  width: 25%;
  border: none;
  cursor: pointer;

  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};

`