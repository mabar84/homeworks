import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    const banknotsFilter = props.money.banknotes === 'Dollars' ? 'green' : 'blue'

    return (
        <Banknote color={banknotsFilter}>
            <Name>
                {props.money.banknotes}
            </Name>
            <Nominal>
                {props.money.value}
            </Nominal>
        </Banknote>
    );
};

type PropsType = {
    color: string
}

const Banknote = styled.div<PropsType>`
  width: 100px;
  height: 100px;
  margin: 10px;

  background-color: ${props => props.color};


`

const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 20px;
`