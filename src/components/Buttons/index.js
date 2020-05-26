import styled from 'styled-components'

const AccentButton = styled.a`
  align-self: center;
  border: none;
  overflow: visible;
  background-color: #0564ff;
  color: #ffffff;
  padding: 15px 25px;
  margin 2.5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  @media (max-width: 700px) {
    font-size: 11;
    padding: 5px 15px;
  }

  &:hover {
    background-color: #eba023;
    box-shadow: 0px 15px 20px rgb(235, 160, 35, 0.2);
    transform: translateY(-1px);
  }
`

const LinkButton = styled.a`
  align-self: center;
  border: 2px solid #fff;
  padding: 0;
  overflow: visible;
  color: #000;
  padding: 7.5px 17.5px;
  margin 2.5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: all 0.5s ease;
  border-radius: 45px;

  @media (max-width: 700px) {
    font-size: 11 !important;
    padding: 2.5px 10px;
  }

  &:hover {
    border: 2px solid #0564ff;
  }
`

const InputButton = styled.button`
  border: none;
  background-color: #0564ff;
  color: #ffffff;
  padding: 0 25px;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  height: 60px;
  cursor: pointer;
  width: 96%;
`

export { AccentButton, LinkButton, InputButton }
