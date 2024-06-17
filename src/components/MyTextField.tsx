"use client"

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function MyTextField() {
    const [myValue, setMyValue] = useState<string>("");
    const [myString, setMyString] = useState<string>("");

    const updataMyValueLimited = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        setMyValue(val);
    };

    const updateMyStringLimited = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyString(e.target.value);
    }

    return (
        <>
            <TextField
            variant="standard"
            value={myValue}
            onChange={updataMyValueLimited}
            sx={{
                backgroundColor: "#FFFFFF",
                marginTop: 4,
                width: 200,
            }}>
            </TextField>
            <TextField
            variant="standard"
            value={myString}
            onChange={updateMyStringLimited}
            sx={{
                backgroundColor: "#FFFFFF",
                marginTop: 4,
                width: 200,
            }}>
            </TextField>
            <Button
            variant="contained"
            onClick={() => {
                console.log(myValue);
                console.log(myString);
            }}
            sx={{
                marginTop: 2,
            }}>
                Test
            </Button>
        </>
    )
}