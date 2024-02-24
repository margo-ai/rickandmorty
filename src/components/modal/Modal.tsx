import React, { PropsWithChildren, useCallback, useEffect, RefCallback } from "react";

import { StyledModal, StyledModalBody, StyledModalOverlay } from "./styledComponents";

type IModalProps = {
  visible: boolean;
  hide: RefCallback<PointerEvent>;
};

export const Modal = ({ visible = false, hide, children }: PropsWithChildren<IModalProps>) => {
  const hideModal = useCallback(
    (e: PointerEvent) => {
      hide(e);
    },
    [hide],
  );

  useEffect(() => {
    if (!visible) return;

    const modalElement: HTMLElement | null = document.querySelector(".modal");

    const modalListener = (e: PointerEvent & { target: { className: string; tagName: string } }) => {
      const { target } = e;
      if (!target.className.includes("modal__overlay")) return false;
      hideModal(e);
    };

    if (modalElement) modalElement.addEventListener("click", modalListener);

    return () => {
      modalElement.removeEventListener("click", modalListener);
    };
  }, [visible, hideModal]);

  return (
    visible && (
      <StyledModal className="modal">
        <StyledModalBody className="modal__body">{children}</StyledModalBody>
        <StyledModalOverlay className="modal__overlay"></StyledModalOverlay>
      </StyledModal>
    )
  );
};
