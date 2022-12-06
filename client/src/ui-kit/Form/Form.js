import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";
import "./Form.scss";

import { Button, FormField } from "../";

const schemaPostCarInfoApi = yup.object().shape({
  CarId: yup
    .string()
    .matches(/^(\d*)$/, "обязательно к заполнению")
    .required("обязательно к заполнению"),
  title: yup.string().required("обязательно к заполнению"),
  description: yup.string().required("обязательно к заполнению"),
});

const schemaEditCarInfoApi = yup.object().shape({
  editCarId: yup.string().required("обязательно к заполнению"),
  editTitle: yup.string().required("обязательно к заполнению"),
  editDescription: yup.string().required("обязательно к заполнению"),
});

export const Form = ({ name, currentData, submitHandler, inputs, carsIdData }) => {
  const [isFocused, setIsFocused] = useState({
    name: false,
    price: false,
    type: false,
    brand: false,
    buildDate: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      name === "postForm" ? schemaPostCarInfoApi : schemaEditCarInfoApi
    ),
  });
  const watchAllFields = watch();

  const getInputField = ({ label, name, type }) => {
    return (
      <FormField
        key={name}
        label={label}
        name={name}
        type={type}
        register={register}
        error={errors[name] && errors[name].message}
        isFocused={isFocused[name]}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
        currentData={currentData}
        carsIdData={carsIdData}
      />
    );
  };

  const onSubmit = (data) => {
    submitHandler(currentData, data);
    reset();
  };

  const handleFocus = (e) => {
    setIsFocused({
      ...isFocused,
      [e.target.name]: true,
    });
  };

  const handleBlur = (e) => {
    if (watchAllFields[e.target.name] !== "") {
      setIsFocused({
        ...isFocused,
        [e.target.name]: true,
      });
    } else {
      setIsFocused({
        ...isFocused,
        [e.target.name]: false,
      });
    }
  };

  React.useEffect(() => {
    if (currentData) {
      reset({
        editCarId: currentData.CarId,
        editTitle: currentData.title,
        editDescription: currentData.description,
      });
    }
  }, [currentData]);

  return (
    <form className="form" name={name} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => getInputField(input))}
      <Button className="form__submit" type="submit" name="submit">
        Сохранить
      </Button>
    </form>
  );
};
