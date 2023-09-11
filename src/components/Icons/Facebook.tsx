import React from "react";
import Svg from "./Svg";
import { SvgProps } from "./types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg width="10px" height="20px" viewBox="0 0 10 20" fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.92156 10H6.12745V20H1.96079V11.6361V10H0V6.47059H1.96079V4.16667C1.96079 2.54902 2.7451 0 6.12745 0H9.21568V3.43137H7.0098C6.66667 3.43137 6.12745 3.62745 6.12745 4.41177V6.47059H9.2647L8.92156 10Z" fill="#535353"/>
        </Svg>
    );
};

export default Icon;
