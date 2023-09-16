import { ElementType } from "react";
import { FacebookIcon, InvoiceIcon, LocationIcon, PhoneIcon } from "../components/Icons";

export const SERVICE_ID = "service_b2ncl5h"
export const TEMPLATE_ID = "template_r1h8v2d"
export const PUBLIC_KEY = "Zdve6Hh1yZ3YwVqER"

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