import React, { useState, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from '../modal/Modal';

import { IModalWrapperProps } from './types';

export const ModalWrapper = ({ actionNode, children }: IModalWrapperProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  return (
    <div className="modal-wrapper">
      <div className="modal--action" onClick={showModalHandler}>
        {actionNode}
      </div>
      {createPortal(
        <Modal visible={showModal} hide={hideModalHandler}>
          {typeof children === 'function' ? children({ hide: hideModalHandler }) : children}
        </Modal>,
        document.body,
      )}
    </div>
  );
};
