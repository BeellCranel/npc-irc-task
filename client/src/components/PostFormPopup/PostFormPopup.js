import React from "react";
import Form from "../Form/Form";
import "./PostFormPopup.scss";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const PostFormPopup = ({
  isOpen,
  onClose,
  submitHandler,
}) => {
  return (
    <div
      className={clsx("offer-popup", isOpen && "offer-popup__opened")}
      onClick={onClose}
    >
      <div
        className="offer-popup__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="offer-popup__close-btn" type="button" onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </div>
        <div>
          <Form
            onClose={onClose}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PostFormPopup;
