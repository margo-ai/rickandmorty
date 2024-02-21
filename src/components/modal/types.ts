import { RefCallback } from 'react';

export interface IModalProps {
  visible: boolean;
  hide: RefCallback<PointerEvent>;
}
