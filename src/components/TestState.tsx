import { useState } from "react";
import { Box, Button } from "@mui/material";

export default function TestState() {
    const [value, setValue] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    // 関数呼び出し前のみに使用するのでlet宣言でよい
    let myValue = 0;

    const clickA = (x: number) => {
        console.log("clicked A button");
        setValue(x);
        myValue = x;
        setOpen(!open);
        // setValueでvalue=xとなるが、この関数内では反映されない
        // 反映は関数が呼び出された後(レンダリング後)
        logging();
        console.log("fin A button");
    };
    const clickB = (x: number) => {
        console.log("clicked B button");
        setValue(x);
        myValue = x;
        setOpen(!open);
        logging();
        console.log("fin B button");
    };

    const logging = () => {
        console.log("#### LOGGING START");
        console.log(value);
        console.log(myValue);
        console.log(open);
        console.log("######## LOGGING END");
    };

    return (
        <Box m={1}>
            <Button
            variant="contained"
            onClick={() => { clickA(0); }}>
                A
            </Button>
            <Button
            variant="contained"
            onClick={() => { clickB(1); }}>
                B
            </Button>
            value={value},
            myValue={myValue}
            {open && <Box>OK!!!!</Box>}
        </Box>
    )
}
