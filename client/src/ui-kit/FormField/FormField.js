import React from "react";
import "./FormField.scss";
import clsx from "clsx";
import { Input } from "../../ui-kit";

export const FormField = ({
  className,
  label,
  name,
  type,
  register,
  error,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
}) => {
  const renderInput = () => {
    return (
      <Input
        className={clsx({
          input__active: isFocused,
          input__error: error,
        })}
        {...(register ? register(name) : register)}
        autoComplete="on"
        error={error}
        name={name}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  };

  return (
    <div
      className={clsx("formField", className, {
        fieldSet__active: isFocused,
      })}
    >
      <label className="formField__label" htmlFor={name}>
        {label}
        {isRequired && <span className="formField__labelRequired"> *</span>}
      </label>
      {type === "text" && (
        <>
          {renderInput()}
          {error && <div className="formField__errorMessage">{error}</div>}
        </>
      )}
      {type === "date" && (
        <>
          {renderInput()}
          {error && <div className="formField__errorMessage">{error}</div>}
        </>
      )}
    </div>
  );
};
