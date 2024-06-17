"use client"

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function MyTextField() {
    const [myValue, setMyValue] = useState<string>("");
    const [myString, setMyString] = useState<string>("");

    const updataMyValueLimited = (e: React.ChangeEvent<HTMLInputElement>) => {
        /* 例) 入力: 00.123.45 -> 0.12345 になる */
        const value = e.target.value;
        // 数字と小数点以外を削除
        const numericValue = value.replace(/[^0-9.]/g, "");
        // 1つめの小数点位置を取得
        const dotIndex = numericValue.indexOf(".");
        let limitedValue = numericValue;
        if (dotIndex >= 0) {
            // ピリオドが存在する場合, 1つ目以外は削除
            limitedValue = numericValue.slice(0, dotIndex + 1) + numericValue.slice(dotIndex + 1).replace(/\./g, "");
        }
        // 文字列先頭が複数の0の場合1つにする
        limitedValue = limitedValue.replace(/^0+([0-9])/, `$1`);
        setMyValue(limitedValue);
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