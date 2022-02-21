import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
export default function Home() {
    const [userId,setUserId]=useState()
    const [password,setPassword]=useState()
    const handleId = (e) => {
        setUserId(e.target.value);
        console.log(userId);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#011638"),
        backgroundColor: "#011638",
        marginTop:"30px",
        '&:hover': {
        backgroundColor: "#011638e0",
        },
    }));
  return (
    <>
        <div className='header'>
            <p>Digital</p> <p>|</p> <p>Instant</p> <p>|</p> <p>Simple</p>
        </div>
        <div className="content">
            <div className="explanation">
                <div className="c1">  
                    <div className="icon">
                    <MonetizationOnRoundedIcon style={{height:"50px" ,width:"80px"}}/>
                    </div>
                    <div className="cont">
                        <p style={{"fontWeight":"bold"}}>GET LOANS IN THREE STEPS</p>
                        <p style={{"marginRight":"50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="c1"> 
                    <div className="icon">
                    <EventNoteRoundedIcon style={{height:"50px" ,width:"80px"}}/> 
                    </div>
                    <div className="cont">
                        <p style={{"fontWeight":"bold"}}>CONVENIENT PROCESS</p>
                        <p style={{"marginRight":"50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="c1">
                    <div className="icon">
                        <CasesRoundedIcon style={{height:"50px" ,width:"80px"}}/> 
                    </div>
                    <div className="cont">
                        <p style={{"fontWeight":"bold"}}>EXCLUSIVE BENEFITS</p>
                        <p style={{"marginRight":"50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div className="loginForm">
                <p style={{"textAlign":"center","fontFamily":"cursive"}}>LET US BEGIN</p>
                <div className="form">
                    <div className="let">
                        <ArrowForwardIosRoundedIcon style={{"color":"black","height":"20px","border":"2px solid #001d3d","borderRadius":"50%"}}/>
                        <h4 style={{color:"#003049","textAlign":"center","marginLeft":"5px"}}>Enter Customer Id and Password</h4>
                    </div>
                    <form className='login'>
                        <TextField required id="standard-required" label="Customer ID" variant="standard" value={userId} onChange={handleId}/>
                        <TextField required id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" value={password} onChange={handlePassword}/>
                        {/* <small style={{"color":"#0d21a1","marginTop":"15px","textDecoration":"underline"}}> <a href="">Forgot Password</a> </small> */}
                        <div className="tc">
                            <small>Lorem ipsum dolor sit eaque magnam sapiente. Eos asperiores porro </small>
                        </div>
                        <ColorButton variant="contained">LOG-IN</ColorButton>
                        <p style={{"color":"black"}}>New to Axis Bank ? <Link to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}



