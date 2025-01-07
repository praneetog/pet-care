export function Button({ label, onClick }) {
    return (
      <button className="h-full w-full px-4 py-2 rounded-full bg-[#031D44] text-[#F2E3BC]" onClick={onClick} type="button">
        {label}
      </button>
    );
}