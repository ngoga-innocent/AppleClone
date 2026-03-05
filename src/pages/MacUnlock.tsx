import ModalContent from "../Components/utils/SecurityModal";

export default function MacUnlockModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="w-130 rounded-xl bg-gray-200/90 backdrop-blur-xl shadow-2xl border border-white/40 p-6">
        <ModalContent />
      </div>
    </div>
  );
}
