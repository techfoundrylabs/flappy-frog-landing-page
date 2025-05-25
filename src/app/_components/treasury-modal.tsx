"use client"
import { Modal } from "@/components/modal";
import { useModal } from "@/hooks/use-modal";

export const useTreasuryModal = () => {
  const { isOpen, open, close } = useModal();
  return { isOpen, open, close };
};

export const TreasuryModal = () => {
  const { isOpen, close } = useTreasuryModal();
  return (
    <Modal
      isOpen={isOpen}
      close={close}
      title="Info"
      body="Mollit et veniam cupidatat id reprehenderit nostrud. Magna enim aute dolore occaecat reprehenderit officia enim ut. Labore do voluptate eu do excepteur ea pariatur quis nisi sunt qui tempor duis dolor. Voluptate exercitation amet Lorem ut aliqua consequat et. Enim Lorem tempor adipisicing proident non ea nostrud irure proident Lorem quis. Ullamco qui laborum dolor amet proident ea ex aute occaecat aliquip exercitation laboris. Velit proident excepteur ex non ad ipsum ea voluptate reprehenderit.

Duis ut cupidatat minim pariatur ullamco incididunt labore laborum esse. Commodo velit dolor consectetur dolore et cupidatat aliqua ea exercitation non. Eiusmod labore aute eiusmod dolore nulla aliquip qui mollit ex veniam minim exercitation laboris. Excepteur anim adipisicing minim reprehenderit incididunt anim ex excepteur officia elit. Proident sit Lorem cillum adipisicing non consequat est fugiat fugiat.

Velit laboris quis do quis tempor eiusmod nostrud aute quis irure voluptate dolor ad in. Ut nisi id ex enim consequat ex qui ea voluptate laborum. Occaecat dolor ex mollit sint laborum fugiat sunt labore aliquip reprehenderit ipsum."
    />
  );
};
