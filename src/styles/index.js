import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-sefif;

}
`
export const Container = styled.div`
width: 100%;
min-height: 895px;
background: rgba(176,196,222);
box-shadow: rgba(0, 0, 0, 0.25);
border-radius: 10px;
display: flex;
align-items: center;
flex-direction: column;
height: 100vh;
padding: 12px 25px;


.title{
    
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #4169E1;
    
}

`

export const Input = styled.input`
padding: 8px 24px;
width: 224px;
height: 50px;
background: #ffffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
border: none;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #4169E1;
text-align: center;

&::placeholder{
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #4169E1;
text-align: center;
}

`

export const Button = styled.button`
padding: 10px 40px;
width: 112px;
height: 50px;
background: #4169E1;
border-radius: 10px;
color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
border:none;
font-weight: 500;
font-size: 16px;
line-height: 24px;
cursor: pointer;

&:hover{
       opacity: 0.8; 
    }

    &:active{
        opacity:0.6;
    }

`

export const Flex = styled.div`
display: flex;
align-items: ${(props) => props.align || 'center'};
justify-content: ${(props) => props.justify || 'center'};
flex-direction: ${(props) => props.direction || 'column'};
gap: ${(props) => props.gap || '16px'}

`

export const Spacer = styled.div`
width: 100%;
margin: ${(props) => props.margin || '20px'};

`

export const Item = styled.li`
padding: 13px 10px 13px 24px;
width: auto;
height: auto;
background: ${(props) => props.checked ? '#008000' : '#ffffff'};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
list-style: none;
color: #ffffff;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
justify-content: space-between;
gap: 20px;

p{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => props.checked ? 'line-through' : ''};
    color: ${(props) => props.checked ? '#ffffff' : '#000000'};
    
}

i{
    font-size: 24px;
    color: ${(props) => props.checked ? '#ffffff' : '#000000'};
    
}

button{
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover{
       opacity: 0.8; 
    }

    &:active{
        opacity:0.6;
    }
}

`









