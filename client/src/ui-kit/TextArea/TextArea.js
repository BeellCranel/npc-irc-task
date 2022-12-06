import React, { forwardRef } from "react";
import "./TextArea.scss";
import clsx from "clsx";

export const TextArea = forwardRef(
  ({ className, name, error, ...rest }, ref) => {
    return (
      <>
        <textarea
          className={clsx("TextArea", className, {
            TextArea__error: error,
          })}
          name={name}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

TextArea.displayName = "FormTextArea";
