type ButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "8px 16px",
        backgroundColor: disabled ? "#ccc" : "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: 4,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
