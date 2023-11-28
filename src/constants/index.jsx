/* eslint-disable react/jsx-key */
/* eslint-disable react-refresh/only-export-components */
import { FormatAlignLeft } from "@styled-icons/material/FormatAlignLeft";
import { FormatAlignRight } from "@styled-icons/material/FormatAlignRight";
import { FormatAlignCenter } from "@styled-icons/material/FormatAlignCenter";
import { AlignVerticalTop } from "@styled-icons/material-outlined/AlignVerticalTop";
import { AlignVerticalBottom } from "@styled-icons/material-outlined/AlignVerticalBottom";
import { AlignHorizontalLeft } from "@styled-icons/material-outlined/AlignHorizontalLeft";
import { AlignHorizontalRight } from "@styled-icons/material/AlignHorizontalRight";
export const headerLable = {
    BRANDNAME: "Mail template",
    header: ["Dashboard", "Settings"],
    paths: ["/dashboard"],
};

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
    FWEIGHT: ["Regular", "Bold"],
    ALIGNMENTI: [<FormatAlignLeft width={20} />, <FormatAlignRight width={20} />, <FormatAlignCenter width={20} />],
    PADDINGI: [
        { icon: <AlignVerticalTop width={18} />, label: "top" },
        { icon: <AlignVerticalBottom width={18} />, label: "bottom" },
        { icon: <AlignHorizontalLeft width={18} />, label: "right" },
        { icon: <AlignHorizontalRight width={18} />, label: "left" },
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
