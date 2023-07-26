import styled from 'styled-components'

export const MainContainer = styled.div`
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    display: flex;
  }
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  font-family: 'Roboto';
  padding: 26px;
  min-height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    min-height: 50vh;
    width: 100%;
  }
`
export const InputContainer = styled.div`
  background-color: #ffffff;
  font-family: 'Roboto';
  padding: 24px;
  min-height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 767px) {
    min-height: 50vh;
    width: 100%;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  border-bottom: #ffd773 2px solid;
  text-align: center;
  font-size: 22px;
  max-width: 140px;
`
export const CardElementContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 500px;
  height: 300px;
  margin: 3px;
  background-size: cover;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px;
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 32px;
  margin-left: 6px;
`
export const HeadingName = styled.p`
  color: #ffffff;
  font-weight: 200;
  margin-left: 6px;
`
export const CardName = styled.p`
  color: #ffffff;
  font-size: 22px;
  margin: 0;
  margin-left: 6px;
`
export const InputElement = styled.div`
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px;
`

export const Input = styled.input`
  height: 45px;
  width: 95%;
  border-radius: 8px;
  border: 1px solid #475569;
  outline: none;
  font-size: 18px;
  padding: 6px;
  margin: 12px;
  outline: none;
  color: #475569;
`
export const PaymentHeading = styled.h1`
  font-size: 22px;
  color: #475569;
`
