'use client'

import { Box } from "@mui/material";
import SvgImage from '../svg_icon.svg';

export default function SvgTest() {
    return (
        <>
            <Box sx=
            {{
                width: 256,
                height: 256,
                backgroundColor: 'green',
                maskImage: `url(${SvgImage})`,
                WebkitMaskImage: `url(${SvgImage})`,
            }}></Box>
        </>
    )
}
