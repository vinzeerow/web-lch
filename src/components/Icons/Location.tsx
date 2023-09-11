import React from "react";
import Svg from "./Svg";
import { SvgProps } from "./types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
    return (
        <Svg viewBox="0 0 24 25" {...props}>
            <g clipPath="url(#clip0_103_23915)">
            <path d="M20.6201 8.51592C19.5701 3.89592 15.5401 1.81592 12.0001 1.81592C12.0001 1.81592 12.0001 1.81592 11.9901 1.81592C8.4601 1.81592 4.4201 3.88592 3.3701 8.50592C2.2001 13.6659 5.3601 18.0359 8.2201 20.7859C9.2801 21.8059 10.6401 22.3159 12.0001 22.3159C13.3601 22.3159 14.7201 21.8059 15.7701 20.7859C18.6301 18.0359 21.7901 13.6759 20.6201 8.51592ZM12.0001 13.5259C10.2601 13.5259 8.8501 12.1159 8.8501 10.3759C8.8501 8.63592 10.2601 7.22592 12.0001 7.22592C13.7401 7.22592 15.1501 8.63592 15.1501 10.3759C15.1501 12.1159 13.7401 13.5259 12.0001 13.5259Z" fill="#FEB318"/>
            </g>
            <defs>
            <clipPath id="clip0_103_23915">
            <rect width="24" height="24" fill="white" transform="translate(0 0.065918)"/>
            </clipPath>
            </defs>
        </Svg>
    );
};

export default Icon;


