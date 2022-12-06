import React from "react";
import "./PostFormPopup.scss";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { Form } from "../../ui-kit";

const PostFormPopup = ({ isOpen, onClose, submitHandler, carsIdData }) => {
  const inputs = [
    {
      label: "Car Id",
      name: "CarId",
      type: "select",
    },
    {
      label: "Title",
      name: "title",
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
    },
  ];
  return (
    <div className={clsx("popup", isOpen && "popup__opened")} onClick={onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <div className="popup__close-btn" type="button" onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </div>
        <div>
          <div className="popup__title">Добавить запись</div>
          <Form
            name="postForm"
            onClose={onClose}
            submitHandler={submitHandler}
            inputs={inputs}
            carsIdData={carsIdData}
          />
        </div>
      </div>
    </div>
  );
};

export default PostFormPopup;
