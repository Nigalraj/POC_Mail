/* eslint-disable react/jsx-key */
/* eslint-disable react-refresh/only-export-components */
import { FormatAlignLeft } from "@styled-icons/material/FormatAlignLeft";
import { FormatAlignRight } from "@styled-icons/material/FormatAlignRight";
import { FormatAlignCenter } from "@styled-icons/material/FormatAlignCenter";
import { AlignVerticalTop } from "@styled-icons/material-outlined/AlignVerticalTop";
import { AlignVerticalBottom } from "@styled-icons/material-outlined/AlignVerticalBottom";
import { AlignHorizontalLeft } from "@styled-icons/material-outlined/AlignHorizontalLeft";
import { AlignHorizontalRight } from "@styled-icons/material/AlignHorizontalRight";
import { PencilSquare } from "@styled-icons/bootstrap/PencilSquare";
import { Eye } from "@styled-icons/fluentui-system-filled/Eye";
import { Computer } from "@styled-icons/material-outlined/Computer";
import { Mobile } from "@styled-icons/boxicons-regular/Mobile"
import { MenuFold } from "@styled-icons/remix-line/MenuFold";
import { AddCircle } from "@styled-icons/fluentui-system-filled/AddCircle";
import { Heading } from "@styled-icons/boxicons-regular/Heading";
import { CardHeading } from "@styled-icons/bootstrap/CardHeading";
import { SmartButton } from "@styled-icons/material-outlined/SmartButton";
import { Images } from "@styled-icons/bootstrap/Images";

export const headerLable = {
    BRANDNAME: "Mail template",
    header: ["Dashboard", "Settings"],
    paths: ["/dashboard"],
};

export const icon = {
    ICON : [
        { icon: <PencilSquare width={18} />, label: "paddingTop", rounded:"rounded-start"},
        { icon: <Eye width={18} />, label: "paddingBottom",rounded:"rounded-end" },
        {icon: <Computer width={18}/>, label:"padding",key:"ms-3",rounded:"rounded-start"},
        {icon: <Mobile width={18}/>, label:"padding", rounded:"rounded-end"},
        {icon: <MenuFold width={18}/>, label:"padding",key:"ms-3", path:"Navigator" ,rounded:"rounded"}
    ],
}

export const screen = {
    ICON : [
        { icon: <AddCircle width={22} style={{ color: '#1889DF' }}/>},
        { icon: <Heading width={22}/>},
        { icon : <CardHeading width={22}/>},
        { icon : <SmartButton width={22}/>},
        { icon : <Images width={22}/>}
    ]
}

export const templateLabel = ["General", "Styles", "Inspect"];

export const inspectLable = {
    HEADING: "HEADING BLOCK",
    CONTENT: "Content",
    LEVEL: "Level",
    TEXT: "Text color",
    BACKGROUND: "Background color",
    FONT: "Font family",
    FONTWEIGHT: "Font weight",
    ALIGNMENT: "Alignment",
    PADDING: "Padding",
    HIDDEN: "Hidden",
    LEVELNAME: ["H1", "H2", "H3"],
    FWEIGHT: ["Normal", "Bold"],
    ALIGNMENTI: [
        { icon: <FormatAlignLeft width={20} />, label: "left" },
        { icon: <FormatAlignCenter width={20} />, label: "center" },
        { icon: <FormatAlignRight width={20} />, label: "right" },
    ],
    PADDINGI: [
        { icon: <AlignVerticalTop width={18} />, label: "paddingTop" },
        { icon: <AlignVerticalBottom width={18} />, label: "paddingBottom" },
        { icon: <AlignHorizontalRight width={18} />, label: "paddingRight" },
        { icon: <AlignHorizontalLeft width={18} />, label: "paddingLeft" },
    ],
};
export const dashboardLabels = {
    TEMPLATE: "Template",
};

export const loginLable = {
    LOGIN: "Log In",
    PASSWORD: "Password",
    EMAIL: "Email",
    LOGINTITLE: "Login",
};
export const BASEURL = "https://3b0d-2405-201-e059-b805-13d-b0c4-5bbe-3998.ngrok-free.app/";

export const ValidRoutes = ["/dashboard", "/edit"];

export const EditLabel = ["From", "Subject", "Preheader"];

export const fontFamily = ["cursive", "fantasy", "emoji", "math", "fangsong", "Times New Roman", "Arial", "Courier"];
