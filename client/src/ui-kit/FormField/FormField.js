import React from "react";
import "./FormField.scss";
import clsx from "clsx";
import { Input, Select, TextArea } from "../../ui-kit";

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
  currentData,
  carsIdData,
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
      {type === "text" && (
        <>
          <label className="formField__label" htmlFor={name}>
            {label}
            {isRequired && <span className="formField__labelRequired"> *</span>}
          </label>
          {renderInput()}
          {error && <div className="formField__errorMessage">{error}</div>}
        </>
      )}
      {type === "date" && (
        <>
          <label className="formField__label" htmlFor={name}>
            {label}
            {isRequired && <span className="formField__labelRequired"> *</span>}
          </label>
          {renderInput()}
          {error && <div className="formField__errorMessage">{error}</div>}
        </>
      )}
      {type === "textarea" && (
        <>
          <label
            className="formField__label formField__label_type_textarea"
            htmlFor={name}
          >
            {label}
            {isRequired && <span className="formField__labelRequired"> *</span>}
          </label>
          <TextArea
            className={clsx({
              TextArea__active: isFocused,
            })}
            {...(register ? register(name) : register)}
            name={name}
            error={error}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error && <div className="formField__errorMessage">{error}</div>}
        </>
      )}
      {type === "select" && (
        <>
          <label
            className="formField__label formField__label_type_select"
            htmlFor={name}
          >
            {label}
            {isRequired && <span className="formField__labelRequired"> *</span>}
          </label>
          <Select
            className={clsx({
              select__active: isFocused,
              select__error: error,
            })}
            {...(register ? register(name) : register)}
            error={error}
            name={name}
            type={type}
            onFocus={onFocus}
            onBlur={onBlur}
            currentData={currentData}
            carsIdData={carsIdData}
          />
          {error && <div className="formField__errorMessage">{error}</div>}
        </>
      )}
    </div>
  );
};
