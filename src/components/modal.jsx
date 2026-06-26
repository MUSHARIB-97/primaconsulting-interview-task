import { X } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

            <button
              onClick={onClose}
              className="text-red-400 transition hover:text-red-600"
            >
              <X size={18} />
            </button>
          </div>

          {description && (
            <div className="p-5">
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          )}

          <div className="flex justify-end gap-3 p-5 border-t border-gray-100">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-purple-700 transition border border-purple-200 rounded-xl hover:bg-purple-200"
            >
              {cancelText}
            </button>

            <button
              onClick={onConfirm}
              className="px-4 py-2 text-sm font-medium text-white transition bg-purple-500 rounded-xl hover:bg-purple-600"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
