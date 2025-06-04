import React, { forwardRef } from "react";

export const CardContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`[perspective:1000px] group ${className}`}>{children}</div>
);

export const CardBody = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`transition-transform duration-300 group-hover:rotate-x-6 group-hover:-rotate-y-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

type CardItemProps<T extends React.ElementType> = {
  className?: string;
  as?: T;
  translateZ?: number | string;
  style?: React.CSSProperties | undefined;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'translateZ'>;

export const CardItem = <T extends React.ElementType = "div">(
  props: CardItemProps<T>
): React.ReactElement => {
  const {
    children,
    className = "",
    as,
    translateZ,
    style,
    ...restProps
  } = props;
  const Component = (as || "div") as React.ElementType;
  const mergedStyle = translateZ
    ? { transform: `translateZ(${typeof translateZ === "number" ? `${translateZ}px` : translateZ})`, ...(style || {}) }
    : style;

  return React.createElement(
    Component,
    {
      className,
      style: mergedStyle,
      ...restProps
    },
    children
  );
};
CardBody.displayName = "CardBody";
