import * as React from "react";
export type ButtonV1Props = {
    children: React.ReactNode;
    className?: string;
    text?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const ButtonV1: React.FC<ButtonV1Props>;
