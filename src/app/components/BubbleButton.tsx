interface BubbleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export function BubbleButton({ onClick, children, disabled = false }: BubbleButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
    >
      {children}
    </button>
  );
}
