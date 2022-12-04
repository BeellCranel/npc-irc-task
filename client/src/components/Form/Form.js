import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";
import "./Form.scss";

import { Button, FormField } from "../../ui-kit";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "минимум 1 символ")
    .max(30, "максимум 30 символов")
    .required("обязательно к заполнению"),

  price: yup
    .string()
    .matches(/^(\d*[.?,?]{0,1}\d*)$/, "используйье символы от 0 до 9")
    .required("обязательно к заполнению"),
  type: yup.string().required("обязательно к заполнению"),
  brand: yup.string().required("обязательно к заполнению"),

  buildDate: yup
    .string()
    .required("обязательно к заполнению")
    .matches(
      /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      "пожалуйста укажите дату в формате ГГГГ-ММ-ДД"
    ),
});

const Form = ({ onClose, currentCar, submitHandler }) => {
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
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const watchAllFields = watch();

  const onSubmit = (data) => {
    onClose();
    submitHandler(data);
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
    reset(currentCar);
  }, [currentCar]);

  return (
    <form className="offer-form" name="offer" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Name"
        name="name"
        type="text"
        register={register}
        error={errors.name && errors.name.message}
        isFocused={isFocused.message}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <FormField
        label="Price"
        name="price"
        type="text"
        register={register}
        error={errors.price && errors.price.message}
        isFocused={isFocused.price}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <FormField
        label="Type"
        name="type"
        type="text"
        register={register}
        error={errors.type && errors.type.message}
        isFocused={isFocused.type}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <FormField
        label="Brand"
        name="brand"
        type="text"
        register={register}
        error={errors.brand && errors.brand.message}
        isFocused={isFocused.brand}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <FormField
        label="Build date"
        name="buildDate"
        type="date"
        register={register}
        error={errors.buildDate && errors.buildDate.message}
        isFocused={isFocused.buildDate}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <Button
        className="offer-form__submit"
        type="submit"
        name="submit"
        isDisabled={!isValid}
      >
        Сохранить
      </Button>
    </form>
  );
};

export default Form;
