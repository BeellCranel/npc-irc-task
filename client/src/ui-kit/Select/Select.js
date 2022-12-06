import React, { forwardRef } from "react";
import clsx from "clsx";
import "./Select.scss";

export const Select = forwardRef(
  (
    {
      className,
      autoComplete,
      name,
      type,
      error,
      currentData,
      carsIdData,
      ...rest
    },
    ref
  ) => {
    const getOption = (value) => {
      return (
        <option key={value} className="option" value={value}>
          {value}
        </option>
      );
    };

    return (
      <select
        className={clsx("select", className)}
        autoComplete={autoComplete}
        name={name}
        type={type}
        ref={ref}
        size="5"
        {...rest}
      >
        <option className="option option__def">
          {currentData?.CarId || "Select Car Id"}
        </option>
        {carsIdData?.map((item) => getOption(item))}
      </select>
    );
  }
);
