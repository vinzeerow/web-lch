import { ElementType } from "react";
import { FacebookIcon, InvoiceIcon, LocationIcon, PhoneIcon } from "../components/Icons";

interface ContactItem {
    name: string,
    icon: ElementType<any>,
}
interface socialItem {
    name: string,
    href: string,
    icon: ElementType<any>
}
export const socialsConfig:socialItem[] = [
    {
        name: "Facebook",
        href: "#",
        icon: FacebookIcon
    },
    {
        name: "Telegram",
        href: "#",
        icon: FacebookIcon
    },
    {
        name: "Globe",
        href: "#",
        icon: FacebookIcon
    }
] 
export const contactConfig:ContactItem[] = [
    {
        name: "Khu II, Trường Đại học Cần Thơ, Đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ.",
        icon: LocationIcon
    },
    {
        name: "Email: hsv_tv@ctu.edu.vn",
        icon: InvoiceIcon
    },
    {
        name: "0395741398",
        icon: PhoneIcon
    }
    
]