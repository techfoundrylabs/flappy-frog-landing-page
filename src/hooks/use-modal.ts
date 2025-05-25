import { type PrimitiveAtom, useAtom } from "jotai";

export const useModal = (initialState: PrimitiveAtom<boolean>) => {
  const [isOpen, setIsOpen] = useAtom(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};
