import { Box, Typography } from "@mui/material";
import { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';

const Landing = () => {
    const [rangeVal, setrangeVal] = useState('');
    const [warningMsg, setwarningMsg] = useState('');
    const [primes, setprimes] = useState('');
    const [mediumPrimes, setmediumPrimes] = useState('');

    const IsString = (txt) => {
        return /\D/.test(txt);
    }

    const onGenPrimes = () => {
        if (rangeVal === '1')
            return;
        if (IsString(rangeVal)) {
            setwarningMsg('Please input the number value!');
            return;
        } else if (parseInt(rangeVal) === 0) {
            setwarningMsg('Please input bigger than 0!');
        }
        axios.post('http://localhost:8080/api',
        {
            range:parseInt(rangeVal)
        }).then((res) => {
            setprimes(res.data.data.primes);
            setmediumPrimes(res.data.data.medium);
        });
    }

    return (
    <ParentBox>
        <Typography style={{marginTop: 30, fontSize: 28, color: '#22aa99', fontWeight: 700}}>Test Task For UREEQA</Typography>
        <MainBox>
            <OneRow>
                <input value={rangeVal} onChange={(event) => {setrangeVal(event.target.value);setwarningMsg('');}} />
                <ButtonBox onClick={() => onGenPrimes()}>Generate</ButtonBox>
            </OneRow>
            <Typography style={{marginTop: 10, color: 'red'}}>{warningMsg}</Typography>
            <PrimesBox>{primes}</PrimesBox>
            <MediumBox>{mediumPrimes}</MediumBox>
        </MainBox>
    </ParentBox>
    )
}

const MediumBox = styled(Box)`
    padding: 10px;
    border-bottom: 1px solid #999999;
    width: 100%;
    height: 30px;
    margin-top: 20px;
    max-width: 450px;
`;
const PrimesBox = styled(Box)`
    padding: 10px;
    border-bottom: 1px solid #999999;
    width: 100%;
    margin-top: 20px;
    overflow: auto;
    max-width: 450px;
    height: 100px;
`;
const ButtonBox = styled(Box)`
    border-radius: 5px;
    background: #22aa99;
    height: 100%;
    padding: 7px 10px 0;
    :hover {
        background: #33bbaa;
        cursor: pointer;
    }
`
const OneRow = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    color: white;
    border-color: white;
    >input {
        outline: none;
        border: 1px solid #999999;
        border-radius: 7px;
        padding: 7px 10px;
        background: rgb(233, 234, 236);
        font-size: 20px;
    }
`
const MainBox = styled(Box)`
    margin: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ParentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: -webkit-fill-available;
    background: rgb(233, 234, 236);
    height: 100vh;
    font-size: 20px;
`;

export default Landing;