"use client"

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const VALUE_MAX_LENGTH = 10;
const STRING_MAX_LENGTH = 10;

export default function MyTextField() {
    const [myValue, setMyValue] = useState<string>("");
    const [myString, setMyString] = useState<string>("");

    const confirmLastDot = () => {
        // 入力確定時に末尾がピリオドだったときの処理
        if (myValue.endsWith(".")) {
            if (myValue.length === VALUE_MAX_LENGTH) {
                setMyValue(myValue.slice(0, -1));
            } else {
                setMyValue(myValue + "0");
            }
        }
    }

    const updataMyValueLimited = (e: React.ChangeEvent<HTMLInputElement>) => {
        /*
         * 例) 入力: 00.123.45 -> 0.12345 になる
         * 通常のキーボードからの入力だけでなくコピペからの入力も制限される
         */
        const value = e.target.value;

        // 数字と小数点以外を削除
        const numericValue = value.replace(/[^0-9.]/g, "");
        let limitedValue = numericValue;

        // 文字数制限(超過分は削除)
        if (numericValue.length > VALUE_MAX_LENGTH) {
            limitedValue = numericValue.slice(0, VALUE_MAX_LENGTH);
        }

        // 1つめの小数点位置を取得
        const dotIndex = numericValue.indexOf(".");
        if (dotIndex >= 0) {
            // ピリオドが存在する場合, 1つ目以外は削除
            limitedValue = numericValue.slice(0, dotIndex + 1) + numericValue.slice(dotIndex + 1).replace(/\./g, "");
        }
        // 文字列先頭が複数の0の場合1つにする
        limitedValue = limitedValue.replace(/^0+([0-9])/, `$1`);

        setMyValue(limitedValue);
    };

    const updateMyStringLimited = (e: React.ChangeEvent<HTMLInputElement>) => {
        /*
         * 例) 入力: あabc.#ん? -> abc になる
         * 通常のキーボードからの入力だけでなくコピペからの入力も制限される
         */
        const value = e.target.value;

        // a-z, A-Z, 0-9 以外の文字をすべて削除
        let limitedValue = value.replace(/[^a-zA-Z0-9]/g, "");
        if (value.length > STRING_MAX_LENGTH) {
            // 文字数制限
            limitedValue = limitedValue.slice(0, STRING_MAX_LENGTH);
        }

        setMyString(limitedValue);
    }

    return (
        <>
            <TextField
            variant="standard"
            value={myValue}
            onChange={updataMyValueLimited}
            onBlur={confirmLastDot}
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