import React from "react";
import "./EditFormPopup.scss";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Form } from "../../ui-kit";

const EditFormPopup = ({ isOpen, onClose, currentCarInfo, submitHandler, carsIdData }) => {
  const inputs = [
    {
      label: "Car Id",
      name: "editCarId",
      type: "select",
    },
    {
      label: "Title",
      name: "editTitle",
      type: "text",
    },
    {
      label: "Description",
      name: "editDescription",
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
          <div className="popup__title">Редактировать запись</div>
          <Form
            name="editForm"
            onClose={onClose}
            currentData={currentCarInfo}
            submitHandler={submitHandler}
            inputs={inputs}
            carsIdData={carsIdData}
          />
        </div>
      </div>
    </div>
  );
};

export default EditFormPopup;
