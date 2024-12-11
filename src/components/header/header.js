import styled from "styled-components";

export const NavHeader = styled.nav`
  width: 100%;
  background-color: #132e35;
  box-shadow: 0 13px 14.4px 0 rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  padding: 5px 0;
  color: #ffffff;


  h3{
    margin-top:50px;
    font-family: "Itim";
    font-size: 2.5rem;
  }

  a {
    position: relative;
    top: 30px;
    width: 130px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.4);
    vertical-align: middle;
    text-decoration: none;
    height: 100%;
    transition: 0.1s;
    border-radius: 5px 0 0 5px;
    padding: 15px;
    background-color: #273d43;
    font-size: 1.4rem;
  }

  a:last-child {
    border-radius: 0 5px 5px 0;
  }

  a.active {
    background-color: #286373;
    color: #ffffff;
  }
`;

export const Menu = styled.div`
  width: 1360px;
  max-width: 90%;
  margin:0 auto;
  text-align: start;
`


export const NavBox = styled.div` 
display: flex;
align-items: center;
justify-content: start;
font-family: "Itim";

`