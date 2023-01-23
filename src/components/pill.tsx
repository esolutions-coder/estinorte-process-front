import "../types";

function Pill(props: Pill) {
  const { icon, name, theme, state } = props;
  return (
    <button
      className={`pill btn__paddings ${
        state ? theme : "primary__pressed__theme"
      }`}
    >
      <div className="pill__icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="pill__name">
        <h3>{name}</h3>
      </div>
    </button>
  );
}

export default Pill;
