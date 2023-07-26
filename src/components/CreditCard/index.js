import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  InputContainer,
  Heading,
  CardElementContainer,
  CardNumber,
  HeadingName,
  CardName,
  InputElement,
  Input,
  PaymentHeading,
} from './styledComponents'

const CreditCard = () => {
  const [accountNumber, setAccountNumber] = useState('')
  const [accountName, setAccountName] = useState('')
  return (
    <MainContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <CardElementContainer data-testid="creditCard">
          <CardNumber>{accountNumber}</CardNumber>
          <HeadingName>CARDHOLDER NAME</HeadingName>
          <CardName>{accountName.toUpperCase()}</CardName>
        </CardElementContainer>
      </CardContainer>
      <InputContainer>
        <InputElement>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            value={accountNumber}
            onChange={event => setAccountNumber(event.target.value)}
            placeholder="Card Number"
          />
          <Input
            type="text"
            value={accountName}
            onChange={event => setAccountName(event.target.value)}
            placeholder="Cardholder Name"
          />
        </InputElement>
      </InputContainer>
    </MainContainer>
  )
}

export default CreditCard
