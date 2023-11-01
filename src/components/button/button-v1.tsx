import * as React from "react";
import { LoaderWithThreeDots } from "../loader/loader-with-three-dots";
import { useState } from "react";

export type ButtonV1Props = {
  children: React.ReactNode;
  className?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonV1: React.FC<ButtonV1Props> = ({
  onClick,
  className = "bg-yellow-200-500 text-white",
  ...props
}: ButtonV1Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoading(true);
    if (onClick) {
      onClick(event);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <button
      className={`px-4 py-2 rounded font-normal ${className}`}
      {...props}
      onClick={handleClick}
    >
      {isLoading ? (
        <LoaderWithThreeDots className="w-full h-full" />
      ) : (
        props.text
      )}
    </button>
  );
};
