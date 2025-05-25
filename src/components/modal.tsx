import { cn } from "@/config/utils";

interface ModalProps {
  title: string;
  body: string;
  isOpen: boolean;
  close: () => void;
  className?: string;
}
export const Modal = ({
  title,
  body,
  isOpen,
  close,
  className,
}: ModalProps) => {
  return (
    <dialog className={cn("modal", isOpen ? "modal-open" : "")}>
      <div
        className={cn(
          "modal-box w-1/2 max-w-5xl border-6 border-white/90 bg-[#1E43AA] text-white/90",
          className,
        )}
      >
        <h3 className="text-lg font-bold text-[#EA7B00]">{title}</h3>
        <p className="py-4 text-xs lg:text-sm">{body}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={close} className="btn text-[#EA7B00]">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
